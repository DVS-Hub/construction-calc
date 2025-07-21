import { useDispatch } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { changeCount } from "../../requiredWorks/requiredWorksSlice";

import "./adminItem.sass";

const AdminItem = ({ name, count, unit, id }) => {
  const { request } = useHttp();
  const dispatch = useDispatch();

  const onChange = async (e) => {
    try {
      await request(
        `http://localhost:3001/operations/${id}`,
        "PATCH",
        `${JSON.stringify({ count: e.target.value })}`
      );
      dispatch(changeCount({ id, value: e.target.value }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="adminItem">
      <label className="adminItem__label" htmlFor="adminInput">
        {name}
      </label>
      <input
        className="adminItem__input"
        name="adminInput"
        type="number"
        id={id}
        placeholder={count}
        onBlur={onChange}
      />
      <span className="adminItem__unit">{unit}</span>
    </div>
  );
};

export default AdminItem;
