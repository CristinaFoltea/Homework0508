
var seqPlusMinusIt=function(arr){
  for(var i = arr.length, jump; i <= 10; i++){            //10 is a random number and represents the last index of the array, it can be changed to any other number depending on how many results we want to get
    if (arr[i-1]-arr[i-2] < 0){jump = -(arr[i-1]);}
    else{
      jump = arr[i-1];
    }
    arr[i] = arr[i-1] + jump;
  }
  return arr;
}

var seqMultiplyDivideIt=function(arr){
  for(var i = arr.length, jump; i <= 10; i++){
    if (arr[i-1]/arr[i-2] < 1){
      jump = arr[i-1];
      arr[i] = arr[i-1]/jump;
    }
    else{
      jump = arr[i-1];
      arr[i] = arr[i-1] * jump;
    }
  }
  return arr;
}

var seqPlusMinusN=function(arr){
  for(var i = arr.length, jump; i <= 10; i++){
    jump=arr[i-1]-arr[i-2];
    arr[i]=arr[i-1]+jump;
  }
  return arr;
}

var seqMultiplyDivideN=function(arr){
  for(var i = arr.length, jump; i <= 10; i++){
    jump=arr[i-1]/arr[i-2];
    arr[i]=arr[i-1]*jump;
  }
  return arr;
}


var decide=function(arr){
  var x = arr.length-1;
  if(arr[x]-arr[x-1] === arr[x-1]-arr[x-2]){
    return seqPlusMinusN(arr);
  }
  else if ((arr[x]-arr[x-1] === arr[x-1] && arr[x-1]-arr[x-2]===arr[x-2] ) || (Math.abs(arr[x]-arr[x-1]) === arr[x] && Math.abs(arr[x-1]-arr[x-2])===arr[x-1])){
    return seqPlusMinusIt(arr);
  }
  else if (arr[x]/arr[x-1]===arr[x-1]/arr[x-2]){
    return seqMultiplyDivideN(arr);
  }
  else if ((arr[x-1] === arr[x]*arr[x] && arr[x-2] === arr[x-1]*arr[x-1]) || (arr[x]===arr[x-1]*arr[x-1] && arr[x-1]===arr[x-2]*arr[x-2]))
  {
    return seqMultiplyDivideIt(arr);
  }
  else
  {
    return ('This sequence can\'t be solved with this program');
  }};

console.log(decide([32, 16, 8, 4, 2]));
console.log(decide([0, 2, 4, 8, 16, 32]));
console.log(decide([0, 2, 4, 8, 16, 32]));
console.log(decide([8, 6, 4, 2, 0]));
console.log(decide([256, 16, 4]));
console.log(decide([1, 3, 5, 7]));
console.log(decide([1, 4, 5, 10]));
