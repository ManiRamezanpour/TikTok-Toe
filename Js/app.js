let boxes = [...document.querySelectorAll(".box")];
let restartBtn = document.querySelector(".restarter_button");
console.log(boxes);
const X_PLAYER = "X";
const O_Player = "O";
let currentPlayer = X_PLAYER;
const gameBoerd = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const winingOption = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
const gameStarter = () => {
  boxes.forEach((box) => {
    box.addEventListener("click", boxedClicked, { once: true });
  });
};
function boxedClicked(e) {
  const id = e.target.id;
  gameBoerd[id] = currentPlayer;
  e.target.innerHTML = currentPlayer;
  console.log(id);
  if (Findwinner() !== false) {
    let winingBlockes = Findwinner();
    winingBlockes.map((box) => (boxes[box].style.backgroundColor = "red"));
  }
  currentPlayer = currentPlayer == X_PLAYER ? O_Player : X_PLAYER;
}
function Findwinner() {
  for (const iterator of winingOption) {
    let [a, b, c] = iterator;
    if (
      gameBoerd[a] &&
      gameBoerd[a] == gameBoerd[b] &&
      gameBoerd[a] == gameBoerd[c]
    ) {
      return [a, b, c];
    }
  }
  return false;
}
restartBtn.addEventListener("click", () => {
  window.location.reload();
  console.log("cliked");
  boxes.innerText = "";
});

gameStarter();
