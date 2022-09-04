const DEFAULT_COLOR = "#333333",
  DEFAULT_MODE = "color",
  DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR,
  currentMode = DEFAULT_MODE,
  currentSize = DEFAULT_SIZE;

let currentlyActive = false;

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

const colorPicker = document.getElementById("colorPicker"),
  colorBtn = document.getElementById("colorBtn"),
  rainbowBtn = document.getElementById("rainbowBtn"),
  grayBtn = document.getElementById("grayBtn"),
  eraserBtn = document.getElementById("eraserBtn"),
  clearBtn = document.getElementById("clearBtn"),
  sizeValue = document.getElementById("sizeValue"),
  sizeSlider = document.getElementById("sizeSlider"),
  grid = document.getElementById("grid");

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");
grayBtn.onclick = () => setCurrentMode("gray");
eraserBtn.onclick = () => setCurrentMode("eraser");
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

grid.addEventListener("click", function () {
  togglePen();
});

function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  reloadGrid();
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
  clearGrid();
  setupGrid(currentSize);
}

function clearGrid() {
  grid.innerHTML = "";
}

function setupGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    const gridElement = document.createElement("div");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.appendChild(gridElement);
  }
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("click", changeColor)
  );
}

function togglePen() {
  let gridPixels = grid.querySelectorAll("div");
  if (!currentlyActive) {
    gridPixels.forEach((item) => {
      item.addEventListener("mouseleave", changeColor);
    });
    currentlyActive = true;
  } else {
    gridPixels.forEach((item) => {
      item.removeEventListener("mouseleave", changeColor);
    });
    currentlyActive = false;
  }
}

function changeColor(e) {
  if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256),
      randomG = Math.floor(Math.random() * 256),
      randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "gray") {
    let currentOpacity = Number(e.target.style.backgroundColor.slice(-4, -1));
    if (currentOpacity <= 0.9) {
      e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
    } else if (e.target.style.backgroundColor == "rgb(0, 0, 0)") {
      return;
    } else {
      e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "#fefefe";
  }
}

function activateButton(newMode) {
  if (currentMode === "rainbow") {
    rainbowBtn.classList.remove("active");
  } else if (currentMode === "color") {
    colorBtn.classList.remove("active");
  } else if (currentMode === "gray") {
    grayBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  }

  if (newMode === "rainbow") {
    rainbowBtn.classList.add("active");
  } else if (newMode === "color") {
    colorBtn.classList.add("active");
  } else if (newMode === "gray") {
    grayBtn.classList.add("active");
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
  activateButton(DEFAULT_MODE);
};
