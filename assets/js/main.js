const selectElement = (element) => document.querySelector(element);

selectElement(".menu-icons").addEventListener("click", () => {
  selectElement(".nav").classList.toggle("active");
});

const selectElement2 = document.querySelectorAll(".content__list-header");

function mobileMenuAction() {
  const path = this.parentElement.parentElement.classList;

  if (path == "content col-lg active") {
    this.parentElement.parentElement.classList.remove("active");
  } else {
    this.parentElement.parentElement.classList.add("active");
  }
}

selectElement2.forEach((n) => n.addEventListener("click", mobileMenuAction));


let counter = document.querySelector(".counter");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

function sayac() {
  let count = 1;
  plus.addEventListener("click", () => {
    count++;
    updateDisplay();
  });
  minus.addEventListener("click", () => {
    if (count > 1) {
      count--;
      updateDisplay();
    }
  });
  function updateDisplay() {
    counter.innerHTML = count;
  }
}

sayac();



