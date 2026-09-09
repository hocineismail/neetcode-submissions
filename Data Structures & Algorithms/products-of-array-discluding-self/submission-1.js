class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let postFix = 1;
        let result = [1];
 
        for (let i = 0; i < nums.length; i++) { 
      
            result[i] = prefix;
            prefix = prefix * nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {  
            result[i] = result[i] * postFix;
            postFix = nums[i] * postFix;
        }

        return result;
    }
}