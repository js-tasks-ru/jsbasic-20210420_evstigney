function getMinMax(str) {
  const dataArr = str.split(' ')
                     .map((item) => item.split(','))
                     .flat()
                     .filter((item) => !isNaN(item));
  return {
    min: Math.min(...dataArr),
    max: Math.max(...dataArr),
  }
}
