import SquareContentItem from "./squareContentItem/SquareContentItem";
import Comment from "../comment/Comment";

import "./contentSquare.sass";

const arr = [
  "устанавливайте площадь помещений там, где необходим ремонт",
  "если есть дополнительные комнаты, например, Спальня №3, то добавляйте их площадь к существующим в калькуляторе",
];

const ContentSquare = () => {
  return (
    <>
      <div className="contentSquare">
        <SquareContentItem names="Высота потолка в квартире:" unit="м" />
        <h2 className="contentSquare__title">Площадь отдельных комнат:</h2>
        <div className="contentSquare__listItems">
          <SquareContentItem names="Гостинная" unit="м2" />
          <SquareContentItem names="Гостинная с кухней (студия)" unit="м" />
          <SquareContentItem names="Спальня №1" unit="м" />
          <SquareContentItem names="Спальня №2" unit="м" />
          <SquareContentItem names="Гостинная" unit="м" />
          <SquareContentItem names="Гостинная с кухней (студия)" unit="м" />
          <SquareContentItem names="Спальня №1" unit="м" />
        </div>
        <div className="comment__standart">
          <Comment arrComments={arr} />
        </div>
      </div>
    </>
  );
};

export default ContentSquare;
