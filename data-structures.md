# data structures

## array

```
  const arr = [a, b, c, d]

  n = arr.length

  Action:         Example:          Best case:
  -               -                 -
  find            arr[0]            O(1)
  search          for 1..n          O(n)
  insert          arr.push(new)     O(1)
  delete          for 1..n          O(n)
```

## hash table

```
  const obj = { foo: 'bar' }

  n = Object.keys(obj).length

  Action:         Example:          Best case:
  -               -                 -
  find            obj.foo           O(1)
  search          obj.foo           O(1)
  insert          obj.newFoo        O(1)
  delete          delete obj.foo    O(1)
```

## set

```
  const set = new Set([a, b, c, d]) or new Set([{ foo: 'bar' }])

  n = set.size

  Action:         Example:          Best case:
  -               -                 -
  find            set.has(a)        O(n)
  search          set.has(a)        O(n)
  insert          set.add(newFoo)   O(n)
  delete          set.delete(a)     O(n)

  * despite the API calls: has, add, delete methods, this is just looping through all items in the array each time
```

## single linked list

```
  head -> node1 -> node2 -> node3 -> tail

  n = list length

  Action:         Example:            Best case:
  -               -                   -
  find            for head..tail      O(n)
  search          for head..tail      O(n)
  insert          head = newNode ||   O(1)
                  tail.next = node

  lazy example for implementation: imagine having pagination on a page but only having the 'next' button
```

## double linked list

```
  head -> node1{prev, next} -> node2{prev, next} -> node3{prev, next} -> tail

  n = list length

  Action:         Example:            Best case:
  -               -                   -
  find            for head..tail      O(n)
  search          for head..tail      O(n)
  insert          node1 = newNode ||   O(1)
                  newNode.prev = null
                  newNode.next = node2

  lazy example for implementation: imagine having pagination on a page but having both the 'next' and 'prev' buttons
```

## stack (LIFO)

```
  last in ======> first out
  const stack = [a, b, c, d, e]

  if e is added last, then e is the first to be removed

  n = stack.length
  additional functions: stack.peek(), pop(), push()

  Action:         Example:          Best case:
  -               -                 -
  find            for 1..n          O(n)
  search          for 1..n          O(n)
  insert          stack.push(f)     O(1)
  delete          stack.pop(f)      O(1)
```

## queue (FIFO)

```
  first in ======> first out
  const queue = [a, b, c, d, e]

  if a is added first, then a is the first to be removed

  n = stack.length
  additional functions: queue.enqueue (equiv to push()), dequeue (equiv to shift())

  Action:         Example:          Best case:
  -               -                 -
  find            for 1..n          O(n)
  search          for 1..n          O(n)
  insert          stack.push(f)     O(1)
  delete          stack.pop(f)      O(1)
```

## graph

```
  const graph = {
    node1: {
      vertices: [{vertex1}],
      edges: {
        vertex1: []
      }
    },
    node2: {
      vertices: [{vertex2}],
      edges: {
        vertex2: []
      }
    }
  }

  n = nodes/vertices + edges = |V| + |E|

  Action:         Example:                      Best case:
  -               -                             -
  storage (list)  graph typeof object           O(|V| + |E|)
  find            for 1..|V|                    O(|V|)
  add edge        node2.edges.push(vertex3)     O(1)
  add vertex      node2.vertices.push(vertex3)  O(1)
                  node2.edges.vertex3 = []
```

## tree (binary search tree)

```
  const tree = {
    root: {
      left_parent: {
        left_child: {
          value is less than right
        },
        right_child: {
          value is greater than left or null
        }
      },
      right_parent: {
        left_child: {
          value is less than right
        },
        right_child: {
          value is greater than left or null
        }
      }
    }
  }

  n = nodes
  height / complexity: 2^height - 1

  Action:         Example:          Best case:
  -               -                 -
  find            for 1..n/2        O(log n)
  search          for 1..n/2        O(log n)
  insert          for 1..n/2        O(log n)
  delete          for 1..n/2        O(log n)
```