let formEl = document.body.querySelector("form");
let radioBtnEL = document.body.querySelectorAll("input[type='radio']");
let outputDiv = document.body.querySelector(".div-output");
formEl.elements.submit.addEventListener("click", (e) => {
  e.preventDefault();

  let score = 0;
  let msg = "";
  for (let btn of radioBtnEL) {
    if (btn.checked) {
      if (
        btn.id === "4" ||
        btn.id === "5" ||
        btn.id === "12" ||
        btn.id === "15" ||
        btn.id === "20"
      ) {
        score++;
      }
    }
  }
  if (score) {
    msg = `Congratulations, your score is ${score}/5`;

    if (score === 5)
      msg = `Congratulations, you have scored full marks ${score}/5`;
  } else {
    msg = `Your score is 0/5`;
  }

  outputDiv.innerText = msg;
  for (let btn of radioBtnEL) btn.checked = false;
});

formEl.elements.clear.addEventListener("click", (e) => {
  e.preventDefault();

  for (let btn of radioBtnEL) btn.checked = false;

  outputDiv.innerText = "";
});
