class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = []
        let postFix = []
        let result = []
        for (let i = 0 ; i < nums.length; i++) {
             
            let newValueprefix  = (prefix.length !== 0  ? prefix[prefix.length -1] :1 ) * nums[i]
            prefix.push(newValueprefix)
            let newValuepostFix  = (postFix.length !== 0  ? postFix[postFix.length -1] :1 ) *     nums[nums.length - 1-i]
            postFix.push(newValuepostFix)
        }
         postFix.reverse()
        for (let i = 0 ; i < nums.length; i++) {
            if (i === 0) {
                result.push(postFix[i+1])
            } else if (i === nums.length -1) {
               result.push(prefix[i-1])
            } else {
                 result.push(prefix[i-1] * postFix[i+1])
            }  
        }
            return result
        // let resStepOne = [nums[0]]
        // let resStepTwo = []
        // let prifix = 1
        // let postFix
        // for (let  i = 0 ;  i < nums.length -1 ; i++) {
        //     let newCol = prifix  * nums[i]
        //     resStepOne.push(newCol) 
        //     prifix =  nums[i]
        //  }
        //    prifix = 1 
        // for (let  i = 0 ;  i < nums.length -1 ; i++) {
        //     let newCol = prifix  * nums[i]
        //     resStepTwo.push(newCol) 
        //     prifix =  nums[i]
        // }
        //  console.log(resStepOne)
         
    }
}
