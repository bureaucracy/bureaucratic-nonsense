# Remove duplicates from a sorted array

For example, given sorted array nums = [1,1,1,2,2,3], your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length. Duplicates are allowed up to 2.

--
Since you know you will only have to keep track of the index going forward (next), then you know you need to think of it like it's a singly linked list.

test cases:

[1, 1, 1, 2, 2, 3] => [1, 1, 2, 2, 3] => 5
[4, 4, 5, 5, 5, 7, 8, 9, 9, 9, 2, 2] => [4, 4, 5, 5, 7, 8, 9, 9, 2, 2] => 10
[] => 0
--

```
const removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    let i = 0

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1
};

removeDuplicates([1, 1, 1, 2, 2, 3]) // 5
removeDuplicates([4, 4, 5, 5, 5, 7, 8, 9, 9, 9, 2, 2]) // 10
removeDuplicates([]) // 0
```

pros:
- runs O(n)
