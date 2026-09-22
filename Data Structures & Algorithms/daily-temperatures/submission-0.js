class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let output = new Array(temperatures.length).fill(0);
        let stack = []
        for (let i = 0 ; i < temperatures.length; i++) {
            const t = temperatures[i]; 
              while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                    const [stackT, stackInd] = stack.pop();
                    output[stackInd] = i - stackInd;
                }
                stack.push([t, i]);
           
        }
        return output
    
    }
}

