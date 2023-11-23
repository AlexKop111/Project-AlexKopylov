//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача //
//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача //

//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr = [1, 2, 3, 4, 5, 6, 'sim', 88, 99, 100]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
    //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Fiction'
};

let book2 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Drama'
};

let book3 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian'
};

console.log('Book 1:', book1);
console.log('Book 2:', book2);
console.log('Book 3:', book3);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'The Catcher in the Rye',
    pageCount: 224,
    genre: 'Coming-of-age',
    authors: { name: 'J.D. Salinger', age: 91 }

};

let book5 = {
    title: 'The Hobbit',
    pageCount: 310,
    genre: 'Fantasy',
    authors: { name: 'J.R.R. Tolkien', age: 81 }

};

let book6 = {
    title: 'The Da Vinci Code',
    pageCount: 454,
    genre: 'Mystery',
    authors: { name: 'Dan Brown', age: 57 }

};
console.log('Book 4:', book4);
console.log('Author:', book4.authors.name)
console.log('Age:', book4.authors.age)
console.log('Book 5:', book5);
console.log('Author:', book5.authors.name)
console.log('Age:', book5.authors.age)
console.log('Book 6:', book6);
console.log('Author:', book6.authors.name)
console.log('Age:', book6.authors.age)
    //- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача //
let users = [
    { name: 'John', username: 'john', password: 'password123' },
    { name: 'Alice', username: 'alice', password: 'pass456' },
    { name: 'Bob', username: 'bob', password: 'password' },
    { name: 'Emma', username: 'emma', password: '1234' },
    { name: 'Charlie', username: 'charlie', password: 'dog' },
    { name: 'Olivia', username: 'olivia', password: '789' },
    { name: 'David', username: 'david', password: '23' },
    { name: 'Sophia', username: 'sophia', password: '567' },
    { name: 'James', username: 'james', password: '112233' },
    { name: 'Vasya', username: 'vasya', password: 'vas123' }
];

console.log('Пароль користувача 1:', users[0].password);
console.log('Пароль користувача 2:', users[1].password);
console.log('Пароль користувача 3:', users[2].password);
console.log('Пароль користувача 4:', users[3].password);
console.log('Пароль користувача 5:', users[4].password);
console.log('Пароль користувача 6:', users[5].password);
console.log('Пароль користувача 7:', users[6].password);
console.log('Пароль користувача 8:', users[7].password);
console.log('Пароль користувача 9:', users[8].password);
console.log('Пароль користувача 10:', users[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x1 = 1;
if (x1 !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let x2 = 0;
if (x2 !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let x3 = -3;
if (x3 !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 12;

if (time >= 0 && time <= 14) {
    console.log('Перша частина години');
} else if (time >= 15 && time <= 29) {
    console.log('Друга частина години');
} else if (time >= 30 && time <= 44) {
    console.log('Третя частина години');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта частина години');
} else {
    console.log('Невірне значення для часу');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 17;

if (day >= 1 && day <= 10) {
    console.log('Перша половина місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга половина місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Третя половина місяця');
} else {
    console.log('Невірне значення для числа дня');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = prompt('Введіть порядковий номер дня тижня (1-7):');

switch (dayNumber) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Невірний порядковий номер дня. Введіть число від 1 до 7.');
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let number1 = prompt('Введіть перше число:');
let number2 = prompt('Введіть друге число:');

if (number1 > number2) {
    console.log('Максимальне число: ' + number1);
} else if (number2 > number1) {
    console.log('Максимальне число: ' + number2);
} else {
    console.log('Числа рівні.');
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = "";

x = x || "default";

console.log(x);
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ' - Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ' - Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ' - Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ' - Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ' - Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ' - Супер');
}