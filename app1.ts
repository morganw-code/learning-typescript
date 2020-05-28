const button = document.querySelector("button");
enum ConvertType {
  "NUMBER",
  "TEXT",
}

const person: {
  name: string;
  age: number;
} = {
  name: "Morgan",
  age: 20,
};

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: ConvertType
) {
  let result: any;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === ConvertType.NUMBER) {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedNumber = combine(5, 5, ConvertType.NUMBER);
const combinedString = combine("Hello ", "World!", ConvertType.TEXT);

button.addEventListener("click", () => {
  console.log(combinedNumber);
  console.log(combinedString);
});
