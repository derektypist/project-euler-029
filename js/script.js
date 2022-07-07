// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length==0 || num<2 || num> 100 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 100.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `There are ${distinctPowers(num)} distinct terms in the sequence generated by a<sup>b</sup> for 2 &le; a &le; ${num} and 2 &le; b &le; ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the number of distinct terms in the sequence generated
    by a to the power of b, where a is between 2 and n and b is between 2 and n
    distinctPowers(15) returns 177
    distinctPowers(20) returns 324
    distinctPowers(25) returns 519
    distinctPowers(30) returns 755
*/
function distinctPowers(n) {
    let powers = [];
    for (let i=2;i<=n;i++) {
        for (let j=2;j<=n;j++) {
            let term = Math.pow(i,j);
            if (powers.indexOf(term)===-1) powers.push(term);
        }
    }
    return powers.length;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}