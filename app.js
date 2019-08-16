// Method One
function createPhoneNumber(numbers) {
  let phoneNumber = '(xxx) xxx-xxxx';
  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace('x', numbers[i]);
  }
  return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Method Two
function createNumber(num) {
  let formatNumber = [];
  for(let i =0; i < num.length; i++) {
    if (i === 0) {
      formatNumber.push('('+ num[i]);
    } else if (i === 2) {
      formatNumber.push(num[i] + ') ');
    } else if (i === 5) {
      formatNumber.push(num[i] + '-');
    } else {
      formatNumber.push(num[i]);
    }
  }
  return formatNumber.join('');
}

console.log(createNumber([3, 0, 5, 9, 0, 7, 7, 0, 8, 6]));
   