# Problem solving

## The sort

You start with an array of numbers in random order. You need to sort them back in order.

The first step is to talk and work it out with something inefficient like a bubble sort. Just pick something O(n^2) - you could also use insertion sort for instance. Then at some point you're gonna say "yeah, this is O(n^2) which is not great." And then you explain why it's not great.

```
n = 100 items

n^2 = 100 * 100 = 10,000 times function is called. NOT GREAT.
```

Then you talk about a better sorting algorithm like merge sort. Then you talk about how it's O(n logn) because it divides and conquers. Then you write (pseudo)code a merge sort.

```
n = 100 items

n logn = 100 * log(100) = 200 times function is called. WAY BETTER!
```

## The BFS (search)

You get a question about routes on a map, a social graph/network, etc. This is a breadth-first search problem.

level-order - F, B, G, A, D, I, C, E, H

![level-order](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sorted_binary_tree_breadth-first_traversal.svg/440px-Sorted_binary_tree_breadth-first_traversal.svg.png)

## The DFS (search)

You get a question about going through a maze or involving something where you can't scan the parent nodes to get the information. This is a depth-first search problem.

pre-order - F, B, A, D, C, E, G, I, H

![pre-order](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sorted_binary_tree_preorder.svg/440px-Sorted_binary_tree_preorder.svg.png)

in-order - A, B, C, D, E, F, G, H, I

![in-order](https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sorted_binary_tree_inorder.svg/440px-Sorted_binary_tree_inorder.svg.png)

post-order - A, C, E, D, B, H, I, G, F

![post-order](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sorted_binary_tree_postorder.svg/440px-Sorted_binary_tree_postorder.svg.png)
