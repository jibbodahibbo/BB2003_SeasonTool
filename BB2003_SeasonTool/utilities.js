function splitSequence(seq,n){
  var pieces = [];
  for (var i = 0, charsLength = seq.length; i < charsLength; i += n) {
    pieces.push(seq.substring(i, i + n));
  }
  return pieces;
}
function pairToInt(pair){
  num1=pair.charAt(0).charCodeAt(0) - 65;
  num2=pair.charAt(1).charCodeAt(0) - 65;
  num= (num1*16)+num2;
  return num;
}
function intToPair(num){
  n2 = num % 16;
  n1 = Math.floor(num/16);
  chr1 = String.fromCharCode(65 + n1)
  chr2=  String.fromCharCode(65 + n2)
  pair= chr1+chr2;
  return pair;
}

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}
