import React, { useState } from "react";
import editIcon from "./../../assets/icons/editIcon.svg";
import { postData } from "../../functions/requests";
import Alert, { confirmAlert } from "../../functions/alert";

const EditTextBlock = ({ data, getTasks }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(data.text);

  const editTaskData = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    const status =
      data.status === 0 ? 1 : data.status === 10 ? 11 : data.status;

    formData.append("status", status);

    // check changing text
    if (text !== data.text) {
      postData(`edit/${data.id}?developer=Sardar`, formData)
        .then((response) => {
          console.log("response", response);
          if (response.status === "ok") {
            getTasks();
            Alert("Задача обновлена");
            setEdit(false);
          } else {
            Alert("Правильно заполните данные", "error");
          }
        })
        .catch(() =>
          confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
        );
    } else {
      setEdit(false);
    }
  };

  return (
    <div>
      {edit ? (
        <div className={"overlay"}>
          <div className={"dialog"}>
            <form className="modal-form" onSubmit={editTaskData}>
              <h2>Изменение данных</h2>
              <div className="form-group">
                <label htmlFor="text">Текст задачи</label>
                <textarea
                  type="text"
                  name="text"
                  defaultValue={data.text}
                  className="form-control"
                  onChange={(e) => setText(e.target.value)}
                  id="text"
                  required
                ></textarea>
                <div className="btn-block">
                  <input
                    type="submit"
                    className="btn add-btn w-50 mt-2"
                    value="Обновить"
                  />
                  <button className="btn" onClick={() => setEdit(false)}>
                    Отмена
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <img src={editIcon} onClick={() => setEdit(true)} alt="editImg"/>
      )}
    </div>
  );
};

export default EditTextBlock;
