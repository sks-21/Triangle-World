//Hypotenuse

let input1 = document.body.querySelector("#input-base");
let input2 = document.body.querySelector("#input-height");
let output = document.body.querySelector("#div-output");
let calcBtn = document.body.querySelector("#btn-calculate");
let clearBtn = document.body.querySelector("#btn-clear");

calcBtn.addEventListener("click", () => {
  let msg;
  let base = parseInt(input1.value);
  let height = parseInt(input2.value);

  if (base < 0 || height < 0) {
    msg = "Values can not be -ve";
  } else if (!base || !height) {
    msg = "Invalid inputs";
  } else {
    let ans = Math.sqrt(base * base + height * height);
    msg = `The hypotenuse of the triangle is ${ans.toFixed(4)} units`;
    input1.value = "";
    input2.value = "";
  }

  output.innerText = msg;
});

clearBtn.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  output.innerText = "";
});
