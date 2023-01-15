let x = true;
let varType = typeof x;
let resultStr = "x - ";
switch (varType) {
    case "number":
        resultStr += "число";
        break;
    case "string":
        resultStr += "строка";
        break;
    case "boolean":
        resultStr += "логическое значение";
        break;
    default:
        resultStr = "Тип x не определён";
};

console.log(resultStr);