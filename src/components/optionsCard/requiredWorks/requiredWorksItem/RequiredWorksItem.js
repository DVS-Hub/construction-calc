import "./requiredWorksItem.sass";

const RequiredWorksItem = ({ name, count, unit, id }) => {
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
      />
    </div>
  );
};

export default RequiredWorksItem;
