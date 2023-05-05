function factorial (n)  {
  if (typeof n !=="number" || n < 0){
      return;
  }
  if(n === 0 || n === 1){
      return 1;
  }
  
  let total = n * (n - 1);
  for ( let i = 2; i < n; i++){
      total = total * (n - i);
  }
  return total;
}
