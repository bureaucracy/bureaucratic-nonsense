let arr = [3, 14, 12, 11, 1, 7, 5, 6]

function swap(arr, idx, end) {
  const temp = arr[idx]
  arr[idx] = arr[end]
  arr[end] = temp
}

function sort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const p = partition(arr, start, end)
    // o(log n)
    sort(arr, start, p - 1)
    sort(arr, p + 1, end)
  }
  return `sorting... ${arr}`
}

function partition(arr, start, end) {
  // reset pivot index to the start of the new array
  let pivot = start

  // o(n)
  for (let i = pivot; i <= end - 1; i++) {
    if (arr[i] <= arr[end]) {
      swap(arr, i, pivot)
      pivot++
    }
  }

  swap(arr, pivot, end)

  return pivot
}

sort(arr)
