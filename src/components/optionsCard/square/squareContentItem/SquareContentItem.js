import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSquare } from "../squareSlice";
import { createSelector } from "@reduxjs/toolkit";

import "./squareContentItem.sass";

const makeSelectItemById = createSelector(
  (state) => state.squares.squares,
  (_, id) => id,
  (squares, id) => {
    return squares.find((item) => item.id === id)?.value ?? "";
  }
);

const SquareContentItem = ({ name, unit, id }) => {
  const dispatch = useDispatch();
  const selectCeilingHeight = (state) => state.squares.ceilingHeight;

  const selectItemById = useMemo(
    () => (state) => makeSelectItemById(state, id),
    [id]
  );
  const value = useSelector(
    id === "ceiling_height"
      ? selectCeilingHeight
      : (state) => selectItemById(state, id)
  );

  const changeValue = useCallback(
    (e) => {
      dispatch(changeSquare({ id: id, value: e.target.value }));
    },
    [dispatch, id]
  );

  const clazz = parseFloat(value) < 0 ? "redBorder" : null;

  return (
    <div className="squareContentItem">
      <label className="squareContentItem__label" htmlFor={id}>
        {name}
      </label>
      <input
        className={`squareContentItem__input ${clazz}`}
        id={id}
        name="itemInput"
        type="number"
        placeholder="0.0"
        value={value !== 0 ? value : ""}
        onChange={changeValue}
      />
      <span className="squareContentItem__unit">
        {unit.endsWith("2") ? "м\u00B2" : unit}
      </span>
    </div>
  );
};

export default SquareContentItem;
