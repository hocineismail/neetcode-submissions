class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    constructor() {
        this.key =[]
    }
    encode(strs) {
       for (let i = 0; i < strs.length; i++) {
            this.key.push(strs[i].length);
       }
       return strs.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let startPosition = 0
        let result = []
       for (let i = 0; i < this.key.length; i++) {
             let decodedWord = str.slice(startPosition,  this.key[i] + startPosition)
             startPosition = startPosition +  this.key[i]
             result.push(decodedWord)
       }
       return result
    }
}
