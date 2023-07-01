// question 1
console.log("question 1--------------------")
function makeCounter(startFrom,incrementBy) {
    let currentCount = startFrom;

    return function() {

        currentCount = currentCount + incrementBy;
        console.log(currentCount)
        return currentCount;

        
    };
}
let counter1 = makeCounter(6,5);
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter(2,3);
counter2(); // 1
counter2(); // 2

// question 2
console.log("question 2--------------------")

// function delayMsg(msg)
// {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }

delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`)


// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
delay14Sec = setTimeout(delayMsg, 1000*15, '#1: Delayed by 14000ms');
clearTimeout(delay14Sec)
// setTimeout function proceed to next line no matter the current line finished or not

// question 3
console.log("question 3--------------------")

function printMe(msg) {
    console.log("msg",msg)
}

function debounce(func, ms){
    let timer = 0;
    return function (msg) {
      clearTimeout(timer);
      timer = setTimeout(func, ms, msg);
    };
  }

// myfunc = debounce(printMe,1000); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// myfunc("aaaa")
// myfunc("aaaa")
// myfunc("aaaa")
// setTimeout( printMe, 100);
// setTimeout( printMe, 200);
// setTimeout( printMe, 300);

// question 4
console.log("question 4--------------------")


// function printFibonacci(limit) {
//     let n1 = 0, n2 = 1;
//     for (let i = 1; i <= limit; i++) {
//         return n1;
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//         }
// }
//
// printFibonacci(5)

function repeatInterval(delay, limit)
{
    let counter = 1, n1 = 0, n2 = 1; // part of the outer environment record for repeatInterval
    // intervalTimer is a reference to interval, to allow it to be cancelled
    let intervalTimer = setInterval(function repeatThis() {
        console.log('repeatInterval: repeated '+counter+' of '+limit+' times');
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        if (counter == limit) clearInterval(intervalTimer);
        counter++;

    }, delay);
}
// repeatInterval(1000, 10);


function repeatTimeout(delay, limit)
{
    let counter = 1, n1 = 0, n2 = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis(current) {
        console.log('repeatTimeout: repeated '+current+' of '+limit+' times');
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        counter++;
        if (current < limit) setTimeout(repeatThis, delay, current+1) //repeat if limit not reached
    }, delay, counter);
}
// repeatTimeout(1000, 10);


// question 5
console.log("question 5--------------------")

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
// car.description(); //works
// setTimeout(car.description, 200); //fails: lost the this reference

// setTimeout(() => console.log(`This car is a ${car.make} ${car.model} from ${car.year}`),200)

setTimeout(() => {car.description();}, 200)

car = {...car};
car.year = 2023
car.description()
setTimeout(() => console.log(`This car is a ${car.make} ${car.model} from ${car.year}`),200)
setTimeout(car.description.bind(car), 200);

car = {...car};
car.year = 1986
setTimeout(car.description.bind(car), 200);

// question 6
console.log("question 6--------------------")

function multiply(a, b) {
    console.log( a * b );
}

Function.prototype.delay = function(ms) {
    const fn = this;
    return function(...args) {
        setTimeout(() => {
            fn.apply(this, args);
        }, ms);
    };
};

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

Function.prototype.delay = function(ms) {
    const fn = this;
    return function(...args) {
        setTimeout(() => {
            fn.apply(this, args);
        }, ms);
    };
};

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds


function new_multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

new_multiply.delay(1000)(2, 3, 4, 5);

// question 7
console.log("question 7--------------------")

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.toString = function() {
        return `Person: ${this.name}, ${this.age} years old, ${this.gender}`;
    };
}

const person1 = new Person("aaa", 22, "male")
const person2 = new Person("bbb", 44, "female")

console.log(person1.toString())
console.log(person2.toString())

function Student(name, age, gender, cohort){
    Person.call(this, name,age,gender);
    this.cohort = cohort;

    this.toString = function (){
        return `Person: ${this.name}, ${this.age} years old, ${this.gender}, Cohort: ${this.cohort}`;
    }
}

const student1 = new Student('cccc', 20, 'female', '2023');
const student2 = new Student('dddd', 30, 'male', '2022');

console.log(student1.toString());
console.log(student2.toString());

// question 8
console.log("question 8--------------------")



class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
            date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}


// class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//         super(prefix);
//         this.precision = precision;
//     }
//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.precision);
//     }
// }

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    display() {
        let date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        const currentTime = `${hours}:${mins}`;
        if (currentTime === this.wakeupTime) {
            console.log('Wake Up!');
            this.stop();
        } else {
            console.log(`${this.prefix} ${currentTime}`);
        }
    }
}

const alarm = new AlarmClock("myclock", "23:04")
alarm.start()

// question 9
console.log("question 9--------------------")

function randomDelay() {
    const delay = Math.floor(Math.random() * 20) + 1;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(new Error("Delay " + delay + " is odd."));
            }
        }, delay * 1000);
    });
}

randomDelay()
    .then(function(delay) {
        console.log("Success " + delay + " seconds.");
    })
    .catch(function(error) {
        console.error("Error " + error.message + " seconds.");
    });


// question 10
console.log("question 10--------------------")
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'

globalThis.fetch = fetch

async function fetchURLDataUsingAsync(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

async function test_fetchURLDataUsingAsync() {
    try {
        var records = await fetchURLDataUsingAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(records);
    }
    catch(error) {
        console.error(error.message);
    }
}

test_fetchURLDataUsingAsync();
