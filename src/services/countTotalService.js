export const countTotal = (squares, requiredWorks, ceilingHeight) => {
  let allSquare = 0;
  let squareForTile = 0;
  let total = 0;
  const height = +ceilingHeight > 0 ? +ceilingHeight : 0;
  const CONSTRUCTION_COEFFICIENTS = {
    // Среднее количество квадратных метров на одно окно
    SQUARE_METERS_PER_WINDOW: 7.5,

    // Среднее количество квадратных метров на одну дверь
    SQUARE_METERS_PER_DOOR: 25,

    // Коэффициент периметра помещения (4 стороны)
    PERIMETER_COEFFICIENT: 4,
  };

  squares.forEach((item) => {
    allSquare += +item.value > 0 ? +item.value : 0;
    squareForTile += item.id.includes("tile") ? +item.value : 0;
  });

  requiredWorks.forEach((item) => {
    if (item.check) {
      switch (item.specific) {
        case "SC":
          total += allSquare * +item.count;
          break;
        case "4SHC":
          total += Math.round(
            CONSTRUCTION_COEFFICIENTS.PERIMETER_COEFFICIENT *
              Math.sqrt(allSquare) *
              height *
              +item.count
          );
          break;
        case "4SC":
          total += Math.round(
            CONSTRUCTION_COEFFICIENTS.PERIMETER_COEFFICIENT *
              Math.sqrt(allSquare) *
              +item.count
          );
          break;
        case "windows":
          total +=
            Math.round(
              allSquare / CONSTRUCTION_COEFFICIENTS.SQUARE_METERS_PER_WINDOW
            ) * +item.count;
          break;
        case "indoors":
          total +=
            Math.round(
              allSquare / CONSTRUCTION_COEFFICIENTS.SQUARE_METERS_PER_DOOR
            ) * item.count;
          break;
        case "toilet":
          total += squareForTile * +item.count;
          break;
        case "C":
          total += +item.count;
          break;
        default:
          break;
      }
    }
  });
  return total;
};
