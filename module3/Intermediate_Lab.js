// question 1
console.log("question 1--------------------")

console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(cityname){
    let str = cityname.charAt(0).toUpperCase() + cityname.slice(1);
    return str
}

// question 2
console.log("question 2--------------------")

const truncate = (str, max) => (str.length>max) ? str.slice(0,max) + '...' : str

console.log(truncate('This text will be truncated if it is too long', 25))

// function truncate(str,max){

//     if (str.length > max) {
//         return str.slice(0,max) + '...'
//     }
//     else {
//         return str
//     }
// }

// question 3
console.log("question 3--------------------")

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Dog', 'Cat')
console.log(animals)
animals.unshift('Rabbit', 'Ant')
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
    animals[3] = newValue;
    
}

replaceMiddleAnimal('Pig')
console.log(animals)


// function findMatchingAnimals(item) {
//     return item.toLowerCase().indexOf("r") === 0;
// }

// let = matchedAnimals = animals.filter(findMatchingAnimals)

// console.log(matchedAnimals)

function findMatchingAnimals(arr, letter) {
    let res = [];
    letter = letter.toUpperCase();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith(letter)) res.push(arr[i])
    }
    return res
  }
  
  let startsWithN = findMatchingAnimals(animals, "r");
  
  console.log(startsWithN);

// question 4
console.log("question 4--------------------")

// function camelCase(cssProp) {
//     index = cssProp.indexOf("-")
//     str = cssProp.replace("-","").split('')
//     str[index] = str[index].toUpperCase()
//     str = str.join('')
//     return str
// }

// console.log(camelCase("margin-left"))

function camelCase(cssProp){
  property = cssProp.split('')
  str = []
  for (let index = 0; index < property.length; index++) {

    eachLetter = property[index]

    if (eachLetter == '-') {
        eachLetter = ''
        str = str + eachLetter
        hyphenIndex = index
    }
    else {
        str = str + eachLetter 
    }
  }
  
  str = str.slice(0, hyphenIndex) + str.charAt(hyphenIndex).toUpperCase() + str.slice(hyphenIndex+1,str.length)
  return str
}
console.log(camelCase("margin-left"))


// question 5
console.log("question 5--------------------")

let twentyCents = 0.20
let tenCents = 0.10

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

// become string
console.log(typeof(fixedTen))

function currencyAddition(float1, float2) {
    let number1 = float1.toFixed(2);
    let number2 = float2.toFixed(2);

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    let result = number1 + number2

    return result
}
console.log(currencyAddition(3.22, 35.33))

function currencyOperation(float1,float2,operation,numDecimals) {

    let number1 = float1.toFixed(numDecimals);
    let number2 = float2.toFixed(numDecimals);
    operation = String(operation)

    // console.log(typeof(operation))

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    switch (operation) {
        case operation = '+':
            result = number1 + number2;
            break;
        case operation = "-":
            result = number1 - number2;
            break;
        case operation = "/":
            result = number1 / number2;
            break;
        case operation = "*":
            result = number1 * number2;    
            break;
        default:
            result = "input error"
            break;
    }

    return result.toFixed(numDecimals)
}

console.log("question c ----------------")
console.log(currencyOperation(3.22, 35.33,'+',4))
console.log(currencyOperation(3.22, 35.33,"-",6))
console.log(currencyOperation(3.22, 35.33,"/",2))
console.log(currencyOperation(3.22, 35.33,"*",10))


// question 6
console.log("question 6--------------------")

function unique(duplicatesArray) {
    let arr = duplicatesArray;
    let uniqueSet = new Set(arr);
    let uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

const number = ['1', '5', '1' , '1', '1', '1', '1', '1', '1']
console.log(unique(number))

// question 7
console.log("question 7--------------------")

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    matchBook = books.find(element => element.id == bookId);
    return matchBook;
}

console.log(getBookTitle("2"))


function getOldBooks(bookYear) {
    return bookYear.year > 1950;
}
console.log(books.filter(getOldBooks))


const updatedArray = books.map((element) => ({
    ...element, genre : "classic"
  }));
console.log(updatedArray);

console.log("question 7.d")

let bookTitles = books.map(arr => arr.author)

function getTitles(titles) {
    matchTitle = bookTitles.filter(bookTitles => bookTitles[0] == titles)
    return matchTitle;
}

console.log(getTitles('A'))



function latestBook(array) {
    let years = []
    index = 0
    array.forEach(element => {
        year = element.year
        years[index] = year
        index ++
    });
    let max = Math.max(...years)
    index = years.indexOf(max)
    console.log(array[index])
}
latestBook(books)

// question 8
console.log("question 8--------------------")

const phoneBookDEF = new Map() //an empty map to begin with
phoneBookDEF.set('Denny', '1231131313')
phoneBookDEF.set('Evan', '4564646465')
phoneBookDEF.set('Frank', '789797987897')

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

phoneBookABC.set('Caroline', '95129519515')

function printPhoneBook(contacts) {
    for (let items of contacts){
        console.log(items)
    }
}
printPhoneBook(phoneBookABC)

const combinedPhoneBook = new Map([...phoneBookABC,...phoneBookDEF])

for (let names of combinedPhoneBook.keys()){
    console.log(names)
}


// question 9
console.log("question 9--------------------")

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

// function sumSalaries(salaries) {
//     totalSalary = 0
//     let salariesMap = new Map (Object.entries(salaries))
//     for (let salary of salariesMap.values()){
//         totalSalary =+ salary
//     }
//     return totalSalary
// }

// console.log(sumSalaries(salaries))

function topEarner(salaries) {
    top = []
    index = 0
    let salariesMap = new Map (Object.entries(salaries))
    for (let salary of salariesMap.values()){
        top[index] = salary
        index ++
    }
    let max = Math.max(...top)
    maxindex = top.indexOf(max)
    console.log(top[maxindex])
    
    nameList = []
    index = 0
    let nameMap = new Map (Object.entries(salaries))
    for (let name of nameMap.keys()){
        nameList[index] = name
        index ++
    }
    console.log(nameList[maxindex])
}

topEarner(salaries)


// question 10
console.log("question 10--------------------")

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var totalMinutes = (hours*60) + minutes
console.log(totalMinutes)

var totalSeconds = totalMinutes * 60
console.log(totalSeconds)


// c) Calculate and print your age as: 'I am x years, y months and z days old'


function age() {
    let currentDate = Date.now();
    let myDob = Date.parse('1995-07-19')
    diff = currentDate - myDob;

    console.log(diff)

    seconds = Math.floor(diff / 1000),
    minutes = Math.floor(seconds / 60),
    console.log(minutes)   
    hours = Math.floor(minutes / 60),
    console.log(hours)
    numberOfDays = Math.floor(hours / 24);


    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    console.log('I am ' + years + ' years '+ months + ' months '+'and '+ days + ' days old')
}

age()

function daysInBetween(date1,date2) {
    let dateFirst = new Date(date1)
    let dateSecond = new Date(date2)
    difference = dateFirst - dateSecond
    differenceDays = difference/1000/60/60/24
    console.log(differenceDays)
}

daysInBetween('2023-12-25', '2023-12-23')