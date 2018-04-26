## add two numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

e.g. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

```
let list1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}

let list2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}
```

### not great solution:

```
let carry = 0
let newList = {}
let newArr = []

function addTwoNumbers(l1, l2) {
  carry += l1.val + l2.val

  if (carry > 9) {
    let carryBit = carry.toString().split('')
    newArr.push(parseInt(carryBit[carryBit.length - 1], 10)
    carryBit.pop()
    carry = parseInt(carryBit, 10)
  } else {
    newArr.push(carry)
    carry = 0
  }

  if (l1.next || l2.next) {
    addTwoNumbers(l1.next, l2.next)
  } else {
    newArr.reverse().map((n, idx) => {
      let obj = {
        val: n,
        next: null
      }

      if (idx > 0) {
        obj.next = newList
      }

      newList = obj
    })

    return newList
  }
}

addTwoNumbers(list1, list2)
```

pros:
- runs O(n) + O(n/2)
- works on initial example

cons:
- doesn't work for situations where the arrays might differ in size and the second list is larger

### better solution:

```
let list1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}

let list2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}
let carry = 0
let newList = {}
let newArr = []

function addTwoNumbers(l1, l2) {
  let sum = carry + (l1 && l1.val || 0) + (l2 && l2.val || 0)
  carry = sum % 10

  let tmp = {
    val: sum,
    next: {
      val: sum % 10,
      next: null
    }
  }

  if (carry > 0) {
    tmp.val = carry
  }

  carry = Math.floor(sum / 10)

  currentNode = tmp.next

  newList.next = currentNode

  if (l1.next || l2.next) {
    addTwoNumbers(l1.next, l2.next)
  } else {
    console.log('**** ', JSON.stringify(newList, null, 2))
    return newList
  }
}
}

addTwoNumbers(list1, list2)
```

pros:
- runs O(n)
