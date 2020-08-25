var show = document.getElementById('unique');

let atomicWeight = document.getElementsByClassName('atomicWeight').innerText;

let year = document.getElementsByClassName('yearOfDescovery').innerText;

let valency = document.getElementsByClassName('valancy').innerText;

let name = document.getElementsByClassName('elementName').innerText;

function fullElementDetails() {
    // show.style.display = "block";
    console.log(`Atomic weight : ${atomicWeight}, Year of descovery : ${year}, Valency : ${valency}`);
    // `Atomic weight : ${atomicWeight}, Year of descovery : ${year}, Valency : ${valency}`
}