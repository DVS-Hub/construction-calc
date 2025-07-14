import { useNavigate } from "react-router-dom";

import Header from "../../header/Header";
import OptionsCard from "../../optionsCard/OptionsCard";

import "./firstPage.sass";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <OptionsCard />
      <button
        onClick={() => {
          navigate("login");
        }}
        className="btn-admin"
      >
        Войти как администратор
      </button>
    </>
  );
};

export default FirstPage;
