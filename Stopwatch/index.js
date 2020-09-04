let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let hour;
let minute;
let second;
let a = 0;
let b = 0;
let c = 0;

function start() {
    // console.log('start')
    hour = 00;
    setInterval(() => {
        c = ++hour;
        document.getElementById('hours').innerText = c;
    }, 3600000);

    minute = 00;
    setInterval(() => {
        b = ++minute;
        document.getElementById('minutes').innerText = b;
    }, 60000);

    // console.log(a);
    second = 0;
    setInterval(() => {
        do {
            a = ++second;
            document.getElementById('seconds').innerText = a;
        } while (a > 60);
        if (a == 60) {
            a = 0;
        }
        console.log(a);
    }, 100);
}

function pause() {
    // console.log('pause')
}

function restart() {
    // console.log('restart')
}