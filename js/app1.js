// Index- Is a triangle logic

let checkBtn = document.body.querySelector("#btn-check");
let clearBtn = document.body.querySelector("#btn-clear");
let input1 = document.body.querySelector("#input-firstangle");
let input2 = document.body.querySelector("#input-secondangle");
let input3 = document.body.querySelector("#input-thirdangle");
let output = document.body.querySelector("#div-output");

checkBtn.addEventListener("click", () => {
  let msg;
  let val1 = parseInt(input1.value);
  let val2 = parseInt(input2.value);
  let val3 = parseInt(input3.value);
  let sum = val1 + val2 + val3;
  if (sum === 180) msg = "Hurray, these angles are of a triangle !";
  else msg = "These angles cannot form a triangle.";

  input1.value = "";
  input2.value = "";
  input3.value = "";
  output.innerText = msg;
});

clearBtn.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  output.innerText = "";
});
