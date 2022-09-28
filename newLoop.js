let fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Grapes']

//new version of loop

console.log('Usage of New version of loop which will print each element in array')
for (const fruit of fruits){
    console.log(fruit)
}


//Program for adding numbers of array and print total using new loop

let nums = [1,2,3,4]
let total = 0
for (const num of nums){
    total = total+num
}

console.log('Total is: ', total)
