import React, { useEffect, useState } from "react";
import { getDataNoToken } from "../../functions/requests";
import { taskStatus } from "../../constants/status";
import { confirmAlert, quitMessage } from "../../functions/alert";
import Loading from "../../components/loading/loading";
import ReactPaginate from "react-paginate";
import EditTaskBlock from "./edit-block";
import { Link } from "react-router-dom";
import SortBlock from "./sortBlock";
import Checkbox from "./checkbox";
import "./main.css";

const TasksPage = () => {
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [tasksData, setTasksData] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [sortDirection, setSortDirection] = useState("ask");
  const [sortingOptions, setSortingOptions] = useState("username");

  const getTasks = () => {
    getDataNoToken(
      `?developer=Sardar&&page=${activePage}&&sort_field=${sortingOptions}&&sort_direction=${sortDirection}`
    )
      .then((res) => {
        setPageCount(Math.ceil(res.message.total_task_count / 3));
        setTasksData(res.message.tasks);
        setLoading(true);
      })
      .catch(() =>
        confirmAlert("Ошибка сервера. Напишите нам, мы всё починим.")
      );
  };
  
  useEffect(() => {
    getTasks();
  }, [activePage, sortingOptions, sortDirection]);

  

  const handlePageClick = (data) => {
    const selected = data.selected + 1;
    console.log("selected", selected);
    setActivePage(selected);
  };

  console.log("tasksData", pageCount, tasksData);
  return (
    <div className="wrapper main-container">
      <div className="btn-block">
        {/*
        Можно сделать добавление задачи на этой странице с помощью модалки 
        Все же, мне кажется лучше сделать на отдельной странице
        */}
        <Link to={`/create-task/`} className="add-btn btn">
          Создать
        </Link>
        {localStorage.getItem("tokenData") ? (
          <button className="btn" onClick={quitMessage}>
            Выйти
          </button>
        ) : (
          <Link to={`/login/`} className="login-btn btn">
            Авторизация
          </Link>
        )}
      </div>

      {loading ? (
        <div>
          <table className="tables">
            <thead>
              <tr>
                <th className={"thead-item"}>
                  <SortBlock
                    name="Имя пользователя"
                    sortField="username"
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                    setSortingOptions={setSortingOptions}
                  />
                </th>
                <th className={"thead-item"}>
                  <SortBlock
                    name="Email"
                    sortField="email"
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                    setSortingOptions={setSortingOptions}
                  />
                </th>
                <th className={"thead-item"}>
                  <span>Текст задачи</span>
                </th>
                <th className={"thead-item"}>
                  <SortBlock
                    name="Статус"
                    sortField="status"
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                    setSortingOptions={setSortingOptions}
                  />
                </th>
                {localStorage.getItem("tokenData") ? (
                  <th colSpan="2" className="thead-item">
                    Действие
                  </th>
                ) : null}
              </tr>
            </thead>
            <tbody className={"tbody"}>
              {tasksData.length > 0 ? (
                tasksData.map((task) => (
                  <tr key={task.id}>
                    <td data-th="Имя пользователя" className={"tbody-item"}>
                      {task.username}
                    </td>
                    <td data-th="Email" className={"tbody-item"}>
                      {task.email}
                    </td>
                    <td
                      data-th="Текст задачи"
                      className={"tbody-item text-block"}
                    >
                      {task.text}
                    </td>
                    <td data-th="Статус" className={"tbody-item"}>
                      {taskStatus[task.status]}
                    </td>
                    {localStorage.getItem("tokenData") ? (
                      <td data-th="Статус" className={"tbody-item"}>
                        <Checkbox data={task} getTasks={getTasks} />
                      </td>
                    ) : null}
                    {localStorage.getItem("tokenData") ? (
                      <td data-th="Статус" className={"tbody-item edit-task"}>
                        <EditTaskBlock data={task} getTasks={getTasks} />
                      </td>
                    ) : null}
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td colSpan="6">Нет данных по этим параметрам</td>
                </tr>
              )}
            </tbody>
          </table>
          {pageCount > 1 ? (
            <ReactPaginate
              pageCount={pageCount}
              initialPage={activePage}
              onPageChange={handlePageClick}
              activeClassName={"active-btn"}
              pageClassName={"btn"}
              containerClassName={"pagination"}
            />
          ) : null}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default TasksPage;
