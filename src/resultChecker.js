
function resultChecker(gridState) {
    // rows
    if((gridState[0]!=null||gridState[1]!=null||gridState[2]!=null) && gridState[0]==gridState[1] && gridState[1]==gridState[2] && gridState[0]==gridState[2]) return true;
    if((gridState[2]!=null||gridState[3]!=null||gridState[5]!=null) && gridState[3]==gridState[4] && gridState[4]==gridState[5] && gridState[3]==gridState[5]) return true;
    if((gridState[6]!=null||gridState[7]!=null||gridState[8]!=null) && gridState[6]==gridState[7] && gridState[7]==gridState[8] && gridState[7]==gridState[8]) return true;
    // columns
    if((gridState[0]!=null||gridState[3]!=null||gridState[6]!=null) && gridState[0]==gridState[3] && gridState[3]==gridState[6] && gridState[3]==gridState[6]) return true;
    if((gridState[1]!=null||gridState[4]!=null||gridState[7]!=null) && gridState[1]==gridState[4] && gridState[4]==gridState[7] && gridState[1]==gridState[7]) return true;
    if((gridState[2]!=null||gridState[5]!=null||gridState[8]!=null) && gridState[2]==gridState[5] && gridState[5]==gridState[8] && gridState[2]==gridState[8]) return true;
    // Diagonals
    if((gridState[0]!=null||gridState[4]!=null||gridState[8]!=null) && gridState[0]==gridState[4] && gridState[4]==gridState[8] && gridState[0]==gridState[8]) return true;
    if((gridState[2]!=null||gridState[4]!=null||gridState[6]!=null) && gridState[2]==gridState[4] && gridState[4]==gridState[6] && gridState[2]==gridState[6]) return true;

    return false;
}

export default resultChecker;