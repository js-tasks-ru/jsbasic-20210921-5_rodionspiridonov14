function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
  let b = str.slice(0 ,maxlength - 1)
  b  += '\…'
  return b;
  } else {
  return str;
  }
}

