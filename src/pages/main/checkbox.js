import React, { useState } from "react";
import { postData } from "../../functions/requests";
import Alert, { confirmAlert } from "../../functions/alert";

const EditTextBlock = ({ data, getTasks }) => {
  //   const [status, setStatus] = useState(data.status);
  const status = data.status === 0 ? false : data.status === 1 ? false : true;
  const handleClick = (e) => {
    let formData = new FormData(),
      status;

    if (data.status === 0) {
      status = 10;
    } else if (data.status === 10) {
      status = 0;
    } else if (data.status === 1) {
      status = 11;
    } else if (data.status === 11) {
      status = 1;
    }

    formData.append("status", status);
    formData.append("text", data.text);

    console.log("status", status);
    postData(`edit/${data.id}?developer=Sardar`, formData)
      .then((response) => {
        console.log("response", response);
        if (response.status === "ok") {
          getTasks();
        } else {
          Alert("Правильно заполните данные", "error");
        }
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={status}
        onChange={handleClick}
        className="checkbox"
      />
    </div>
  );
};

export default EditTextBlock;
