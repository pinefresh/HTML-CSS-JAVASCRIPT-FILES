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
        a = ++hour;
        document.getElementById('hours').innerText = a;
    }, 3600000);

    minute = 00;
    setInterval(() => {
        b = ++minute;
        document.getElementById('minutes').innerText = b;
    }, 60000);

    second = 00;
    do {
        // console.log(a);
        setInterval(() => {
            // a = ++second;
            document.getElementById('seconds').innerText = a;
        }, 1000);
    } while (a <= 60)
    if (a == 61) {
        a = 0;
    }
}

function pause() {
    // console.log('pause')
}

function restart() {
    // console.log('restart')
}