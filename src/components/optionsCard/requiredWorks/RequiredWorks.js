import { useSelector } from "react-redux";
import Comment from "../comment/Comment";
import RequiredWorksItem from "./requiredWorksItem/RequiredWorksItem";

import "./requiredWorks.sass";

const arr = [
  <div>устанавливайте галочку напротив услуги, если она необходима</div>,
  <div>
    рядом с услугой отображена <span>средняя</span> стоимость на текущий момент.
    Сюда входит работа и материал. Это может быть стоимость за квадратный или
    погонный метр, усредненная стоимость всей сантехники для ремонта и тд.
    Итоговый вариант может отличаться от выбранных вами материалов, но
    калькулятор даст вам понимание о стоимости ремонта среднего качества.
  </div>,
];

const RequiredWorks = () => {
  const { requiredWorks, requiredWorksLoadingStatus } = useSelector(
    (state) => state.requiredWorks
  );

  const items = requiredWorks.map(({ name, count, unit, id }) => {
    return (
      <RequiredWorksItem
        key={id}
        name={name}
        count={count}
        unit={unit}
        id={id}
      />
    );
  });

  return (
    <>
      <div className="contentRequiredWorks">
        <h2 className="contentRequiredWorks__title">
          Название необходимых работ:
        </h2>
        <div className="contentRequiredWorks__listItems">{items}</div>
        <div className="contentRequiredWorks__comment">
          <div className="comment__standart">
            <Comment arrComments={arr} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequiredWorks;
