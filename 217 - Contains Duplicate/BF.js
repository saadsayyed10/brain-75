function hasDuplicate(nums) {
  // Iterate through the nums using two nested loops
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      // Check if current index is same as next index
      if (nums[i] === nums[j]) {
        // If yes then return true
        return true;
      }
    }
  }

  // Return false If no duplicates were found
  return false;
}
