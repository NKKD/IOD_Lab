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

function currencyOperation(float1,float2,operation) {

    let number1 = float1.toFixed(2);
    let number2 = float2.toFixed(2);
    operation = String(operation)

    console.log(typeof(operation))

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    switch (action) {
        case operation == '+':
            result = number1 + number2;
            break;
        case operation == "-":
            result = number1 - number2;
            break;
        case operation == "/":
            result = number1 / number2;
            break;
        case operation == "*":
            result = number1 * number2;    
        default:
            result = "input error"
            break;
    }

    return result
}

console.log(currencyOperation(3.22, 35.33,'+'))
// console.log(currencyOperation(3.22, 35.33,"-"))
// console.log(currencyOperation(3.22, 35.33,"/"))
// console.log(currencyOperation(3.22, 35.33,"*"))