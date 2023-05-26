function showSalary(users, age) {
  let result = [];
  users.forEach(function(arr) {
    if (arr.age <= age){
      result.push(`${arr.name}, ${arr.balance}`);
    }
  });
 
  return result.join('\n');
}
