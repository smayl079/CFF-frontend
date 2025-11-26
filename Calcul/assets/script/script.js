function hesabla(op) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let cavab = "";

    if (isNaN(n1) || isNaN(n2)) {
        cavab = "Ededleri duzgun daxil et!";
    } else {
        switch(op){
            case "+": cavab = n1 + n2; break;
            case "-": cavab = n1 - n2; break;
            case "*": cavab = n1 * n2; break;
            case "/":
                cavab = (n2 === 0) ? "0-a bolmek olmaz!" : (n1 / n2);
                break;
        }
    }
    
    document.getElementById("result").value = cavab;
}

