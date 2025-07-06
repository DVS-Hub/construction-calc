import "./totalCard.sass";

const TotalCard = () => {
  return (
    <div className="totalCard">
      <div className="totalCard__costRub">0 руб</div>
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
