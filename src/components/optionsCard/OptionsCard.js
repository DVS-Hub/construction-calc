import { useState } from "react";
import ContentSquare from "./square/ContentSquare";
import RequiredWorks from "./requiredWorks/RequiredWorks";
import TotalCard from "./totalCard/TotalCard";

import "./optionsCard.sass";

const tabConfig = [
  { id: "sqr", component: <ContentSquare />, label: "Площадь помещения" },
  { id: "wrk", component: <RequiredWorks />, label: "Необходимые работы" },
];

const Btn = ({ id, component, label, activeTab, setActiveTab }) => {
  return (
    <button
      onClick={() => setActiveTab({ id, component })}
      className={`tab__item ${activeTab.id === id ? "active" : null}`}
    >
      {label}
    </button>
  );
};

const OptionsCard = () => {
  const [state, setState] = useState({
    id: "sqr",
    component: <ContentSquare />,
  });

  const tabs = tabConfig.map(({ id, component, label }) => (
    <Btn
      id={id}
      key={id}
      component={component}
      label={label}
      activeTab={state}
      setActiveTab={setState}
    />
  ));
  return (
    <div className="wrapper">
      <div className="tab">
        <div className="tab__wrapper">
          {tabs}
          <div className="card__wrapper">
            <div className="card">{state.component}</div>
            <TotalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
