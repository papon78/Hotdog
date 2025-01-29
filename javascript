let coins = 0;
let coinsPerClick = 1;
let autoClickerInterval;

// Update coin display
function updateCoinDisplay() {
  document.getElementById("coin-count").textContent = coins;
}

// Click event for the hotdog
document.getElementById("hotdog").addEventListener("click", () => {
  coins += coinsPerClick;
  updateCoinDisplay();
});

// Upgrade click power
document.getElementById("upgrade-click").addEventListener("click", () => {
  if (coins >= 10) {
    coins -= 10;
    coinsPerClick += 1;
    updateCoinDisplay();
    alert("Click power upgraded!");
  } else {
    alert("Not enough coins!");
  }
});

// Buy auto-clicker
document.getElementById("auto-clicker").addEventListener("click", () => {
  if (coins >= 50) {
    coins -= 50;
    updateCoinDisplay();
    autoClickerInterval = setInterval(() => {
      coins += 1;
      updateCoinDisplay();
    }, 1000);
    alert("Auto-clicker purchased!");
  } else {
    alert("Not enough coins!");
  }
});
