// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 91, 93]

function primes(max) {
  let total = [2]

  function findDivisible(idx) {
    let max = idx - 2

    while (max >= 0) { // o(n/2)
      if (idx % (idx - max) !== 0) {
        total.push(idx)
        break
      }
      max--
    }
  }

  for (let i = 1; i < max + 1; i += 2) { // o(n/2)
    if (i >= 2) {
      findDivisible(i)
    }
  }
  console.log('>>>',total)
  return total
}

primes(94) // o(n^2)
