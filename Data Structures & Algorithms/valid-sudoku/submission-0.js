class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set() 
        for (let i = 0; i < board.length; i++) {
           for (let j = 0; j < board[i].length; j++) {
                const cell = board[i][j]
                if (board[i][j] === ".") continue
                const row = `row: ${i}, cell: ${cell}`
                const col =  `col: ${j}, cell: ${cell}`
                const boxNumber = 3 * Math.floor(i/3) + Math.floor(j/3)
                const box =  `boxNumber: ${boxNumber}, cell: ${cell}`
                console.log(set)
                if (set.has(row) || set.has(col)  || set.has(box) )   return false
                set.add(row).add(col).add(box)
           } 
        }
 
        return true;
    }
}