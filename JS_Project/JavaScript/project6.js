// generate hex random color
const randomColor = function () {
  const hexColor = "0123456789ABCDEF";
  let bgClr = "#";

  for (let chngbgclr = 0; chngbgclr < 6; chngbgclr++) {
    bgClr += hexColor[Math.floor(Math.random() * 16)];
  }
  return bgClr;
};

let intervalId;
let startChangeBgColor = () => {
  if (!intervalId) {
    intervalId = setInterval(Bgupdation, 1000);
  }
  function Bgupdation() {
    document.body.style.backgroundColor = randomColor();
  }
};
let stopChangeBgColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.getElementById("start").addEventListener("click", startChangeBgColor);

document.getElementById("stop").addEventListener("click", stopChangeBgColor);
