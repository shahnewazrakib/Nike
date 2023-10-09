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

// Set the target date to 2 months from now
const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 2);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call updateCountdown initially to avoid a 1-second delay
updateCountdown();
