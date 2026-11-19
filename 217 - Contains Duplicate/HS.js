function hasDuplicate(nums) {
  // Initialize an empty set as seen
  const seen = new Set();

  // Iterate through each element of the array
  for (const num of nums) {
    // Check if same element had occured
    if (seen.has(num)) {
      // If yes, then duplicate was found... we return true
      return true;
    }
    // If not, then we add the current element to the array and continue iterating
    seen.add(num);
  }

  // If iterating is completed and no duplicate were found... return false
  return false;
}

/* Testing */
const nums1 = [1, 2, 3, 3];
const nums2 = [1, 2, 3, 4];

console.log("Output: " + hasDuplicate(nums1)); // Returns true
console.log("Output: " + hasDuplicate(nums2)); // Returns false
