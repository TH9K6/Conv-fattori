let button = document.getElementById("scomponi");
let paragraph = document.getElementById("p");

function primeNumbers(num) {
    let primeNums = [];
    let factorsDic = {};
    let total = 1;
    paragraph.innerText = '';  // Clear previous output

    for (let primeNumber = 2; primeNumber <= num; primeNumber++) {
        while (num % primeNumber === 0) {
            num /= primeNumber;
            primeNums.push(primeNumber);

            // Count occurrences of the prime factor
            let primeNumberExp = primeNums.filter(n => n === primeNumber).length;
            factorsDic[primeNumber] = primeNumberExp;

            total *= primeNumber;
        }

        if (factorsDic[primeNumber]) {
            paragraph.innerText += `${primeNumber}^${factorsDic[primeNumber]} x`;
        }
    }
    paragraph.innerText = paragraph.innerText.slice(0, -2);
}

button.onclick = function() {
    let num = parseInt(document.getElementById("number").value);
    primeNumbers(num);
}

function changeTheme() {
    let CSSlink = document.querySelector("#stylesheet");
    if (CSSlink.href.includes("ConvFattori.css")) {
        CSSlink.href = "ConvFattori2.css";
    } else {
        CSSlink.href = "ConvFattori.css";
    }
}

