import { useDispatch } from "react-redux";
import { changeCheck } from "../requiredWorksSlice";

import "./requiredWorksItem.sass";

const RequiredWorksItem = ({ name, count, unit, id }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    console.log(e.target.checked);
    dispatch(changeCheck({ id: id, value: e.target.checked }));
  };

  return (
    <div className="requiredWorksItem">
      <label className="requiredWorksItem__label" htmlFor="checkboxItem">
        {name}
        <span className="requiredWorksItem__unit">
          {" "}
          {count}руб/{unit}
        </span>
      </label>
      <input
        className="requiredWorksItem__input"
        name="checkboxItem"
        type="checkbox"
        id={id}
        onClick={onChange}
      />
    </div>
  );
};

export default RequiredWorksItem;
