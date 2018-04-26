Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

--

test cases:

[1, 1] => 1
[3,10] => 3

--

```
const maxArea = function(height) {
    let maxArea = 0
    let lft = 0
    let rgt = height.length - 1

    while (lft < rgt) {
        maxArea = Math.max(maxArea, Math.min(height[lft], height[rgt]) * (rgt - lft));

        if (height[lft] < height[rgt]) {
            lft++;
        } else {
            rgt--;
        }

        return maxArea;
    }
};

maxArea([1, 1])
maxArea([3,10])
```

pros: o(n)