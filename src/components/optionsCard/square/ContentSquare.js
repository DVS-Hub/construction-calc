import { useSelector } from "react-redux";
import SquareContentItem from "./squareContentItem/SquareContentItem";
import Comment from "../comment/Comment";

import "./contentSquare.sass";
import { useMemo } from "react";

const arr = [
  "устанавливайте площадь помещений там, где необходим ремонт",
  "если есть дополнительные комнаты, например, Спальня №3, то добавляйте их площадь к существующим в калькуляторе",
];

const units = {
  sq: "m2",
  h: "м",
};

const ContentSquare = () => {
  const squares = useSelector((state) => state.squares.squares);

  const items = useMemo(() => {
    return squares.map(({ name, id }) => {
      return <SquareContentItem key={id} name={name} unit={units.sq} id={id} />;
    });
  }, [squares]);

  return (
    <>
      <div className="contentSquare">
        <SquareContentItem
          name="Высота потолка в квартире:"
          unit={units.h}
          id="ceiling_height"
        />
        <h2 className="contentSquare__title">Площадь отдельных комнат:</h2>
        <div className="contentSquare__listItems">{items}</div>
        <div className="contentSquare__comment">
          <Comment arrComments={arr} />
        </div>
      </div>
    </>
  );
};

export default ContentSquare;
