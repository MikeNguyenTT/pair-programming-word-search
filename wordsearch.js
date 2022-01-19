const wordSearch = (letters, word) => { 
    //creating a row and joining the letters
    const horizontalJoin = letters.map(ls => ls.join(''));

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    

    if (search(horizontalJoin, word)) {
        return true;
    };
    if (search(verticalJoin, word)) {
        return true;
    };
    return false;
};

const search = function(arrayOfWords, word) {
    for (let row of arrayOfWords) {
        if (row.includes(word)) {
            return true
        };
    };
    return false    
}

const transpose = function(matrix) {
    let newMatrix = [];
    const outerLength = matrix.length;
    const innerLength = matrix[0].length;
   
    // transposing
    for (let i = 0; i < innerLength; i++) {
      let innerArray = [];
      for (let j = 0; j < outerLength; j++) {
        innerArray.push(matrix[j][i]);
      }
      newMatrix.push(innerArray);
    }
    return newMatrix;
};

wordSearch([
    ['A', 'H', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'A', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'P', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'P', 'V', 'R', 'G'],
    ['A', 'H', 'C', 'S', 'Y', 'Y', 'R', 'L'],
    ['P', 'F', 'R', 'E', 'N', 'E', 'B', 'B'],
    ['P', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['Y', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'HAPPY');

module.exports = wordSearch