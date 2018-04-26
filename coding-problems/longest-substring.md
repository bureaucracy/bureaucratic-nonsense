# Longest substring without repeating characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

---
Since you know you will have to keep track of index positions in the array (previous and current), then you know you need to think of it like it's a doubly linked list.

test cases:
abcabccbb => abc => 3
bbbb => b => 1
pwwkew => wke => 3
---


```
const lengthOfLongestSubstring = function(s) {
  const sArr = s.split('')
  let characters = {}
  let max = 0

  for (let i = 0; i < sArr.length; i++) {
    if (!characters[sArr[i]]) {
      characters[sArr[i]] = i
    } else {
      max = Math.max(i - characters[sArr[i]], max)
      characters[sArr[i]] = i
    }
  }
};
```

pros:
- o(n)