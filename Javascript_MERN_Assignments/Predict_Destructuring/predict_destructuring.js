const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
//The output will be Tesla, Mercedes
console.log(randomCar)
console.log(otherRandomCar)

console.log("=".repeat(19));
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
// const { name: otherName } = employee;
//Predict the output

//name is not defined, so if want to fix it we ought to do it like this

const {name, name: otherName} = employee; 
console.log(name);
console.log(otherName);

console.log("=".repeat(19));

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password : 'text'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output

//It will print 12345 and undefined, because person has not attribute password, if we want to add we need to add a password to the object
console.log(password);
console.log(hashedPassword);


console.log("=".repeat(19));
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
console.log(numbers)
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
//Answer: first is the second element of numbers [2]
//second is the fourth element of numbers [5]
//third is the last elemetn of numbers [2]
console.log(first == second); //false 5!=2
console.log(first == third); //true 2==2


// Printing the values
console.log("first:", first);   
console.log("second:", second); 
console.log("third:", third);   

console.log("=".repeat(19));

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //key is part of lastTest so it will print 'value'
console.log(secondKey); //secondKey is part of lastTest so it will print 'the array'
console.log(secondKey[0]); //the first element of secondkey -> 1 
console.log(willThisWork); //the second element of secondKey -> 5 





