function factorial(n) {
  // ваш код...
  if(n != 0 && n != 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}
