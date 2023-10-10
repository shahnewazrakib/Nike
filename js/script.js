const price = document.querySelector(".hero__section .price");
const hero__image = document.querySelector(".hero__section .shoe img");
const shoe__cards = document.querySelectorAll(".shoe__card");

shoe__cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const image__source = card.querySelector("img").src;
    const shoe__price = card.querySelector(".price").innerText;
    shoe__cards.forEach((other__card) => {
      other__card.classList.remove("active");
    });
    card.classList.add("active");
    hero__image.src = image__source;
    price.innerText = shoe__price;
  });
});

const countDownDate = new Date("2023-12-01 00:00:00");

// Calculate the time remaining
let timeRemaining = countDownDate - new Date();

// Convert the time remaining to days, hours, minutes, and seconds
let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

// Update the countdown timer every second
setInterval(function() {

  // Calculate the time remaining
  timeRemaining = countDownDate - new Date();

  // Convert the time remaining to days, hours, minutes, and seconds
  days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}, 1000);
