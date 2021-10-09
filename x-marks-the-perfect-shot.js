const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition (moves) {
  const endSpot = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      endSpot[1] = 1 + endSpot[1];
    } else if (move === "south") {
      endSpot[1] = -1 + endSpot[1];
    } else if (move === "west") {
      endSpot[0] = -1 + endSpot[0];
    } else {
      endSpot[0] = 1 + endSpot[0];
    }
  }
  return endSpot;
}
finalPosition(moves);
console.log(finalPosition(moves));