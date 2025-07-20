import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import { countTotal } from "../../../services/countTotalService";
import Spinner from "../../spinner/Spinner";
import ErrorSpinner from "../../spinner/ErrorSpinner";

import "./totalCard.sass";

const selector = createSelector(
  (state) => state.squares.squares,
  (state) => state.requiredWorks.requiredWorks,
  (state) => state.squares.ceilingHeight,
  (state) => state.totalCard.currency,
  (state) => state.totalCard.totalCardLoadingStatus,
  (squares, requiredWorks, ceilingHeight, currency, loadingStatus) => {
    const total = countTotal(squares, requiredWorks, ceilingHeight);
    const totalUsd = (total / currency).toFixed(2);
    return { total, totalUsd, loadingStatus };
  }
);

const TotalCard = () => {
  const { total, totalUsd, loadingStatus } = useSelector(selector);

  return (
    <div className="totalCard">
      <div className="totalCard__costRub">
        {total}
        руб
      </div>
      <div className="totalCard__label">
        Примерная<br></br> общая стоимость работ
      </div>
      <div className="totalCard__costUsd">
        {loadingStatus === "idle" ? (
          totalUsd
        ) : loadingStatus === "loading" ? (
          <Spinner />
        ) : (
          <ErrorSpinner />
        )}{" "}
        $
      </div>
      <div className="totalCard__label usd">
        Сумма в долларах США по текущему курсу
      </div>
    </div>
  );
};

export default TotalCard;
