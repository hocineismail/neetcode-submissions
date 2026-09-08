class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = s.split("").sort().join("")
        let tArr = t.split("").sort().join("")
        return tArr === sArr
        
    }
}
