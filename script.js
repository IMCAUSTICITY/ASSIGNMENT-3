const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("name");
const greetBtn = document.getElementById("greetBtn");
const boxes = document.querySelectorAll(".box");

// Fill a box with the colour named in its text when clicked
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    const color = box.dataset.color;
    box.style.backgroundColor = color;
    // keep text readable on dark fills
    box.style.color = (color === "yellow") ? "#1f2937" : "#fff";
  });
});

// Change the header text to "Hello, [name]"
function greetUser() {
  const name = nameInput.value.trim();
  greeting.textContent = name ? "Hello, " + name : "Hello";
}

greetBtn.addEventListener("click", greetUser);
nameInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") greetUser();
});
