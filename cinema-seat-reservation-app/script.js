const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const screen = document.querySelector(".screen");

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved") &&
    !select.value == ""
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  } else if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    showAlert();
  }
});

select.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
  let price = select.value;
  count.innerText = selectedSeatCount;
  amount.innerText = selectedSeatCount * price;
}

function showAlert() {
  let alert = document.getElementById("snackbar");
  alert.className = "show";
  setTimeout(function () {
    alert.className = alert.className.replace("show", "");
  }, 2000);
}
