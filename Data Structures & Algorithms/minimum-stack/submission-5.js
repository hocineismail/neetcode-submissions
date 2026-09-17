class MinStack {
    stack = [];
    min = Number.MAX_SAFE_INTEGER;
    constructor() {
        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
      this.stack.push(val) 
       this.min = Math.min(this.min, val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < this.stack.length; i++) {
            this.min = Math.min(this.min, this.stack[i]);
        }
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
