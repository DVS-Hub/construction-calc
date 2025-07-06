import Header from "../../header/Header";
import OptionsCard from "../../optionsCard/OptionsCard";

import "./firstPage.sass";

const FirstPage = () => {
  return (
    <>
      <Header />
      <OptionsCard />
      <button className="btn-admin">Войти как администратор</button>
    </>
  );
};

export default FirstPage;
