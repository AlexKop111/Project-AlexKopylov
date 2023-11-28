// -За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом всередині -
//     За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині -
//     За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом всередині. -
//     За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// -За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом всередині -
// Цикл для створення 10 блоків div
for (let i = 1; i <= 10; i++) {
    let randomText = 'Text ' + i;

    document.write('<div>' + randomText + '</div>');
}
// for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині -
//     За допомогою циклу
for (let i = 1; i <= 10; i++) {
    let randomText = 'Text ' + i;

    document.write('<div>Index: ' + i + ' - ' + randomText + '</div>');
}
// while вивести в документ 20 блоків h1 c довільним текстом всередині. -
//     За допомогою циклу
for (let i = 1; i <= 20; i++) {
    let randomText = 'Text ' + i;

    document.write('<h1>' + randomText + '</h1>');
}
//     За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 1; i <= 20; i++) {
    let randomText = 'Text ' + i;

    document.write('<h1>Index: ' + i + ' - ' + randomText + '</h1>');
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');

for (let i = 0; i < listOfItems.length; i++) {
    document.write('<li>' + listOfItems[i] + '</li>');
}

document.write('</ul>');

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
let products = [{
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const title = product.title;
    const price = product.price;
    const image = product.image;

    document.write(
        '<div class="product-card">' +
        '<h3 class="product-title">' + title + '. Price - ' + price + '</h3>' +
        '<img src="' + image + '" alt="" class="product-image">' +
        '</div>'
    );
}

// Массив вивесті Тих хто старше за 30р та True,False
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

document.write('<h3>Users with status true:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        document.write(users[i].name + ', Age: ' + users[i].age + '<br>');
    }
}

document.write('<h3>Users with status false:</h3>');
for (let i = 0; i < users.length; i++) {
    if (!users[i].status) {
        document.write(users[i].name + ', Age: ' + users[i].age + '<br>');
    }
}

document.write('<h3>Users older than 30:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write(users[i].name + ', Age: ' + users[i].age + '<br>');
    }
}