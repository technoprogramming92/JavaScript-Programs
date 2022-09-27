function sum(a,b) {
    return a+b
}

function tipCalc(food, tip) {
    tipPerc = tip/100
    tipAmt = food*tipPerc
    total = sum(food,tipAmt)
    return total
}

console.log('Total Bills Is: ',tipCalc(300,20), 'Rs.')