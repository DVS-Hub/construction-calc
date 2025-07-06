import "./squareContentItem.sass";

const SquareContentItem = ({ names, unit }) => {
  return (
    <div className="squareContentItem">
      <label className="squareContentItem__label" htmlFor="itemInput">
        {names}
      </label>
      <input
        className="squareContentItem__input"
        name="itemInput"
        type="number"
        placeholder="0.0"
      />
      <span className="squareContentItem__unit">
        {unit.endsWith("2") ? "м\u00B2" : unit}
      </span>
    </div>
  );
};

export default SquareContentItem;
