const tree =  {
  left: {
    left: false,
    right: true
  },
  right: {
    left: true,
    right: false
  }
}

let sym = true

function isSymmetric(left, right) {
  if (typeof left === 'object' && typeof right === 'object') {
    isSymmetric(left.left, right.right)
    isSymmetric(left.right, right.left)
  } else if (typeof left !== 'object' && left !== right) {
    sym = false
  }
}

isSymmetric(tree.left, tree.right)

console.log('>> ', sym)