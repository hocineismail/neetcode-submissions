class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const result = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
     
        if (result === result.split("").reverse().join("")) {
            return true
        }
        return false
        
    }
}
