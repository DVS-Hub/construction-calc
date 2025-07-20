import "./error-spinner.sass";

const ErrorSpinner = () => {
  return (
    <div className="error-spinner">
      <div className="error-spinner__circle"></div>
      <div className="error-spinner__message">
        Произошла ошибка при загрузке данных
      </div>
    </div>
  );
};

export default ErrorSpinner;
