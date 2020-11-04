const transpose = function(matrix) {
    const newArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([])
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArray[j].push(matrix[i][j]);
      }
    }
    return newArray;
  };
  
const wordSearch = (letters, word) => { 
   
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
        } 
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true; 
        } else {
            return false;
        }
    }
};

module.exports = wordSearch