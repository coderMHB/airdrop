const goblin = document.getElementById("goblin");
const countDisplay = document.getElementById("count");
const toUSD = document.getElementById("toUSD");
const tokenCountDisplay = document.getElementById("token-count");

// بارگذاری تعداد توکن از localStorage
let tokenCount = +localStorage.getItem("token") || 0;
tokenCountDisplay.innerHTML = tokenCount;
toUSD.innerHTML = `${(tokenCount / 1000).toFixed(2)}$`;
countDisplay.innerHTML = tokenCount;

function claimToken(event) {
  // جلوگیری از رفتار پیش‌فرض
  event.preventDefault();

  // افزایش تعداد توکن
  tokenCount++;
  localStorage.setItem("token", tokenCount);
  tokenCountDisplay.innerHTML = tokenCount;
  toUSD.innerHTML = `${(tokenCount / 1000).toFixed(2)}$`;
  countDisplay.innerHTML = tokenCount;

  // ایجاد عنصر "+1"
  const plusOne = document.createElement("div");
  plusOne.className = "scor";
  plusOne.innerText = "+1";

  // محاسبه موقعیت کلیک
  const rect = goblin.getBoundingClientRect();
  const x = event.clientX - rect.left - 36; // موقعیت X نسبت به گابلین
  const y = event.clientY - rect.top - 32; // موقعیت Y نسبت به گابلین

  // قرار دادن عنصر "+1" در موقعیت کلیک
  plusOne.style.position = "absolute"; // اطمینان از اینکه موقعیت به درستی تنظیم شود
  plusOne.style.left = `${x}px`;
  plusOne.style.top = `${y}px`;
  goblin.querySelector(".parent-img").appendChild(plusOne);

  // محو کردن بعد از 350 میلی‌ثانیه
  setTimeout(() => {
    plusOne.remove();
  }, 350);
}

// افزودن رویداد کلیک و لمسی به گابلین
goblin.addEventListener("click", claimToken);
goblin.addEventListener("touchstart", (event) => {
  // جلوگیری از رفتار پیش‌فرض
  event.preventDefault();
  // برای هر لمس، تابع claimToken را فراخوانی کنید
  for (let touch of event.touches) {
    // ایجاد یک رویداد شبیه‌سازی شده
    const simulatedEvent = new MouseEvent("click", {
      clientX: touch.clientX,
      clientY: touch.clientY,
      bubbles: true,
      cancelable: true,
    });
    goblin.dispatchEvent(simulatedEvent);
  }
});

// جلوگیری از انتخاب و کشیدن
goblin.addEventListener("selectstart", (event) => {
  event.preventDefault();
});
goblin.addEventListener("dragstart", (event) => {
  event.preventDefault();
});
document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
// document.body.addEventListener("keydown", (event) => {
//   if (event.key === "F12") {
//     event.preventDefault();
//   }
// });

const airdrop = document.querySelector(".airdrop");
console.log(airdrop);

let images = [
  "./assets/img/goblin1.png",
  "./assets/img/goblin2.png",
  "./assets/img/goblin3.png",
  "./assets/img/goblin4.png",
];

function mainImage() {
  if (tokenCount >= 15000) {
    airdrop.style.backgroundImage = `url(${images[3]})`;
  } else if (tokenCount >= 10000) {
    airdrop.style.backgroundImage = `url(${images[2]})`;
  } else if (tokenCount >= 5000) {
    airdrop.style.backgroundImage = `url(${images[1]})`;
  } else if (tokenCount >= 0) {
    airdrop.style.backgroundImage = `url(${images[0]})`;
  }
}
document.body.onload = mainImage;
goblin.addEventListener("click", mainImage);

// chatBot
const messages = [
  { question: "سلام", awnser: "سلام، چه کمکی از دستم ساختس" },
  { question: "خوبی", awnser: "ممنون، امیدوارم شما هم خوب و سلامت باشید" },
  { question: "hi", awnser: "سلام، چه کمکی از دستم ساختس" },
  { question: "hello", awnser: "سلام، چه کمکی از دستم ساختس" },
];
let userQues = prompt("سوال خود را بپرسید");
let awnser = messages.find((message) => {
  return userQues.includes(message.question);
});
alert(awnser.awnser);
