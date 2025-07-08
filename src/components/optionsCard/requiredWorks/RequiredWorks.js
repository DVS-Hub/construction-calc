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

const requiredWorks = () => {
  return (
    <>
      <div className="contentRequiredWorks">
        <h2 className="contentRequiredWorks__title">
          Название необходимых работ:
        </h2>
        <div className="contentRequiredWorks__listItems">
          <RequiredWorksItem
            name="Демонтаж, зачистка старой отделки"
            count="20"
            unit="м2"
            id="1"
          />
          <RequiredWorksItem
            name="Штукатурка стен"
            count="20"
            unit="м2"
            id="6"
          />
          <RequiredWorksItem
            name="Установка плинтуса на пол "
            count="20"
            unit="м2"
            id="2"
          />
          <RequiredWorksItem
            name="Плитка санузлы, пол кухни, коридор"
            count="20"
            unit="м2"
            id="3"
          />
          <RequiredWorksItem
            name="Натяжной / гипсокартонный потолок"
            count="20"
            unit="м2"
            id="4"
          />
          <RequiredWorksItem
            name="Электрика: розетки, выключ., свет"
            count="10000"
            unit="шт/25м2"
            id="5"
          />
          <RequiredWorksItem
            name="Вставка входной двери"
            count="20"
            unit="м2"
            id="7"
          />
        </div>
        <div className="contentRequiredWorks__comment">
          <div className="comment__standart">
            <Comment arrComments={arr} />
          </div>
        </div>
      </div>
    </>
  );
};

export default requiredWorks;
