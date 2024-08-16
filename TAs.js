// TA1
function repeatString(text, repetitions){
    while (repetitions > 0) {
        console.log(text);
        repetitions--;
    }
}

repeatString("hola mundo!", 3);

// TA2
function reverseString(text){
    // split(''): Convierte el string en un array de caracteres.
    // reverse(): Invierte el array de caracteres.
    // join(''): Une los caracteres del array de nuevo en una string.
    const reversedText = text.split('').reverse().join('');
    return reversedText;
}

console.log("el reverso de javascript :\t" + reverseString("javascript"));

// TA3
function removeFromArray(array, item) {
    const filteredArray = array.filter(element => element !== item);
    return filteredArray;
}

console.log(removeFromArray(['🥑','🍌','🥭','🥑', '🍌', '🥑'],'🥑'))

// TA4
function sumAll(a, b) {
    let sum = 0;

    const min = Math.min(a, b);
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

console.log("la suma de todos los numeros en el margen 11 - 11 es : " + sumAll(11,11));
console.log("la suma de todos los numeros en el margen 9 - 22 es : " + sumAll(9,22));
console.log("la suma de todos los numeros en el margen 10 - 23 es : " + sumAll(10,23));
console.log("la suma de todos los numeros en el margen (-1) - 1 es : " + sumAll(-1,1));

// TA5
function leapYears(year){
    if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)){
        return true;
    } else {
        return false;
    }
}

console.log(" is 1998 a leap year? : " + leapYears(1998));
console.log(" is 2000 a leap year? : " + leapYears(2000));
console.log(" is 2004 a leap year? : " + leapYears(2004));
console.log(" is 2020 a leap year? : " + leapYears(2020));
console.log(" is 2023 a leap year? : " + leapYears(2023));

// TA6
function convertToCelsius(temp) {
    const celsius = (temp - 32) * 5 / 9;
    return Math.round(celsius * 10) / 10; // movemos una cifra significativa para el redondeo
}

function convertToFahrenheit(temp) {
    const fahrenheit = (temp * 9 / 5) + 32;
    return Math.round(fahrenheit * 10) / 10;
}

console.log("100°F equivale a " + convertToCelsius(100) + "°C");
console.log("100°C equivale a " + convertToFahrenheit(100) + "°F");

// TA7
function getTheTitles(books) {
    const titles = books.map(book => book.title); 
    // itera sobre cada elemento en el array books 
    // y retorna un nuevo array que contiene solamente los títulos de los libros
    return titles;
}

console.log(getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
      title: 'Book3',
      author: 'Name3'
    },
    {
      title: 'Book4',
      author: 'Name4'
    }
  ]));

  // TA8
    function findTheOldest(people) {
        // itera sobre cada objeto en el array
        const oldestPerson = people.reduce((oldest, person) => {
        
            const currentYear = new Date().getFullYear();
            const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;

            if (!oldest || age > oldest.age) {
                return { ...person, age };
            }
            return oldest;
        },null);

        return oldestPerson;
    }

    console.log(findTheOldest([
        {
            name: "Carly",
            yearOfBirth: 1942,
            yearOfDeath: 1970,
        },
        {
            name: "Ray",
            yearOfBirth: 1962,
            yearOfDeath: 2011,
        },
        {
            name: "Jane",
            yearOfBirth: 1912,
            yearOfDeath: 1941,
        },
    ]));

// TA9
function getOdds(nums) {
    // Filtra los números impares 
    const odds = nums.filter(num => num % 2 !== 0);
    return odds;
}

console.log("son impares los siguientes números : " + getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// TA10
function getSum(nums) {
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

console.log("the sum of the number from 1 to 10 is : " + getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// TA11
function duplicates(numsArr) {
    const noDup = new Set();
    const duplicates = new Set();

    numsArr.forEach(num => {
        if (noDup.has(num)) {
            duplicates.add(num);
        } else {
            noDup.add(num);
        }
    });

    return duplicates.size;
}

console.log("the array [1, 2, 2, 3, 4, 4, 4, 5] has  " + duplicates([1, 2, 2, 3, 4, 4, 4, 5]) + " duplicated numbers");

// TA12
function generatePassword(length) {
    if (length < 8) {
        return ("La longitud mínima de la contraseña es 8 caracteres.");
    }

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const allCharacters = upperCase + lowerCase + numbers + symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        // tomar un caracter aleatorio de allCharacters
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
        return generatePassword(length); 
    } else {
        return password;
    }
}

console.log("password :" + generatePassword(8)); 
console.log("password :" + generatePassword(8)); 
console.log("password :" + generatePassword(4)); 
console.log("password :" + generatePassword(12)); 


