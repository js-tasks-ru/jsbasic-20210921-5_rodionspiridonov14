function sumSalary(salaries) {
  // ваш код...
  let sum = 0
  for (let key in salaries) {
    if(typeof salaries[key] == "number" && isNaN(salaries[key]) == false && isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }
    return sum
}
