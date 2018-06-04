function sort(arr, start = 0, end = arr.length - 1) {
  function partition(arr, start, end) {
    let pivotIdx = end

    for (let i = pivotIdx; i >= start; i--) {
      if (arr[i] > arr[end]) {
        let tmp = arr[end]
        arr[end] = arr[i]
        arr[i] = tmp
        pivotIdx++
      }
    }

    return pivotIdx
  }

  const p = partition(arr, start, end)

  if (start < end) {
    sort(arr, start, p - 1)
    sort(arr, p + 1, end)
  } else {
    console.log('final> ', arr)
  }
}

sort([3,13,7,4,2,18])
