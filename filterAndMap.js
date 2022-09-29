// Program to demo usage of map and filter.


let result = [1,2,3,4].map(number=>number*2)
console.log(result)



const nums = [1,2,3,4,5,6]
console.log('Original Array: ', nums)

console.log('Filter Numbers which are greater than 3')
console.log(nums.filter(num=> num>=3))

//Use Logical Operation with filter
console.log('Filter Numbers which are greater than 4 or less than 2')
console.log(nums.filter(num => num>4 || num<2))


//Use of filter and map to gather
const salaries = [{name:'Raj', monthSalary:50000}, {name:'Shreya', monthSalary:65000}, {name:'Sundar', monthSalary:100000}]
console.log('Peopel with salary greater than 60000: ', salaries.filter(salary => salary.monthSalary>60000))

let results = salaries.filter(salary=>salary.monthSalary>60000)
let names = results.map(salary => salary.name)
let salaryIndi = results.map(salary => salary.monthSalary)
console.log(`Names:  ${names}, Salary: ${salaryIndi}`).join(', ')
