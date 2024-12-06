// Custom implementation of Array.prototype.map
Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Custom implementation of Array.prototype.reduce
Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Custom implementation of Array.prototype.filter
Array.prototype.customFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Custom implementation of Array.prototype.flatMap
Array.prototype.customFlatMap = function (callback) {
  return this.map(callback).reduce((acc, curr) => acc.concat(curr), []);
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Testing customMap
console.log(numbers.customMap((num) => num * 2)); // [2, 4, 6, 8, 10]

// Testing customReduce
console.log(numbers.customReduce((sum, num) => sum + num, 0)); // 15

// Testing customFilter
console.log(numbers.customFilter((num) => num % 2 === 0)); // [2, 4]

// Testing customFlatMap
console.log(numbers.customFlatMap((num) => [num, num * 2])); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
