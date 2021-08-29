//Area of a Triangle
let input1 = document.body.querySelector("#input-firstside");
let input2 = document.body.querySelector("#input-secondside");
let input3 = document.body.querySelector("#input-thirdside");
let output = document.body.querySelector("#div-output");
let calcBtn = document.body.querySelector("#btn-calculate");
let clearBtn = document.body.querySelector("#btn-clear");

calcBtn.addEventListener("click", () => {
  let msg;
  let val1 = parseInt(input1.value);
  let val2 = parseInt(input2.value);
  let val3 = parseInt(input3.value);

  if (! val1 || !val2 || !val3) {
    msg = "Enter value of all sides !";
  } 
  else {
    let s = (val1 + val2 + val3) / 2;
    let prod = s * (s - val1) * (s - val2) * (s - val3);

    if (prod < 0) msg = "Oops, wrong value of sides.";
    else {
      let ans = Math.sqrt(prod);
      msg = `The area of the triangle with given sides is ${ans.toFixed(
        4
      )} units`;
    }

    input1.value = "";
    input2.value = "";
    input3.value = "";
  }

  output.innerText = msg;
});

clearBtn.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  output.innerText = "";
});
