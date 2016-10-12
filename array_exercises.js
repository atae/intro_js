Array.prototype.uniq = function()  {
  let uniq = []
  function uniq_pusher(el) {
    if (uniq.includes(el) == false) {
      uniq.push(el)
    }
  }
  this.forEach(uniq_pusher);
  return uniq
}

// console.log([1,2,3,1].uniq())
// console.log(uniq([1,2,3,5,1,2]))

Array.prototype.two_sum = function() {
  let pairs = []
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        if (pairs.includes([i,j].sort()) == false) {
          pairs.push([i,j])
        }
      }

    }
  }
  return pairs
}

// console.log([-1, 0, 2, -2, 1].two_sum());

Array.prototype.transpose = function() {
  let transpose = []
  for (var i = 0; i < this.length; i++) {
    let row = []
    for (var j = 0; j < this.length; j++) {
      row.push(this[j][i])
    }
    transpose.push(row)
  }
  return transpose
}

console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ].transpose());
