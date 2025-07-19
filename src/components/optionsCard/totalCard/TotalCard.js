import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import { countTotal } from "../../../services/countTotalService";

import "./totalCard.sass";

const selector = createSelector(
  (state) => state.squares.squares,
  (state) => state.requiredWorks.requiredWorks,
  (state) => state.squares.ceilingHeight,
  (squares, requiredWorks, ceilingHeight) => {
    return countTotal(squares, requiredWorks, ceilingHeight);
  }
);

const TotalCard = () => {
  const total = useSelector(selector);

  return (
    <div className="totalCard">
      <div className="totalCard__costRub">{total} руб</div>
      <div className="totalCard__label">
        Примерная<br></br> общая стоимость работ
      </div>
      <div className="totalCard__costUsd">0 $</div>
      <div className="totalCard__label usd">
        Сумма в долларах США по текущему курсу
      </div>
    </div>
  );
};

export default TotalCard;
