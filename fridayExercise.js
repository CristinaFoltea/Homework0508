
var logAll=function(arr){
  var i=0;
  while(i<arr.length){
    console.log(arr[i]);
      i++;
  }
  }
logAll([1,2,3,4,5]);
// => 1 2 3 4 5

var sum=function(arr){
  var summ=0, i=0;
  while(i<arr.length){
    summ+=arr[i];
    i++;
  }
  return summ;
}
console.log(sum([1, 2, 3]));
// => 6

var subtract=function(arr){
  var sub=0, i=0;
  while(i<arr.length){
    sub-=arr[i];
    i++;
  }
  return sub;
}
console.log(subtract([10, 10, 10]));
// => -30


var largest=function(arr){
  var i=0, large=arr[i];
  while(i<arr.length){
    if(large < arr[i]){
      large=arr[i];
    }
    i++;
  }
  return large;
}
console.log(largest([1,9,7]));
// => 9

var smallest=function(arr){
  var i=0, small=arr[i];
  while(i<arr.length){
    if(small > arr[i]){
      small=arr[i];
    }
    i++;
  }
  return small;
}
console.log(smallest([20,19,40]));
// => 19

var average=function(arr){
    var i=0, avr, sum=0;
    while(i < arr.length){
      sum += arr[i];
      i++;
    }
    avr=sum/arr.length;
    console.log(avr);
    return avr;
  }
console.log(average([10,20,30]));
// // => 20
