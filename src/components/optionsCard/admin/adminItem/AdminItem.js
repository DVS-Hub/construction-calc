import "./adminItem.sass";

const AdminItem = ({ name, count, unit, id }) => {
  return (
    <div className="adminItem">
      <label className="adminItem__label" htmlFor="adminInput">
        {name}
      </label>
      {/* <div className="inputDivider"> */}
      <input
        className="adminItem__input"
        name="adminInput"
        type="number"
        id={id}
        placeholder={count}
      />
      {/* </div> */}
      <span className="adminItem__unit">{unit}</span>
    </div>
  );
};

export default AdminItem;
