class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea= 0
        for (let [i, h] of heights.entries()) {
           let start = i
           while (stack.length >0 && stack[stack.length -1][1]> h) {
            const  [index, height] = stack.pop();
                maxArea = Math.max(
                    maxArea,
                    height * (i - index)
                );
            start = index
            }
            stack.push([start,h])
        }
        for (let [i,h ] of stack) {
             
            maxArea =  Math.max(
                maxArea,
                h * (heights.length   - i)
            )
           
        }
        return maxArea
        
    }
}
