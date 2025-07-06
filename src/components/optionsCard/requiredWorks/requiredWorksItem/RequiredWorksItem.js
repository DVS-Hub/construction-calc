import "./requiredWorksItem.sass";

const RequiredWorksItem = ({ names, count, unit, id }) => {
  return (
    <div className="requiredWorksItem">
      <label className="requiredWorksItem__label" htmlFor="checkboxItem">
        {names}
        <span className="requiredWorksItem__unit">
          {" "}
          {count}руб/{unit}
        </span>
      </label>
      <div className="border">
        <input
          className="requiredWorksItem__input"
          name="checkboxItem"
          type="checkbox"
          id={id}
        />
      </div>
    </div>
  );
};

export default RequiredWorksItem;
