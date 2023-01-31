const resetBtn = document.querySelector("#reset");
const MakeItBlackBtn = document.querySelector("#MakeItBlack");
const rainbowBtn = document.querySelector("#Rainbow");

const slider = document.querySelector("#slider");
const valSlider = document.querySelector("#valueSlider");

const box = document.querySelector(".boxes");

function sketchBox() {
  const val = document.getElementById("slider").value;
  valSlider.textContent = val;
  for (let i = 0; i < val * val; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    box.setAttribute(
      "style",
      "grid-template-columns: repeat(" + val + ", 1fr)"
    );
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "black";
    });
    box.appendChild(cell);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

slider.addEventListener("input", function () {
  const val = document.getElementById("slider").value;
  valSlider.textContent = val;
  removeAllChildNodes(box);
  for (let i = 0; i < val * val; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    box.setAttribute(
      "style",
      "grid-template-columns: repeat(" + val + ", 1fr)"
    );
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "black";
    });
    box.appendChild(cell);
  }
});

resetBtn.addEventListener("click", function () {
  const val = document.getElementById("slider").value;
  const cell = box.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].style.backgroundColor = "white";
  }
});

rainbowBtn.addEventListener("click", function () {
  const val = document.getElementById("slider").value;
  const cell = box.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", () => {
      cell[i].style.backgroundColor = getRandomColor();
    });
  }
});

MakeItBlackBtn.addEventListener("click", function () {
  const val = document.getElementById("slider").value;
  const cell = box.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", () => {
      cell[i].style.backgroundColor = "black";
    });
  }
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

sketchBox();
