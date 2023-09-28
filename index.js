// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
/*function superbowlWin(gameRecords) {

    if (gameRecords.result === "W"){
         return gameRecords.year
    }
    else {
  return undefined;
}

    
}

record.find(superbowlWin);
*/
function superbowlWin(gameRecords) {
  const winningGame = gameRecords.find(gameRecord => gameRecord.result === "W");

  return winningGame ? winningGame.year : undefined;
}

    
