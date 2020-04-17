var showPOLITICIAN = function(name, partyColor) {

  var politician = {};
  
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;


 politician.tallyTotalVotes = function() {
            
   this.totalVotes = 0;

   for(var i = 0; i < this.electionResults.length; i++) 
   
   {
    this.totalVotes = this.totalVotes + this.electionResults[i]
   }

 };

    return politician;
}

  
var obama = showPOLITICIAN("Barack Obama", [132, 17, 11]);
var mccain = showPOLITICIAN("John MacCain", [245, 141, 136]);


obama.electionResults = [0, 0, 0, 0, 55, 9, 7, 3, 3, 27, 0, 4, 0, 21, 11, 7, 0, 0, 0, 4, 10, 12, 17, 10, 0, 0, 0, 1, 5, 4, 15, 5, 31, 15, 0, 20, 0, 7, 21, 4, 0, 0, 0, 0, 0, 3, 13, 11, 0, 10, 0];
mccain.electionResults = [9, 3, 10, 6, 0, 0, 0, 0, 0, 0, 15, 0, 4, 0, 0, 0, 6, 8, 9, 0, 0, 0, 0, 0, 6, 11, 3, 4, 0, 0, 0, 0, 0, 0, 3, 0, 7, 0, 0, 0, 8, 3, 11, 34, 5, 0, 0, 0, 5, 0, 3];
  
  
console.log(obama.electionResults);
console.log(mccain.electionResults);


setStateResults  = function(state) {
    
   theStates[state].winner = null;
   
    
    if (obama.electionResults[state] > mccain.electionResults[state]){
      theStates[state].winner = obama;
      
    }else if (obama.electionResults[state] < mccain.electionResults[state]){
      theStates[state].winner = mccain;
    }
  
    var stateWinner = theStates[state].winner;
  
    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = [11, 32, 57];
    }

    stateName.innerText = theStates[state].nameFull;
    stateAbbrev.innerText = "( " +theStates[state].nameAbbrev+ ")";
    
    candidate1Name.innerText = obama.name;
    candidate1Results.innerText = obama.electionResults[state];
    
    candidate2Name.innerText = mccain.name;
    candidate2Results.innerText = mccain.electionResults[state];

    if (theStates[state].winner === null){
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }
    
};

obama.tallyTotalVotes();
mccain.tallyTotalVotes();

console.log(obama.totalVotes);
console.log(mccain.totalVotes);


var winner="???";

  if (obama.totalVotes > mccain.totalVotes){
      winner = obama.name;
  }else if (obama.totalVotes < mccain.totalVotes){
      winner = mccain.name;
  }else{
      winner = "DRAW."
  }

  
console.log("The winner is "+ winner +"");

console.log("Obama's color is: " + obama.partyColor);
console.log("McCain's color is: " + mccain.partyColor);

var countryTable = document.getElementById("countryResults");

  var row = countryTable.children[0].children[0];

  row.children[0].innerText = obama.name;
  row.children[1].innerText = obama.totalVotes;
  row.children[2].innerText = mccain.name;
  row.children[3].innerText = mccain.totalVotes;
  row.children[5].innerText = winner;

var stateTable = document.getElementById("stateResults");
var header = stateTable.children[0].children[0];
var body = stateTable.children[1];
var stateName = header.children[0];
var stateAbbrev = header.children[1];
var candidate1Name = body.children[0].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Name = body.children[1].children[0];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

