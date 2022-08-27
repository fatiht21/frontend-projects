let counter = document.querySelector("#output");
let buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("add")) {
      if (counter.textContent >= 10) {
        counter.textContent = 0;
      } else {
        count++;
      }
    } else if (styles.contains("subtract")) {
      if (counter.textContent <= 0) {
        counter.textContent = 0;
      } else {
        count--;
      }
    }
    counter.textContent = count;
  });
});
