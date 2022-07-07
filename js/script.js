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
        txt += `There are ${distinctPowers(num)} distinct terms for 2 &le; a &le ${num} and 2 &le; b &le; ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}