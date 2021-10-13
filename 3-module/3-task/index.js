function camelize(str) {
  // ваш код...
  if (str == '') {
    return str
  } else {
    const arr = str.split('-')
    return arr[0] + arr.slice(1).map(item => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    } ).join('');
  }
}
