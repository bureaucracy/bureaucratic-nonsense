let arr = [3, 14, 12, 11, 15, 2, 10, 4, 1, 7, 5, 6]

function sort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = Math.floor(arr.length / 2)

  let left = []
  let right = []

  // o(n)
  for (let i = 0; i < arr.length; i++) {
    if (i < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // o(log n)
  left = sort(left)
  right = sort(right)

  return merge(left, right)
}

function merge(left, right) {
  const merged = []

  while (left.length || right.length) {
    if (left.length === 0 || right[0] < left[0]) {
      merged.push(right.shift())
    } else {
      merged.push(left.shift())
    }
  }

  return merged
}

sort(arr)