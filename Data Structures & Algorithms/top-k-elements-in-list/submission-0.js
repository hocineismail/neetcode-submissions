class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let map = new Map()
        for ( let i = 0 ; i < nums.length ; i++) {
            if(map.get(nums[i])) {
              let value = map.get(nums[i])
              map.set(nums[i], value +1)
            } else {
              map.set(nums[i], 1)
            }
        }
        let entries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]) 
       return  entries.slice(0, k).map(pair => pair[0]); 
    }
}
