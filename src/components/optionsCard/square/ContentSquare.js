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
        <SquareContentItem name="Высота потолка в квартире:" unit="м" />
        <h2 className="contentSquare__title">Площадь отдельных комнат:</h2>
        <div className="contentSquare__listItems">
          <SquareContentItem name="Гостинная" unit="м2" />
          <SquareContentItem name="Гостинная с кухней (студия)" unit="м" />
          <SquareContentItem name="Спальня №1" unit="м" />
          <SquareContentItem name="Спальня №2" unit="м" />
          <SquareContentItem name="Гостинная" unit="м" />
          <SquareContentItem name="Гостинная с кухней (студия)" unit="м" />
          <SquareContentItem name="Спальня №1" unit="м" />
        </div>
        <div className="contentSquare__comment">
          {/* <div className="comment__standart"> */}
          <Comment arrComments={arr} />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ContentSquare;
