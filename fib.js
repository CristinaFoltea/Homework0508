var fib=function(arr){
  for (var i=arr.length , jump; i<20; i++){
    jump=arr[i-2]+arr[i-1];
    arr[i]=jump;
}
  return arr;
}
console.log(fib([0, 1]));
