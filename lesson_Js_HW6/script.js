// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log('довижина строки 1: ' + str1.length);
console.log('довижина строки 2: ' + str2.length);
console.log('довижина строки 3: ' + str3.length);
// - Перевести до великого регістру наступні стрінгові значення
let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';

console.log('Рядок 4 у великому регістрі: ' + str4.toUpperCase());
console.log('Рядок 5 у великому регістрі: ' + str5.toUpperCase());
console.log('Рядок 6 у великому регістрі: ' + str6.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
let str7 = 'HELLO WORLD';
let str8 = 'LOREM IPSUM';
let str9 = 'JAVASCRIPT IS COOL';

console.log('Рядок 7 у нижньому регістрі: ' + str7.toLowerCase());
console.log('Рядок 8 у нижньому регістрі: ' + str8.toLowerCase());
console.log('Рядок 9 у нижньому регістрі: ' + str9.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty string   ';
console.log(dirtyString.trim());
//   - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
function stringToarray(str) {
    let wordsArray = str.split(' ');
    return wordsArray;
}
let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log(arr);
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringarr = numbers.map(String);
console.log(stringarr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort(function(a, b) {
            return a - b;
        });
    } else if (direction === 'descending') {
        return nums.sort(function(a, b) {
            return b - a;
        });
    }
}

let nums = [11, 21, 3, 8, 17, 809000];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
// - є масив
let coursesanddurarr = [
    { title: 'JavaScript Complex', monthduration: 5 },
    { title: 'Java Complex', monthduration: 6 },
    { title: 'Python Complex', monthduration: 6 },
    { title: 'QA Complex', monthduration: 4 },
    { title: 'FullStack', monthduration: 7 },
    { title: 'Frontend', monthduration: 4 }
];
let sortedcourses = coursesanddurarr.sort((a, b) => b.monthduration - a.monthduration);
let filteredcourses = sortedcourses.filter(course => course.monthduration > 5);
console.log('Відфільтрований масив за тривалістю більше 5 місяців:', filteredcourses);
let transformedcourses = filteredcourses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthduration
}));

console.log('Масив після перетворення:', transformedcourses);
// описати колоду карт (від 6 до туза без джокерів)
function createDeck() {
    const suits = ['spade', 'diamond', 'heart', 'clubs'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let deck = [];
    for (const suit of suits) {
        for (const value of values) {
            let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';

            let card = {
                cardSuit: suit,
                value: value,
                color: color
            };

            deck.push(card);
        }
    }

    return deck;
}

const deck = createDeck();
const spadesAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', spadesAce);
const sixes = deck.filter(card => card.value === '6');
console.log('Всі шістки:', sixes);
const redCards = deck.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);
const clubs = deck.filter(card => card.cardSuit === 'clubs');
console.log('Всі буби:', clubs);
const highValueTrefoils = deck.filter(card => card.cardSuit === 'clubs' && Number(card.value) >= 9);
console.log('Всі трефи від 9 та більше:', highValueTrefoils);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

function createDeck1() {
    const suits = ['spade', 'diamond', 'heart', 'clubs'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    let deck1 = [];

    for (const suit of suits) {
        for (const value of values) {
            let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';

            let card = {
                cardSuit: suit,
                value: value,
                color: color
            };

            deck1.push(card);
        }
    }

    return deck1;
}
const deck1 = createDeck1();
const packedBySuits = deck1.reduce((result, card) => {
    result[card.cardSuit].push(card);
    return result;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log(packedBySuits);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [{
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
];

const objectsWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log('з модулем "sass":', objectsWithSass);

const objectsWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log('з модулем "docker":', objectsWithDocker);