Array.prototype.bubbleSort = function () {
  let swap = true
  while(swap === true) {
    swap = false
    for (var i = 0; i < this.length; i++) {
      for (var j = i + 1; j < this.length; j++) {
          if (this[i] > this[j]){
            temp = this[i]
            this[i] = this[j]
            this[j] = temp
            swap = true
          }
        }
      }
  }
return this

}
array =  [5,4,3,2,1]
console.log(array.bubbleSort())

function substrings(string) {
  substrings = []
  for (var i = 0; i < string.length; i++) {
    for (var j = i+1; j < string.length+1; j++) {
      substrings.push(string.substring(i,j))
    }
  }
  return substrings
}

string = 'cucklife'
console.log(substrings(string));
