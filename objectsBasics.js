const person = {
    name: "Rachit",
    surname: "Trivedi"
}

//Objects Basic Operations
console.log('Dot Noatation: ',person.name)
console.log('Box anotation', person['surname'])
person.city = "Ahmedabad"
console.log('After adding city with dot notation:',person)
person['Age'] = 32
console.log('After adding age with bracket notation:',person)
console.log("Hello")

//Using Object with Function

function person2(name, shirt) {
    const per2 = {name:name,
               shirt:shirt}
    
    const intro = `Hello, My name is ${per2.name}, and color of my shirt is ${per2.shirt}`
    return intro
}

console.log(person2('Rachit', 'Black'))


