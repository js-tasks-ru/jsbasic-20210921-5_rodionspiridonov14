function getMinMax(str) {
  // ваш код...
  const arr = str.split(' ')
  const num = arr.filter(item => {
    const parse = parseFloat(item);
    return isNaN(parse) != true
  })
  const num1 = num.map(item => parseFloat(item))
  let result = {
    min: Math.min(...num1),
    max: Math.max(...num1)
  }
  return result
}
