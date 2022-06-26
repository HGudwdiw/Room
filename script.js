// alert("Hello JS!");

let x = 10;
let y = 10;
let a = 10;
let b = 1.5;
let text = "aaaaaaa";

function noConection(){
    alert("No Conected");
}

function myFunc1(){
    let i = 1.5;
    let x = document.write("Js");
}

function myFunc2(myFunc1){
    alert(myFunc1);
}

function enterName(){
    let name;
    name = prompt();
    document.getElementById("name").innerHTML = name;
}

function alertTemp(t){
    if (t > 22) {
        let newT = t - 22;
        alert("Температура вашої кімнати: " +t+" це на " + newT  + " більше за норму");

    } else if (t < 18 )
    {
        let newT = 18 - t;
        alert("Температура вашої кімнати: " +t+" це на " + newT + " менше за норму");
    } else{
        alert("Температура кімнати в нормі");
    }
}

function sum(){
    let a = prompt("Введіть 1 число");
    let b = prompt("Введіть 2 число");
    a = parseInt(a);
    b = parseInt(b);

    alert(a + b);
}


//13.12.1901 - 19.01.2038
function setTime(){
    let d = new Date();
    console.log(d);
    
    let dayOfMount = d.getDate();
    console.log(dayOfMount);
    
    let dayOfWeek = d.getDay();
    console.log(dayOfWeek);
    
    let year = d.getFullYear();
    console.log(year);
    
    let month = d.getMonth();
    console.log(month);
    
    let hour = d.getHours();
    console.log(hour);
    
    let minute = d.getMinutes();
    console.log(minute);
    
    let seconds = d.getSeconds();
    console.log(seconds);
    
    let millis = d.getMilliseconds();
    console.log(millis);

    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = dayOfMount;
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + seconds;
    document.getElementById('dayOfWeek').innerHTML = dayOfWeek;

    let days = ['Нд','Пн', 'Вт', 'Ср', 'Чт','Пт','Сб'];

    document.getElementById('dayOfWeek').innerHTML = days[dayOfWeek];

    let nameMounth =[
        'Січень',
        'Лютий',
        'Березнь',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',

    ];


document.getElementById('month').innerHTML = nameMounth[month];

let t = setTimeout(setTime, 1000);
}
let counter = 0;
function changeColor(){
    counter++;
    let tittleElement = document.getElementById('chColor');
    switch(counter){
        case 1: tittleElement.style.color = 'red'; break;
        case 2: tittleElement.style.color = 'green'; break;
        case 3: tittleElement.style.color = 'yellow'; break;
        case 4: tittleElement.style.color = 'Tan'; break;
        case 5: tittleElement.style.color = 'silver'; break;
        case 6: tittleElement.style.color = 'black'; break;
        case 7: counter = 0; break;
        

    }
}

let hum = 100;
function Flower(h)
{
    hum -= h;
    let rogressBar = document.getElementById('flower').value = hum;

    if(hum<20){
        let newelement = document.createElement('div');
        newelement.innerHTML = 
        "<div align= 'right' id='notification' style= 'color : red;'>Полий квітку!!!</div>";
            newelement.setAttribute('id','test');
            let currentElement = document.getElementById("alert")
            document.body.insertBefore(newelement, currentElement);
    }
}

function FlowerControll(){
    hum +=20;
    let rogressBar = document.getElementById('flower').value = hum;
    document.getElementById('notification')?.remove();   
}
function deleteNotification(){
    document.getElementById('notification')?.remove();
}

let image = document.getElementById("curpetImg");

let imageArr = [
    "https://i.ibb.co/9ZvgNtP/kover1.jpg",
    "https://i.ibb.co/NFBNM5v/kover2.png",
    "https://i.ibb.co/xgC8Kj0/kover3.png",
    "https://i.ibb.co/LCqXjBp/kover0.png",
    'https://i.ibb.co/K6phLpd/carpet.png'
];
let selector = 0;
function carpetSwitch(){
    image.src = imageArr[selector];
    selector++;
    if(selector >4) selector = 0
}

function getLocation(){
    alert("Доброго вечора! Ми з України!")
}



