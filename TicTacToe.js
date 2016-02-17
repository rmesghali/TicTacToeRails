//Create a variable for the board array initialized to 0's
var boardArray = [0,0,0,
                  0,0,0,
                  0,0,0];
//Create a variable for the current selector: X or O.  Initialized to X
var currentPiece = "X";
//Create a variable to count the attempts to return end of game alerts
var numberOfMarkersPlaced = 0;
// This is a place marker function to make the x's and o's interchange
function placeMarker(element, boardIndex) {
  //This method lets the user only click once
  element.unbind('click');
  //This method adds the current piece
  element.addClass(currentPiece);
  //If current is  to X, change to O. Otherwise change to X
  if (currentPiece === "X") {
    currentPiece = "O";
  } else {
    currentPiece = "X";
  }
  //This increments our counter and allows for end game alerts
  numberOfMarkersPlaced++;
  if (numberOfMarkersPlaced === 9) {
    $("#banner").html("DRAW!")
  }
//This if else statement assigns a value to each click placement on the grid
  if (currentPiece === "X") {
    boardArray[boardIndex] = -1;
  } else {
    boardArray[boardIndex] = 1;
  }
};
// This function adds up the index of the array so we can see if they equal 3 or -3
function sumOfElements(array, index0, index1, index2) {
  return array[index0] + array[index1] + array[index2];
};
//This function determines who wom based on the following boolean expressions
function whoWon(boardArray) {
  if (sumOfElements(boardArray, 0, 1, 2) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 0, 1, 2) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 3, 4, 5) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 3, 4, 5) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 6, 7, 8) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 6, 7, 8) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 0, 3, 6) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 0, 3, 6) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 1, 4, 7) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 1, 4, 7) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 2, 5, 8) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 2, 5, 8) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 0, 4, 8) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 0, 4, 8) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 2, 4, 6) === 3) {
    $("#banner").html($("#input1").val().toUpperCase() + " Wins!")
  }
  if (sumOfElements(boardArray, 2, 4, 6) === -3) {
    $("#banner").html($("#input2").val().toUpperCase() + " Wins!")
  }
};

$(document).ready(function(){
  //This hides the reset button unti after the submit button is clicked
  $("#reset").hide();
  //Each of these 9 functions changes the boxes to pictures of X's and O's
  $("#A1").click(function() {
    placeMarker($("#A1"), 0);
    whoWon(boardArray);
  });
  $("#A2").click(function() {
    placeMarker($("#A2"), 1);
    whoWon(boardArray);
  });
  $("#A3").click(function() {
    placeMarker($("#A3"), 2);
    whoWon(boardArray);
  });
  $("#B1").click(function() {
    placeMarker($("#B1"), 3);
    whoWon(boardArray);
  });
  $("#B2").click(function() {
    placeMarker($("#B2"), 4);
    whoWon(boardArray);
  });
  $("#B3").click(function() {
    placeMarker($("#B3"), 5);
    whoWon(boardArray);
  });
  $("#C1").click(function() {
    placeMarker($("#C1"), 6);
    whoWon(boardArray);
  });
  $("#C2").click(function() {
    placeMarker($("#C2"), 7);
    whoWon(boardArray);
  });
  $("#C3").click(function() {
    placeMarker($("#C3"), 8);
    whoWon(boardArray);
  });
  //On click, place usernames in h1 and hide input boxes. Hide submit button and make reset button appear
  $("#submit").click(function() {
    var first = $("#input1").val().toUpperCase();
    var second = $("#input2").val().toUpperCase();
    $("#h1").html(first + " vs. " + second);
    $("#input1").hide();
    $("#input2").hide();
    $("#submit").hide();
    $("#reset").show();
  });
  //On click, remove class to remove pictures from boxes.  Re-add binding function for click
  $('#reset').click(function() {
    $(".X").removeClass("X");
    $(".O").removeClass("O");
    window.location.reload();
  });
});
