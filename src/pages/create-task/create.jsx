import React from "react";
import { postDataNoToken } from "../../functions/requests";
import Alert, { confirmAlert } from "../../functions/alert";
import "./create.css";
const CreateTaskPage = (props) => {

    const postTaskData = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        postDataNoToken("create?developer=Sardar", formData)
            .then((response) => {
                console.log("response", response);
                if (response.status === 'ok') {
                    Alert("Задача добавлена");
                    setTimeout(() => props.history.push(`/to-do/`), 1400);
                } else {
                    Alert('Правильно заполните данные', "error");
                }
            })
            .catch(() =>
                confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
            );
    };

    return (
        <div className="main-container">
            <form className="input-blocks" onSubmit={postTaskData}>
                <div className="form-group">
                    <label htmlFor="username">Имя пользователя</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Описания</label>
                    <textarea
                        type="text"
                        name="text"
                        required
                        className="form-control"
                        id="text"
                    ></textarea>
                </div>
                <div className="text-right">
                    <input
                        type="submit"
                        className="btn add-btn w-50 mt-5"
                        value="Создать"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateTaskPage;
