const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(a) {
	return a.reduce((a,b) => a + b, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1)
};

const power = function(b, e) {
  n = []
  for(let i = 0; i < e; i++) n.push(b)
  return multiply(n)	
};

const factorial = function(n) {
	f = [1]
  for(let i = 1; i <= n; i++) f.push(i)
  return multiply(f)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
