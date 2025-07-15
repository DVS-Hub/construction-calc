import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSquare } from "../squareSlice";
import "./squareContentItem.sass";

const SquareContentItem = ({ name, unit, id }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const changeValue = (e) => {
    dispatch(changeSquare({ id: id, value: e.target.value }));
    setValue(e.target.value);
  };

  const clazz = value < 0 ? "redBorder" : null;

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
        value={value}
        onChange={changeValue}
      />
      <span className="squareContentItem__unit">
        {unit.endsWith("2") ? "м\u00B2" : unit}
      </span>
    </div>
  );
};

export default SquareContentItem;
