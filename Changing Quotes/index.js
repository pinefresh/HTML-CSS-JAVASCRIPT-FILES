let quote = document.getElementById('quotes');

// let differentQuotes = ['A', 'B', 'C', 'D', 'E'];

let differentQuotes = [
    'Focus on where you want to go not, where you are !',
    'Every day brings new shoices.',
    'If you dream it then you can do it.',
    'Taking no chance means wasting your drems.',
    'Satisfaction is the greatest happiness.',
    'I want to be sucessful, because i like expensive things.'
];

let i = 0;
let veriousQuotes = differentQuotes[i + 1];
// console.log(differentQuotes.length);

function nextQuotes() {
    // console.log(i);
    veriousQuotes = differentQuotes[i++];
    if (i > differentQuotes.length) {
        i = 0;
        veriousQuotes = differentQuotes[i++];
    }
    document.getElementById('quotes').innerText = `" ${veriousQuotes} "`;
    // console.log(veriousQuotes);
    // console.log(i);
}
function previousQuotes() {
    // let myvar = --i - 1;
    // veriousQuotes = differentQuotes[];
    veriousQuotes = differentQuotes[--i];
    // console.log(i)
    // if (i == differentQuotes.length) {
    //     veriousQuotes = differentQuotes[--i + 1];
    // }
    // console.log((--i) - 1);
    // console.log(i);
    if (i < 0) {
        i = differentQuotes.length;
        // console.log(i);
        veriousQuotes = differentQuotes[--i];
    }
    // console.log(veriousQuotes);
    document.getElementById('quotes').innerText = `" ${veriousQuotes} "`;
    // console.log(i);
}