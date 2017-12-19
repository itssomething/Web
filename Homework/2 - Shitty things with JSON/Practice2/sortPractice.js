'use strict'

function sort(input) {
  //return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  //BUBBLE SORT

   var len = input.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(input[j-1]>input[j]){
           var temp = input[j-1];
           input[j-1] = input[j];
           input[j] = temp;
        }
     }
   }
   return input;
}

 /*
 var left = input[0];
 var right=input[input.length]
 function quickSort(input, left, right){
   var len = input.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(input, pivot, left, right);
    
   //sort left and right
   quickSort(input, left, partitionIndex - 1);
   quickSort(input, partitionIndex + 1, right);
  }
  return input;
}
        

function partition(input, pivot, left, right){
   var pivotValue = input[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(input[i] < pivotValue){
      swap(input, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(input, right, partitionIndex);
  return partitionIndex;
}
        

function swap(input, i, j){
   var temp = input[i];
   input[i] = input[j];
   input[j] = temp;
}
}
*/
module.exports = sort
