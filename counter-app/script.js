let counter = document.querySelector("#output");
let buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("add")) {
      count++;
    } else if (styles.contains("subtract")) {
      count--;
    }

    if (count > 10) {
      counter.textContent = 0;
    } else if (count < 0) {
      counter.textContent = 0;
    } else {
      counter.textContent = count;
    }
  });
});

// add.addEventListener("click", function () {
//   let output = document.querySelector("#output");
//   output.innerText++;
//   if (output.innerText > 10) {
//     output.innerText = 0;
//   }
// });

// subtract.addEventListener("click", function () {
//  let output = document.querySelector("#output");
//  output.innerText--;
//  if(output.innerText < 0) {
//   output.innerText = 0;
//  }
// })
