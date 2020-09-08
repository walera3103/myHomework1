const score = document.querySelector('.score'),
// "querySelector" вважається більш новішою і кращою версією "getElement/ElementsById/Class"
// і запобігає деяким несправностям старих функцій
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car');

console.log(start);
console.dir(start);
// виводить елемент у виді об'єкта
// дозволяє побачити всі обработчики подій

// start.onclick = function(){
//     start.classList.add('hide');
// };

start.addEventListener('click', startGame);
// "addEventListener('click', функція (можна прописувати прямо сюди))" 
// вважається більш новішою і кращою версією onclick і тд.
// А ще дозволяє використовувати себе для одного елементу безліч раз і навіть дублювати себе
// да, оказується після функції не треба ставити дужки (странно, но js він такий)
document.addEventListener('keydown', startRun);
// да, звертатись до всього документу тоже можна
// "keydown" --> кнопка нажата
document.addEventListener('keyup', stopRun);
// "keyup" --> кнопка відпущена

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};
// так прописуються об'єкти

const setting = {
    start: false,
    score: 0,
    speed: 3
};

function startGame(){
    start.classList.add('hide');
    setting.start = true;
    requestAnimationFrame(playGame);
    // "requestAnimationFrame" --> новіший метод будування анімацій
    gameArea.appendChild(car);
}

function playGame(){
    console.log('play game');
    if (setting.start === true) // "===" --> ідентично
    {
        requestAnimationFrame(playGame);
    }
    
    // рекурсія
}

function startRun(event){
    console.log('start');
    event.preventDefault();
    // функція відміняє стандартні події браузера
    console.log(event);
    // "event" --> об'єкт події. Даже якщо він не вказаний, він все одно викликається
    // описує повністю всю подію, яка відбулась
    console.log(event.key);
    keys[event.key] = true;
    // звертання до об'єкту
    // якщо до об'єкта звертаються через інший об'єкт, то наступний об'єкт і його атрибут пишуться в квадратних дужках
    // якщо звертаються напряму до атрибута об'єкта, то можна використовувати як точку, так і квадратні дужки
}

function stopRun(){
    console.log('stop');
    event.preventDefault();
    console.log(event.key);
    keys[event.key] = false;
}
