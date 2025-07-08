import AdminItem from "./adminItem/AdminItem";
import Comment from "../comment/Comment";
import "./admin.sass";

const arr = [
  "устанавливайте только цифры, единицы измерения подставляются автоматически",
];

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin__panel">
        <h2 className="admin__panel-header">
          Установите средний ценник каждой работы:
        </h2>
        <div className="admin__panel-listItems">
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
          <AdminItem
            name={"Демонтаж, зачистка старой отделки"}
            count={20}
            unit={"руб/м2"}
            id={1}
          />
        </div>
        <div className="admin__panel-wrapper">
          <div className="comment__admin">
            <Comment arrComments={arr} />
          </div>
          <button className="admin__panel-btn">Выйти</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
