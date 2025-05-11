
function loadCoins() {
  return parseInt(localStorage.getItem("mathMagicCoins") || "0");
}

function addCoins(amount) {
  const current = loadCoins();
  localStorage.setItem("mathMagicCoins", current + amount);
}

function spendCoins(amount) {
  const current = loadCoins();
  if (current >= amount) {
    localStorage.setItem("mathMagicCoins", current - amount);
    return true;
  }
  return false;
}
