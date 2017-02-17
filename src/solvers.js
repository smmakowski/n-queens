/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({n: n});
  board.rows().forEach(function(array, index) {
    for (var i = 0; i < array.length; i++) {
      array[i] = 1;
      if (board.hasAnyRooksConflicts()) {
        array[i] = 0;
      }
    }
  });
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if (n === 0) { 
    return 1; 
  } else { 
    return n * this.countNRooksSolutions(n - 1 ); 
  }
  // var board = new Board({n: n});
  // var solutionCount = 0;
  // board.rows().forEach(function(array, index) {
  //   for (var i = 0; i < array.length; i++) {
  //     console.log(solutionCount);
  //     array[i] = 1;
  //     if (board.hasAnyRooksConflicts()) {
  //       array[i] = 0;
  //     }
  //   }
  // });
  // return solutionCount;
  // var count = 0;
  // var board = new Board({n: n});
  // for (var i = 0; i < board.rows().length; i++) {
  //   for (var j = i + 1; j < board.rows().length; j++) {
  //     count++
  //   }
  // }
  // return count;
  // mult times it iterates , change index where index starts 
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var newBoard = board.rows();
  var counter = 0;
  var pieces = 0;
  var queens = function(boards) {
    for (var i = 0; i < boards.length; i++) {
      if (pieces === boards.length) {
        return boards;
      }
      if (!boards.hasAnyQueensConflicts()) {
        toggle(counter, i);
        pieces++;
      }
      counter++;
        queens(board);
    }
  };
  queens(newBoard);
},

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var factorial = function(n) {
    if (n === 0) { 
      return 1; 
    } else { 
      return n * this.countNRooksSolutions(n - 1 ); 
    }
  };

  return (factorial(n) / Math.pow(2.54, n));
  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // return solutionCount;
};
