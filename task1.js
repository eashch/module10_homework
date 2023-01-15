let userNumberStr = prompt("Введите число:");
if (userNumberStr.includes(".")) {
    alert("Упс, кажется, вы ошиблись");
} else {
    let userNumber = +userNumberStr;
    if (Number.isNaN(userNumber) 
            || isNaN(userNumber)
            || !Number.isFinite(userNumber)) {
        alert("Упс, кажется, вы ошиблись");
    } else {
        alert(userNumber % 2 == 0 
            ? "Число является чётным" 
            : "Число является нечётным");
    }
}