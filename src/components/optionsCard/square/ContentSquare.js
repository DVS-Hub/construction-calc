import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SquareContentItem from "./squareContentItem/SquareContentItem";
import Comment from "../comment/Comment";
import { fetchSquares } from "./squareSlice";

import "./contentSquare.sass";

const arr = [
  "устанавливайте площадь помещений там, где необходим ремонт",
  "если есть дополнительные комнаты, например, Спальня №3, то добавляйте их площадь к существующим в калькуляторе",
];

const ContentSquare = () => {
  const squares = useSelector((state) => state.squares.squares);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSquares());
  }, []);

  const items = () => {
    return squares.map(({ name, id }) => {
      return <SquareContentItem key={id} name={name} unit={"m2"} id={id} />;
    });
  };
  return (
    <>
      <div className="contentSquare">
        <SquareContentItem
          name="Высота потолка в квартире:"
          unit="м"
          id="ceiling_height"
        />
        <h2 className="contentSquare__title">Площадь отдельных комнат:</h2>
        <div className="contentSquare__listItems">{items()}</div>
        <div className="contentSquare__comment">
          <Comment arrComments={arr} />
        </div>
      </div>
    </>
  );
};

export default ContentSquare;
