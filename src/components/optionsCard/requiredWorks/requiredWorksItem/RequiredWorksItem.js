import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import { changeCheck } from "../requiredWorksSlice";
import { createSelector } from "@reduxjs/toolkit";

import "./requiredWorksItem.sass";

const makeSelectItemById = createSelector(
  (state) => state.requiredWorks.requiredWorks,
  (_, id) => id,
  (requiredWorks, id) => {
    return requiredWorks.find((item) => item.id === id)?.check ?? false;
  }
);

const RequiredWorksItem = ({ name, count, unit, id }) => {
  const dispatch = useDispatch();

  const selectItemById = useMemo(
    () => (state) => makeSelectItemById(state, id),
    [id]
  );

  const check = useSelector((state) => selectItemById(state));

  const onChange = useCallback(
    (e) => {
      dispatch(changeCheck({ id: id, value: e.target.checked }));
    },
    [dispatch, id]
  );
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
