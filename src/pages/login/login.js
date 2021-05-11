import React, { useState } from "react";
import { postDataNoToken } from "../../functions/requests";
import Alert, { confirmAlert } from "../../functions/alert";
import "./login.css";

const CreateTaskPage = (props) => {
  const [error, setError] = useState(false);
  //   const [errorText, setErrorText] = useState("Неправильный логин или пароль");
  const postUserData = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    // formData.forEach((value, key) => {
    //     data[key] = value;
    // });

    postDataNoToken("login?developer=Sardar", formData)
      .then((response) => {
        console.log("response", response);
        if (response.status === "ok") {
          Alert("Добро пожаловать");
          localStorage.setItem("tokenData", JSON.stringify(response.message));
          setTimeout(() => props.history.push(`/Test_To-Do/`), 1400);
        } else {
          //   Alert("Неправильный логин или пароль", "error");
          //   setErrorText("Неправильный логин или пароль");
          setError(true);
        }
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  };

  return (
    <div className="main-container">
      <div className="login">
        <form className="loginForm" onSubmit={postUserData}>
          <input
            className="loginInput"
            type="text"
            placeholder="Логин"
            name="username"
            required
          />
          <br />
          <input
            className="loginInput"
            type="password"
            placeholder="Пароль"
            name="password"
            required
          />
          {error ? (
            <div className="loginErrorMessage">
              {/* {errorText} */}
              Неправильный логин или пароль
            </div>
          ) : (
            <br />
          )}
          <br />
          <input className="loginInput loginBtn" value="Войти" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateTaskPage;
