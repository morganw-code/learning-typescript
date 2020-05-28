var button = document.querySelector("button");
var ConvertType;
(function (ConvertType) {
    ConvertType[ConvertType["NUMBER"] = 0] = "NUMBER";
    ConvertType[ConvertType["TEXT"] = 1] = "TEXT";
})(ConvertType || (ConvertType = {}));
var person = {
    name: "Morgan",
    age: 20
};
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === ConvertType.NUMBER) {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedNumber = combine(5, 5, ConvertType.NUMBER);
var combinedString = combine("Hello ", "World!", ConvertType.TEXT);
button.addEventListener("click", function () {
    console.log(combinedNumber);
    console.log(combinedString);
});
