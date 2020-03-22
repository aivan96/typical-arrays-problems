exports.min = function min (array) {
  if(array==0 || array === undefined){
    return 0;
  }else{
  let m = array[0];
  for(let i = 1; i<array.length; ++i){
    if(array[i] < m){
      m = array[i];
      }
    }
    return m;
  }
}

exports.max = function max (array) {
  if(array==0 || array === undefined){
    return 0;
  }else{
  let m = array[0];
  for(let i = 1; i<array.length; ++i){
    if(array[i] > m){
      m = array[i];
      }
    }
    return m;
  }
}

exports.avg = function avg (array) {
  if(array==0 || array === undefined){
    return 0;
  }else{
    let sum = 0;
    let delitel=array.length;
  for(let i = 0; i < array.length; ++i){
    sum = sum + array[i];
  }
  let a = sum/delitel;
  return a;
}
}
