class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = new Map();
        for (let  i = 0; i < strs.length;  i++) {
            let sorted = strs[i].split("").sort().join("") 
            hashMap.get(sorted) !== undefined ?  hashMap.get(sorted).push(strs[i]) :hashMap.set(sorted,[strs[i]])
        }
        return  [...hashMap.values()]
    }
}
