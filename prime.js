

var prime=function(n){
  if (n===2){return(n + ' is PRIME');}
  for (var i=2; i<n; i++){
    if (n%i ===0){
      return (n+' is not a prime number');
      }
  }
  return(n + ' is PRIME');
}
console.log(prime(130));
