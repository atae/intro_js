function range(start, end) {
  if (end < start){
    return []
  }
  let prev_arr = range(start, end - 1)
  prev_arr.push(end)
  return prev_arr
}


function sum(array) {
  if (array.length === 0 ){
    return 0
  }
  prev_sum = sum(array.slice(0,-1))
  console.log(array);
  prev_sum += array[array.length - 1]
  // console.log(array[array.length-1]);
  return prev_sum
}

//
// console.log(sum([1,2,3]))

function exponent1(base, power) {
  if (power === 0){
    return 1
  }
  return base * exponent1(base, power - 1)

}

// console.log(exponent1(2,4))

function exponent2(base, power) {
  if (power === 0){
    return 1
  }
  if (power === 1){
    return base
  }

  if (power % 2 === 0){
    return Math.pow(exponent2(base, power/2),2)
  } else {
    return base * exponent2(base, (power-1)/2) * exponent2(base, (power-1)/2)
  }
}

// console.log(exponent2(3,3))

function fibonacci(num) {
  if (num === 1){
    return [1]
  }
  if (num === 2){
    return [1,1]
  }

  prev_fib = fibonacci(num - 1)
  // console.log(prev_fib);
  prev_fib.push(prev_fib[prev_fib.length-2] + prev_fib[prev_fib.length - 1])
  return prev_fib
}

// console.log(fibonacci(6));


function bsearch(array, target) {
  if (array.length === 0) {
    return -1;
  }
  let mid_idx = Math.floor(array.length/2)
  mid_val = array[mid_idx]
  // console.log(array);
  if (mid_val === target){
    return mid_idx
  } else if (mid_val > target) {
    left = array.slice(0, mid_idx)
    console.log("left");
    console.log(left);
    return bsearch(left, target)
  } else {
    right = array.slice(mid_idx + 1)
    console.log("right");
    console.log(right);
    search = bsearch(right, target)
    if (search === -1) {
      return -1;
    } else {
      console.log(mid_idx+1);
      return (mid_idx + 1) + search
    }
    // return (mid_idx + 1) + search
  }
}

// console.log(bsearch([1, 2, 3], 3))

function make_better_change(value, coins_array) {
  if (value === 0) {
    return []
  }
  let coins = []
  let best_path = []

  function correct_coins(coin) {
    if (coin <= value){
      return coin
    }
  }

  coins_array = coins_array.filter(correct_coins)
  //
  // function coin_select(coin){
  //   let amount = value - coin
  //   coins.push(coin)
  //   value = make_better_change(amount, coins_array)
  //   coins.push(value)
  //   if (coins.length < best_path.length || best_path.length === 0){
  //     best_path = coins
  //   }
  // }
  //
  // coins_array.forEach(coin_select)

  // return best_path

  for (var i = 0; i < coins_array.length; i++) {
    let amount = value - coins_array[i]
    coins = make_better_change(amount, coins_array).concat(coins_array[i])
    if (coins.length < best_path.length || best_path.length === 0){
      best_path = coins
    }
  }
  return best_path
}
// console.log(make_better_change(14, [10, 7, 1]));

function merge_sort(array) {
  if (array.length === 0) {
    return null
  }
  if (array.length === 1) {
    // console.log("yes");
    return array
  }
  console.log(array);
  let mid_idx = Math.floor(array.length/2)
  let left_arr = array.slice(0, mid_idx)
  // console.log(left_arr)
  let right_arr = array.slice(mid_idx)
  // console.log(right_arr);
  let left_merged = merge_sort(left_arr)
  let right_merged = merge_sort(right_arr)
  function merge(left, right) {
    console.log(left);
    console.log(right);
    let join = []
    while(left.length != 0 && right.length != 0)  {
       if (left[0] > right[0]){
        join.push(right.shift())
      }else {
        join.push(left.shift())
      }
    }
    // console.log(join)
    return join.concat(left, right)
  }

  console.log(left_merged);
  console.log(right_merged);
  return merge(left_merged, right_merged)
}

// console.log(merge_sort([4,2,3,4,5,6,7,2,3]));

function subsets(array) {
  if (array.length === 0) {
    return [[]]
  }
  console.log(array);
  let prev_subsets = subsets(array.slice(0, array.length-1))

  i = 0
  let subs = []
  while (i < prev_subsets.length){


    let value = [prev_subsets[i].concat(array[array.length-1])]
    subs = subs.concat(value)
    console.log(subs);


    i++
  }

    return prev_subsets.concat(subs)

}
console.log(subsets([1,2,3]))
