// bind, call, apply

const ex1 = {
  alpha: true,
  beta: false,
  printAll: function () {
    console.log(this.alpha, this.beta)
  }
}

ex1.printAll() // outputs: true false

const bnd = ex1.printAll.bind({
  alpha: false,
  beta: true
})

bnd() // BIND outputs: false true

const ex2 = {
  alpha: 'cats',
  beta: 'a lot',
  printAll: function (food = 'beets', day = 'sundays') {
    console.log(this.alpha, 'eat', food, this.beta, 'on', day)
  }
}

ex2.printAll()  // outputs: cats eat beets a lot on sundays

ex2.printAll.call({
  alpha: 'dogs',
  beta: 'a little'
}, 'carrots', 'mondays')
                // CALL outputs: dogs eat carrots a little on mondays

ex2.printAll.apply({
  alpha: 'turtles',
  beta: 'a bit'
}, ['pickles', 'fridays'])
                // APPLY outputs: turtles eat pickles a bit on fridays

// currying

function currySum(x) {
  return function (y) {
    return x + y
  }
}

currySum(1)(2)          // outputs: 3

// const, let

const CANNOT_REASSIGN = true // can also be const cannotReassign = true

let canChange = true

try {
  const someConstant = true
} catch (e) {
  // no access to someConstant
}

// callbacks

function doACallCb(str, callback) {
  console.log(str)
  callback(false, true)
}

doACall('hello!', (err, cb) => {
  if (err) {
    // deal with error
  } else {
    console.log(cb)
    // outputs: hello!
    //          true
  }
})

// promises

const doACallPr = function (pass = true) {
  return new Promise((resolve, reject) => {
    if (!pass) {
      return reject(false)
    }

    return resolve(true)
  })
}

doACallPr()
.then((resolve) => {
  console.log(resolve)
})

doACallPr(false)
.then(() => {
})
.catch((reject) => {
  console.log(reject)
})

// async/await

const doACallAs = async function (pass = true) {
  if (!pass) {
    console.log(false)
    throw false
  }

  setTimeout(() => {
    console.log(true)
    return true
  }, 1)
}


await doACallAs()

try {
  await doACallAs(false)
} catch (err) {
  console.log('done')
}

// map, filter, reduce

const arr = ['a', 'b', 'c']

arr.map((item) => {
  return `${item} is called`
})        // map outputs: ["a is called", "b is called", "c is called"]

arr.filter((item) => {
  return item < 'c'
})        // filter outputs: ["a", "b"]

arr.reduce((lastItem, item) => {
  return lastItem + item
})        // reduce outputs: abc

// classes

class someClass {
  constructor(alpha) {
    this._alpha = alpha || true
    this._beta = false
    this._gamma = 1
  }

  get beta() {
    return this._beta
  }

  get gamma() {
    return this._gamma
  }

  get alpha() {
    return this._alpha
  }

  set gamma(val) {
    this._gamma = val
  }

  printAll() {
    console.log(this._alpha, this._beta, this._gamma)
  }
}

const sc = new someClass()

sc.beta                     // outputs: false
sc.gamma = true; sc.gamma   // outputs: true
sc.printAll()               // outputs: true, false, true

const sc2 = new someClass(2)

sc2.alpha                 // outputs: 2

// destructuring

[a, b, ...rest] = ['a', 'b', 'c', 'd', 'e']

console.log(rest)         // outputs: ['c', 'd', 'e']

// object spread (opposite of rest parameters)

function spread(a, b, c) {
  return `${a} then ${b} then ${c}`
}

const colors = ['red', 'green', 'blue']

console.log(spread(...colors))   // outputs: red then green then blue

// rest parameters (opposite of object spread)

function rest(...args) {
  console.log(...args)
}

rest('a', 'b', 'c')             // outputs: a b c