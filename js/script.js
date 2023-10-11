const header = document.querySelector("header");
const nav = document.getElementById("nav");
const menu__bar = document.querySelector(".fa-bars");
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
    window.scrollTo({ top: 0 });
  });
});

menu__bar.addEventListener("click", () => {
  nav.classList.toggle("show");
  if (nav.classList.contains("show")) {
    menu__bar.className = "fa-regular fa-circle-xmark";
  } else {
    menu__bar.className = "fa-solid fa-bars";
  }
});

const countDownDate = new Date("2023-12-01 00:00:00");
let timeRemaining = countDownDate - new Date();

let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
let hours = Math.floor(
  (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

setInterval(function () {
  timeRemaining = countDownDate - new Date();

  days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);
