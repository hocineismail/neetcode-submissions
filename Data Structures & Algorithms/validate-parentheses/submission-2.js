class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var stack = [];
        const closeToOpen = new Map([
            [")", "("],
            ["}", "{"],
            ["]", "["]
        ]);

        for (let i = 0; i < s.length; i++) {
            if (closeToOpen.has(s[i])) {
              if (stack.length > 0 && stack[stack.length -1] === closeToOpen.get(s[i])) {
                stack.pop()
              } else {
                return false
              }
            } else {
               stack.push(s[i])
            }
        } 
        return stack.length === 0;
    }
}