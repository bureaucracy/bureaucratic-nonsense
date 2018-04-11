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
  return new Promise((resolve, reject) => {
    if (!pass) {
      console.log(false)
      return reject(false)
    }

    console.log(true)
    return resolve(true)
  })
}

await doACallAs()

try {
  await doACallAs(false)
} catch (err) {
  console.log('done')
}

// map, filter, reduce

// classes

// destructuring

// object spread (opposite of rest parameters)

// rest parameters (opposite of object spread)