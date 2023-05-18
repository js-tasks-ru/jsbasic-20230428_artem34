let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};


function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (isValidNumber(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}




function isValidNumber (number) {
  if (typeof number !== 'number' || isNaN(number) || number === Infinity || number === -Infinity) {
    return false;
  }
  return true;
}
