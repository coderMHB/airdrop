const goblin = document.getElementById("goblin");
const scor = document.querySelector(".scor");
const count = document.getElementById("count");
const toUSD = document.getElementById("toUSD");

// save in localstorage
let tokenCount = +localStorage.getItem("token");
document.getElementById("token-count").innerHTML = tokenCount;
toUSD.innerHTML = `${(tokenCount / 1000).toFixed(2)}$`;

count.innerHTML = tokenCount;

function claimToken(event) {
  tokenCount++;
  localStorage.setItem("token", tokenCount);
  document.getElementById("token-count").innerHTML = tokenCount;
  toUSD.innerHTML = `${(tokenCount / 1000).toFixed(2)}$`;
  count.innerHTML = tokenCount;

  const button = document.getElementById("claim-button");
  scor.style.display = "inline-block";
  scor.style.left = `${event.offsetX}px`;
  scor.style.top = `${event.offsetY}px`;
  setTimeout(() => {
    scor.style.display = "none";
  }, 350);
}
goblin.addEventListener("click", claimToken);

// preventDefault
scor.addEventListener("selectstart", (event) => {
  event.preventDefault();
});
goblin.addEventListener("dragstart", (event) => {
  event.preventDefault();
});
document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
document.body.addEventListener("keydown", (event) => {
  if (event.key == "F12") {
    event.preventDefault();
  }
});
