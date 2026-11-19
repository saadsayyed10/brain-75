function validAnagram(s, t) {
  // Return false if length of both strings don't match. It violates the condition of anagram
  if (s.length != t.length) {
    return false;
  }

  // Initialize two hash maps to store character frequencies of both strings
  countS = {};
  countT = {};

  // Iterate through any of the strings, to increase count of characters in both maps
  for (i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  // Return false if both built maps aren't equal
  for (const key in countS) {
    if (countS[key] != countT[key]) {
      return false;
    }
  }

  // Return true if both built map are equal
  return true;
}

/* Testing */
s1 = "carrace";
t1 = "racecar";

s2 = "tea";
t2 = "pot";

console.log("Output: " + validAnagram(s1, t1)); // Returns true
console.log("Output: " + validAnagram(s2, t2)); // Returns false
