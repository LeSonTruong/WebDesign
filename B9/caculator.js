// Function to calculate and display the results
document.getElementById("calculateBtn").addEventListener("click", function () {
    // Get values for addition
    let add1 = parseFloat(document.getElementById("add1").value) || 0;
    let add2 = parseFloat(document.getElementById("add2").value) || 0;
    let addResult = add1 + add2;
    document.getElementById("addResult").value = addResult;

    // Get values for subtraction
    let sub1 = parseFloat(document.getElementById("sub1").value) || 0;
    let sub2 = parseFloat(document.getElementById("sub2").value) || 0;
    let subResult = sub1 - sub2;
    document.getElementById("subResult").value = subResult;

    // Get values for multiplication
    let mul1 = parseFloat(document.getElementById("mul1").value) || 0;
    let mul2 = parseFloat(document.getElementById("mul2").value) || 0;
    let mulResult = mul1 * mul2;
    document.getElementById("mulResult").value = mulResult;

    // Get values for division and handle division by zero
    let div1 = parseFloat(document.getElementById("div1").value) || 0;
    let div2 = parseFloat(document.getElementById("div2").value) || 0;
    let divResult;
    if (div2 === 0) {
        divResult = "Không thể chia cho 0";
        document.getElementById("divResult").classList.add("red");
    } else {
        divResult = div1 / div2;
        document.getElementById("divResult").classList.remove("red");
    }
    document.getElementById("divResult").value = divResult;

    // Log the operations
    logOperations(add1, add2, addResult, sub1, sub2, subResult, mul1, mul2, mulResult, div1, div2, divResult);
});

// Function to log operations
function logOperations(add1, add2, addResult, sub1, sub2, subResult, mul1, mul2, mulResult, div1, div2, divResult) {
    const log = document.getElementById("log");

    // Make only the division log red
    let divisionLog = `<span class="red">${div1} / ${div2} = ${divResult}</span>`;

    // Create a new log entry
    const logEntry = `
        <p>
            ${add1} + ${add2} = ${addResult} <br />
            ${sub1} - ${sub2} = ${subResult} <br />
            ${mul1} * ${mul2} = ${mulResult} <br />
            ${divisionLog}
        </p>
        <hr />
    `;

    // Add the new log entry to the top of the log div
    log.innerHTML = logEntry + log.innerHTML;
}
