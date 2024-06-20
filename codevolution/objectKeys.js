// a function that accepts a string as anarh
let string = 'joe mama'
let result =""
for (let index = 0; index < string.length; index++) {
    if(index%2!==0){
        result += string[index].toUpperCase()
    }else{

        result += string[index].toLowerCase()
    }

}
console.log(result);