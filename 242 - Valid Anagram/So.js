function validAnagram(s, t) {
  // Check whether length of both strings don't match
  if (s.length != t.length) {
    // Return false as it violates the condition of anagram
    return false;
  }

  // Sort both of the strings
  sSort = s.split("").sort().join();
  tSort = t.split("").sort().join();

  // Check if both sorted strings have same characters and frequencies, then return the boolean value
  return sSort == tSort;
}

/* Testing */
s1 = "carrace";
t1 = "racecar";

s2 = "tea";
t2 = "pot";

console.log("Output: " + validAnagram(s1, t1)); // Returns true
console.log("Output: " + validAnagram(s2, t2)); // Returns false
