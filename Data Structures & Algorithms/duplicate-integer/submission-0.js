class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashmap = {  }
        let results = false
         for (let i = 0; i < nums.length; i++) {
            let key =  nums[i]
            if (hashmap[key] === nums[i])  {
                return true
            } else {
                hashmap[key] = nums[i]
            }
         }
         return results
    }
}
