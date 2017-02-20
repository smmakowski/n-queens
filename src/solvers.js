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
  var solutionsCount = 0;
  var board = new Board({n: n});

  var getSolutions = function(row){
    if (row === n) {
      solutionsCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyRooksConflicts()){
        getSolutions(row + 1);
      }
        board.togglePiece(row, i);
    }
  };

  getSolutions(0);

  return solutionsCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return board.rows();
  }

  var getSolutions = function(row) {
    if (row === n) {
      return board.rows();
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        solution = getSolutions(row + 1);
        if(solution) {
          return solution;
        }
      }

        board.togglePiece(row, i);
    }
  };

var solution = getSolutions(0);
return solution;
},

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionsCount = 0;
  var board = new Board({n: n});

  var getSolutions = function(row){
    if (row === n) {
      solutionsCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()){
        getSolutions(row + 1);
      }
        board.togglePiece(row, i);
    }
  };

  getSolutions(0);
  return solutionsCount;
};



