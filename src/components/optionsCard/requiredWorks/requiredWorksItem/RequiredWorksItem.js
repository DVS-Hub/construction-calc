import { useDispatch, useSelector } from "react-redux";
import { changeCheck } from "../requiredWorksSlice";
import { createSelector } from "@reduxjs/toolkit";

import "./requiredWorksItem.sass";

const makeSelectItemById = (id) =>
  createSelector(
    (state) => state.requiredWorks.requiredWorks,
    (requiredWorks) => {
      return requiredWorks.find((item) => item.id === id)?.check ?? false;
    }
  );

const RequiredWorksItem = ({ name, count, unit, id }) => {
  const dispatch = useDispatch();

  const check = useSelector(makeSelectItemById(id));

  const onChange = (e) => {
    dispatch(changeCheck({ id, value: e.target.checked }));
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
        onChange={onChange}
        checked={check}
      />
    </div>
  );
};

export default RequiredWorksItem;
