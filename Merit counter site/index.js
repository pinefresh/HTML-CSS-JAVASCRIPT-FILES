function meritcount() {
    let bphy = document.getElementById('bphy').value;
    let bche = document.getElementById('bche').value;
    let bmathbio = document.getElementById('bmathbio').value;
    let gphy = document.getElementById('gphy').value;
    let gche = document.getElementById('gche').value;
    let gmathbio = document.getElementById('gmathbio').value;

    // console.log(bphy, bche, bmathbio, gphy, gche, gmathbio);
    let btotal = parseFloat(bphy) + parseFloat(bche) + parseFloat(bmathbio);
    btotal = ((btotal / 3) * 60) / 100;
    // console.log(btotal);

    let gtotal = parseFloat(gphy) + parseFloat(gche) + parseFloat(gmathbio);
    gtotal = ((gtotal) * 40) / 120;
    // console.log(gtotal);

    let totalmerit = btotal + gtotal;
    totalmerit = totalmerit.toFixed(2);
    // console.log(totalmerit.toFixed(2));

    if ((isNaN(bphy) == true) || (isNaN(bche) == true) || (isNaN(bmathbio) == true) || (isNaN(gphy) == true) || (isNaN(gche) == true) || (isNaN(gmathbio) == true)) {
        alert('Hey ! Please Enter correct marks...');
        document.getElementById('note').innerText = `Your merit marks are Invalid`;
    }
    else if ((bphy == "") || (bche == '') || (bmathbio == '') || (gphy == '') || (gche == '') || (gmathbio == '')) {
        alert('Hey ! Please Enter correct marks...');
        document.getElementById('note').innerText = `Your merit marks are Invalid`;
    }
    else if ((bphy > 100) || (bphy < 0) || (bche > 100) || (bche < 0) || (bmathbio > 100) || (bmathbio < 0) || (gphy > 40) || (gphy < -40) || (gche > 40) || (gche < -40) || (gmathbio > 40)) {
        alert('Hey ! Please enter board marks out of 100 and enter gujcet marks from 40...');
        document.getElementById('note').innerText = `Your merit marks are Invalid`;
    }
    else {
        document.getElementById('note').innerText = `Your merit marks are ${totalmerit}`;
    }


}
