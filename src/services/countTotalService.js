export const countTotal = (squares, requiredWorks, ceilingHeight) => {
  let allSquare = 0;
  let squareForTile = 0;
  let total = 0;

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
            4 * Math.sqrt(allSquare) * ceilingHeight * +item.count
          );
          break;
        case "4SC":
          total += Math.round(4 * Math.sqrt(allSquare) * +item.count);
          break;
        case "windows":
          total += Math.round(allSquare / 7.5) * +item.count;
          break;
        case "indoors":
          total += Math.round(allSquare / 25) * item.count;
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
