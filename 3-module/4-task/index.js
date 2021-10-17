function showSalary(users, age) {
  // ваш код...
  let filteredUsers = users.filter(item => item.age <= age);
  let outputUsers = filteredUsers.map(item => `${item.name}, ${item.balance}`);
  return outputUsers.join('\n')
}
