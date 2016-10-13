Array.prototype.my_each = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i])
  }
  return this
};
//
array1 = [1,2,3]
// array1.my_each((el) => {console.log(el)});

Array.prototype.myMap = function (callback) {
  let map = []
  this.my_each(el => map.push(callback(el)))
  return map
}

console.log(array1.myMap( num => num *2))

Array.prototype.myInject = function(callback) {
  accumulator = this[0]
  this.slice(1).my_each(el => accumulator = callback(accumulator, el))
  return accumulator
}

console.log(array1.myInject((result, el) => result + el));
