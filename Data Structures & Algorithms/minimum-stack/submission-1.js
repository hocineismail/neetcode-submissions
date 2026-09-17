class MinStack {
 
    constructor() {
       this.stack = [];
       this.results = [];
 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
      this.stack.push(val) 
    }

    /**
     * @return {void}
     */
    pop() { 
       this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() { 
        return this.stack[this.stack.length -1]
    }

    /**
     * @return {number}
     */
    getMin() {  
        return Math.min(...this.stack)
    }
}
