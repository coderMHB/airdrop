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
  tokenCount++;
  localStorage.setItem("token", tokenCount);
  tokenCountDisplay.innerHTML = tokenCount;
  toUSD.innerHTML = `${(tokenCount / 1000).toFixed(2)}$`;
  countDisplay.innerHTML = tokenCount;

  // ایجاد عنصر "+1"
  const plusOne = document.createElement('div');
  plusOne.className = 'scor';
  plusOne.innerText = '+1';
  
  for (let i = 0; i <= 5; i++) {
    // استفاده از offset برای محاسبه موقعیت کلیک
    const x = event.offsetX; // موقعیت X نسبت به گابلین
    const y = event.offsetY; // موقعیت Y نسبت به گابلین
  
    // قرار دادن عنصر "+1" در موقعیت کلیک
    plusOne.style.position = 'absolute'; // اطمینان از اینکه موقعیت به درستی تنظیم شود
    plusOne.style.left = `${x}px`;
    plusOne.style.top = `${y}px`;
    goblin.querySelector('.parent-img').appendChild(plusOne);
  
    // محو کردن بعد از 350 میلی‌ثانیه
    setTimeout(() => {
      plusOne.remove();
    }, 350); 
  }
}

// افزودن رویداد کلیک به گابلین
goblin.addEventListener("click", claimToken);

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
document.body.addEventListener("keydown", (event) => {
  if (event.key === "F12") {
    event.preventDefault();
  }
});
