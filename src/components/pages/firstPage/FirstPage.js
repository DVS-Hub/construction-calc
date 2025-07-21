import { useNavigate } from "react-router-dom";

import Header from "../../header/Header";
import OptionsCard from "../../optionsCard/OptionsCard";

import "./firstPage.sass";

const FirstPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    localStorage.getItem("login") ? navigate("admin") : navigate("login");
  };
  return (
    <>
      <Header />
      <OptionsCard />
      <button
        onClick={() => {
          onLogin();
        }}
        className="btn-admin"
      >
        Войти как администратор
      </button>
    </>
  );
};

export default FirstPage;
