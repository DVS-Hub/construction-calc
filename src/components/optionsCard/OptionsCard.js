import ContentSquare from "./square/ContentSquare";
import RequiredWorks from "./requiredWorks/RequiredWorks";
import TotalCard from "./totalCard/TotalCard";

import "./optionsCard.sass";

const OptionsCard = () => {
  return (
    <div className="wrapper">
      <div className="tab">
        <div className="tab__wrapper">
          <button className="tab__item active">Площадь помещения</button>
          <button className="tab__item">Необходимые работы</button>
          <div className="card__wrapper">
            <div className="card">
              {/* <ContentSquare /> */}
              <RequiredWorks />
            </div>
            <TotalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
