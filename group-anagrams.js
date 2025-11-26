// link to leetcode: https://leetcode.com/problems/group-anagrams/
// log:
// this one is actually a new trick for me
// to group an anagram, we can store it in the array of size 26 and count each letter that appeared on it
// then set it to the map by joining the array with a separator (to avoid javascript auto convertion of string of number) as the key
// pretty clever way to say that a strings is in one group or not lol

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const ans = [];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let newArr = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      newArr[strs[i][j].charCodeAt(0) - 97] += 1;
    }
    const hash = newArr.join("#");
    if (map.has(hash)) {
      map.get(hash).push(strs[i]);
    } else {
      map.set(hash, [strs[i]]);
    }
  }

  map.forEach(item => {
    ans.push(item);
  });

  return ans;
};