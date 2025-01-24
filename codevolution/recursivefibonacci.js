function recursiveFibon(limit, a=0,b=1,series=[]){
    if(series.length -1 === limit)return series
    series.push(a)
    return recursiveFibon(limit,b,a+b,series)
}
console.log(recursiveFibon(20))