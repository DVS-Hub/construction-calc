import { useSelector } from "react-redux";
import { useMemo } from "react";
import AdminItem from "./adminItem/AdminItem";
import Comment from "../comment/Comment";
import { useNavigate } from "react-router-dom";

import "./admin.sass";

const arr = [
  "устанавливайте только цифры, единицы измерения подставляются автоматически",
];

const Admin = () => {
  const navigate = useNavigate();
  const requiredWorks = useSelector(
    (state) => state.requiredWorks.requiredWorks
  );

  const items = useMemo(() => {
    return requiredWorks.map(({ name, id, count, unit }) => {
      return (
        <AdminItem key={id} name={name} count={count} unit={unit} id={id} />
      );
    });
  }, [requiredWorks]);

  const onExit = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <div className="admin">
      <div className="admin__panel">
        <h2 className="admin__panel-header">
          Установите средний ценник каждой работы:
        </h2>
        <div className="admin__panel-listItems">{items}</div>
        <div className="admin__panel-wrapper">
          <div className="comment__admin">
            <Comment arrComments={arr} />
          </div>
          <button onClick={onExit} className="admin__panel-btn">
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
