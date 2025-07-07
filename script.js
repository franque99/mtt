const hands = [
  { spot: "BTN vs BB – 40bb", correct: "Raise" },
  { spot: "BTN vs BB – 40bb", correct: "Raise" },
  { spot: "BTN vs BB – 40bb", correct: "Call" },
  { spot: "BTN vs BB – 40bb", correct: "Raise" },
  { spot: "BTN vs BB – 40bb", correct: "Fold" },
];

let current = 0;
let corrects = 0;

const startBtn = document.getElementById("start-btn");
const progressEl = document.getElementById("progress");
const handText = document.getElementById("hand-text");
const actionsEl = document.getElementById("actions");
const resultEl = document.getElementById("result");

startBtn.onclick = () => {
  current = 0;
  corrects = 0;
  resultEl.textContent = "";
  startBtn.disabled = true;
  nextHand();
};

function nextHand() {
  if (current >= hands.length) {
    handText.textContent = "🎉 Treino completo!";
    actionsEl.innerHTML = "";
    progressEl.textContent = `✅ Você acertou ${corrects}/${hands.length}`;
    startBtn.disabled = false;
    return;
  }

  const hand = hands[current];
  handText.textContent = `Situação ${current + 1}: ${hand.spot}`;
  progressEl.textContent = `Progresso: ${current}/${hands.length}`;

  actionsEl.innerHTML = ["Fold", "Call", "Raise"]
    .map(
      a =>
        `<button onclick="choose('${a}')">${a}</button>`
    )
    .join("");
}

function choose(choice) {
  const hand = hands[current];
  const feedback =
    choice === hand.correct
      ? "✅ Correto!"
      : `❌ Errado! Ação GTO: ${hand.correct}`;
  resultEl.textContent = feedback;

  if (choice === hand.correct) corrects++;
  current++;

  setTimeout(() => {
    resultEl.textContent = "";
    nextHand();
  }, 1200);
}
