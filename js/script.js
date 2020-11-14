// document - эта вся html страница
// document.querySelector("селектор") - подключается к одному тегу по имени селектора
// возвращается тег в виде объекта
// console.log(document.querySelector(".s"));

const sec = document.querySelector(".s"); // подключаемся к секeндной стрелке
const min = document.querySelector(".m"); // подключаемся к минутной стрелке
const hour = document.querySelector(".h"); // подключаемся к часовой стрелке
const hourNum = document.querySelector(".hours"); // подключаемся к цифоровым часам
const minNum = document.querySelector(".minutes"); // подключаемся к цифоровым минутам

function clock() {
    // new Date - создаёт экземпляр Date, который возвращает текущую дату и время 
    let time = new Date;
    // getSeconds() - метод возвращает секунды
    // getMinutes() - метод возвращает минуты
    // getHours() - метод возвращает часы
    // console.log(time.getSeconds());
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    // console.dir(hourNum);
    sec.style.transform = `rotate(${seconds}deg)`;
    min.style.transform = `rotate(${minutes}deg)`;
    hour.style.transform = `rotate(${hours}deg)`;
    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    setTimeout(() => { clock() }, 1000);
}
clock()

// рекурсия - это когда функция  вызывает саму себя
/* let i = 0;
function rec() {
    console.log(i++);
    if (i < 10) {
        rec()
    }
}

rec() */

// document.querySelectorAll("селектор") - подключается ко всем тегам по указанному селектору
const links = document.querySelectorAll('.tabsItem'); // подключаемся к тегам li
const tabs = document.querySelectorAll('.tabsContentItem'); // подключаемся к табам
for (let i = 0; i < links.length; i++) {
    // console.dir(links[i]);
    // HTMLelement.addEventListener("событие", функция) - привязывает функцию(слушателя) к событию
    links[i].addEventListener("click", function (event) {
        event.preventDefault(); // метод отменяет действие по умолчанию
        // console.log(event);
        // HTMLelement.classList.add("класс") - добавляет класс к тегу
        // HTMLelement.classList.contains("класс") - проверяет наличие класса у тегу
        // HTMLelement.classList.remove("класс") - удаляет класс у тега
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove("active");
            tabs[x].classList.remove("active");
        }
        // this - возвращает тег на который нажал пользователь
        tab(this, tabs[i])
    })
}

function tab(link, tab) {
    link.classList.add("active");
    tab.classList.add("active")
}

//Домашнее задание
// Секундомер

const stopSecond = document.querySelector(".stopwatch__seconds"); // подключение к секундам в секундомере
const stopMinute = document.querySelector(".stopwatch__minutes"); // подключение к минутам в секундомере
const stopHour = document.querySelector(".stopwatch__hours"); // подключение к часам в секундомере
const stopWatchBtn = document.querySelector(".stopwatch__btn"); // подключаемся к кнопке на секундомере
const tabIndicate = document.querySelector(".tabsLink__span"); // подключаемся к индикатору таба секундомер

stopWatchBtn.addEventListener('click', function () {
    if (stopWatchBtn.innerHTML == "start") {  
        stopWatchBtn.innerHTML = "stop";
        tabIndicate.classList.add("active");
        tick()
    } else if (stopWatchBtn.innerHTML == "stop") {
        stopWatchBtn.innerHTML = "clear";
        tabIndicate.classList.remove("active");
        tabIndicate.classList.add("active_clear");
    }else if (stopWatchBtn.innerHTML == "clear") {
        stopWatchBtn.innerHTML = "start";
        tabIndicate.classList.remove("active_clear");
        stopSecond.innerHTML = "0";
        stopMinute.innerHTML = "0";
        stopHour.innerHTML = "0";
    }
})

function tick() {
    if (stopWatchBtn.innerHTML == "stop") {
        stopSecond.innerHTML++;
    }
    if (stopSecond.innerHTML >= 60) {
        stopMinute.innerHTML++;
        stopSecond.innerHTML -= 60;
    }
    if (stopMinute.innerHTML >= 60) {
        stopHour.innerHTML++;
        stopMinute.innerHTML -= 60;
    }
    if (stopWatchBtn.innerHTML == "stop") {
        timetick = setTimeout(() => {tick()}, 1000);        
    }
}