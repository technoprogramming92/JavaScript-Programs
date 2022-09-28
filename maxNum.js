// Program to Findout maximum number from given numbers

let result=0
function maxNum(numbers) {
    for(let number of numbers){
        if(number > result) {
            result = number
        }
    }
    return result
}

console.log('Maximum Number is: ',maxNum([1,2,5,4,8,11,7,5,22,19]))
