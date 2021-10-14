function makeFriendsList(friends) {
  // ваш код...
  const newUl = document.createElement('ul')
  for (let i = 0; i < friends.length; i++) {
    newUl.innerHTML = newUl.innerHTML + `<li>${friends[i].firstName} ${friends[i].lastName}</li>`;
  }
  return newUl
}
