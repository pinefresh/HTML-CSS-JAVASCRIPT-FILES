// https://books.goalkicker.com/
// https://www.youtube.com/watch?v=PKggf17m4SE
// https://www.youtube.com/watch?v=FbwRG2xqmFQ
// https://books.goalkicker.com/
// https://www.youtube.com/watch?v=sBTk46-O-Rw
// https://www.youtube.com/watch?v=rioc6mTWOZs
// https://www.youtube.com/watch?v=CWulQ1ZSE3c


// console.log(location.href = 'https://www.youtube.com/');


let n = 15;
let seconds;

let myBtn = document.querySelector('input');

setInterval(() => {

    do {
        seconds = n--;
    } while (seconds < 0)


    document.getElementById('timer').innerText = `Your download file is ready for downloading in ${seconds} seconds.`

    if (seconds == 0) {
        myBtn.style.top = '20px';
    }

}, 1000);

function redirect() {

    let myArr = ['https://books.goalkicker.com/',
        'https://www.youtube.com/watch?v=PKggf17m4SE',
        'https://www.youtube.com/watch?v=FbwRG2xqmFQ',
        'https://books.goalkicker.com/',
        'https://www.youtube.com/watch?v=sBTk46-O-Rw',
        'https://www.youtube.com/watch?v=rioc6mTWOZs',
        'https://www.youtube.com/watch?v=CWulQ1ZSE3c']

    let i = parseInt(Math.random() * myArr.length)

    console.log(location.href = myArr[i]);

}