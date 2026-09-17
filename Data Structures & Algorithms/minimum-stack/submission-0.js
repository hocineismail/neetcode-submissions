class MinStack {
 
    constructor() {
       this.array = [];
       this.results = [];
 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       this.array = [...this.array, val]  
    }

    /**
     * @return {void}
     */
    pop() { 
       this.array = this.array.splice(0, this.array.length -1) 
    }

    /**
     * @return {number}
     */
    top() { 
        return this.array[this.array.length -1]
    }

    /**
     * @return {number}
     */
    getMin() {  
        return Math.min(...this.array)
    }
}
