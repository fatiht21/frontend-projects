const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const screen = document.querySelector(".screen");
const seats = document.querySelectorAll(
  ".seat:not(.reserved, .select-info, .empty)"
);

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
  const selectedSeats = container.querySelectorAll(".seat.selected");
  const selectedSeatsArr = [];
  const seatsArr = [];

  selectedSeats.forEach(function (seat) {
    selectedSeatsArr.push(seat);
  });

  seats.forEach(function (seat) {
    seatsArr.push(seat);
  });

  let selectedSeatIndex = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });

  console.log(selectedSeatIndex);
  let selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  amount.innerText = selectedSeatCount * select.value;

  saveToLocalStorage(selectedSeatIndex);
}

function saveToLocalStorage(index) {
  localStorage.setItem("selectedSeats", JSON.stringify(index));
  localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}

function showAlert() {
  let alert = document.getElementById("snackbar");
  alert.className = "show";
  setTimeout(function () {
    alert.className = alert.className.replace("show", "");
  }, 2000);
}
