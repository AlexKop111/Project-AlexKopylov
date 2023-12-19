// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let originalBlock = document.getElementById('originalBlock');
let clonedBlock = originalBlock.cloneNode(true);
clonedBlock.querySelector('p').innerText = 'This is the cloned block.';

document.body.appendChild(clonedBlock);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let menuItems = ['Main', 'Products', 'About us', 'Contacts'];
let ulElement = document.createElement('ul');
for (let i = 0; i < menuItems.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = menuItems[i];
    ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let containerDiv = document.createElement('div');
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let course = coursesAndDurationArray[i];
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course-block');
    courseDiv.innerHTML = `<p><strong>Title:</strong> ${course.title}</p>
                           <p><strong>Duration:</strong> ${course.monthDuration} months</p>`;
    containerDiv.appendChild(courseDiv);
}
document.body.appendChild(containerDiv);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
let coursesAndDurationArray2 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

let containerDiv2 = document.createElement('div');
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let course = coursesAndDurationArray[i];
    let courseItemDiv = document.createElement('div');
    courseItemDiv.classList.add('item');
    let headingElement = document.createElement('h1');
    headingElement.classList.add('heading');
    headingElement.textContent = course.title;
    let descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = `Duration: ${course.monthDuration} months`;
    courseItemDiv.appendChild(headingElement);
    courseItemDiv.appendChild(descriptionElement);
    containerDiv2.appendChild(courseItemDiv);
}
document.body.appendChild(containerDiv2);

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [{
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон ...',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон ...',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон ...',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон ...',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон ...',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let containerDiv3 = document.createElement('div');
for (let i = 0; i < simpsons.length; i++) {
    let member = simpsons[i];
    let memberDiv = document.createElement('div');
    memberDiv.classList.add('member');
    memberDiv.innerHTML = '<h1>' + member.name + ' ' + member.surname + '</h1>' +
        '<p>Age: ' + member.age + '</p>' +
        '<p>' + member.info + '</p>' +
        '<img src="' + member.photo + '" alt="' + member.name + ' ' + member.surname + '">';
    containerDiv.appendChild(memberDiv);
}
document.body.appendChild(containerDiv);

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним файлом

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
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let coursesContainer = document.createElement('div');
for (let i = 0; i < coursesArray.length; i++) {
    let course = coursesArray[i];
    let courseBlock = document.createElement('div');
    courseBlock.classList.add('course');
    for (let prop in course) {
        if (prop !== 'modules') {
            let propertyBlock = document.createElement('p');
            propertyBlock.classList.add('property');
            propertyBlock.textContent = prop + ': ' + course[prop];
            courseBlock.appendChild(propertyBlock);
        }
    }
    let modulesBlock = document.createElement('ul');
    modulesBlock.classList.add('modules');
    for (let j = 0; j < course.modules.length; j++) {
        let module = course.modules[j];
        let moduleItem = document.createElement('li');
        moduleItem.classList.add('module');
        moduleItem.textContent = module;
        modulesBlock.appendChild(moduleItem);
    }
    courseBlock.appendChild(modulesBlock);
    coursesContainer.appendChild(courseBlock);
}
document.body.appendChild(coursesContainer);