import { useState } from "react";
import ContentSquare from "./square/ContentSquare";
import RequiredWorks from "./requiredWorks/RequiredWorks";
import TotalCard from "./totalCard/TotalCard";

import "./optionsCard.sass";

const OptionsCard = () => {
  const [state, setState] = useState("sqr");

  const switchTab = (attr) => {
    setState(attr);
  };

  return (
    <div className="wrapper">
      <div className="tab">
        <div className="tab__wrapper">
          <button
            onClick={(e) => {
              switchTab(e.target.getAttribute("data-tab"));
            }}
            className={`tab__item ${state === "sqr" ? "active" : null}`}
            data-tab="sqr"
          >
            Площадь помещения
          </button>
          <button
            onClick={(e) => {
              switchTab(e.target.getAttribute("data-tab"));
            }}
            className={`tab__item ${state === "wrk" ? "active" : null}`}
            data-tab="wrk"
          >
            Необходимые работы
          </button>
          <div className="card__wrapper">
            <div className="card">
              {state === "sqr" ? (
                <ContentSquare />
              ) : state === "wrk" ? (
                <RequiredWorks />
              ) : null}
            </div>
            <TotalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
