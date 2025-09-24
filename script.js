// Basic gamification with localStorage leaderboard
document.getElementById('year').textContent = new Date().getFullYear();

const pointsKey = 'greenverse_points';
const leaderboardKey = 'greenverse_leaderboard';
let points = Number(localStorage.getItem(pointsKey) || 0);
let level = Math.floor(points / 100) + 1;

const pointsDisplay = document.getElementById('pointsDisplay');
const levelDisplay = document.getElementById('levelDisplay');
const progressFill = document.getElementById('progressFill');
const completeMissionBtn = document.getElementById('completeMissionBtn');
const leaderboardList = document.getElementById('leaderboardList');
const nameForm = document.getElementById('nameForm');

function refreshUI(){
  pointsDisplay.textContent = Points: ${points};
  level = Math.floor(points / 100) + 1;
  levelDisplay.textContent = Level: ${level};
  const pct = Math.min(100, (points % 100));
  progressFill.style.width = pct + '%';
  renderLeaderboard();
}
refreshUI();

completeMissionBtn.addEventListener('click', () => {
  // mission grants 50 points
  points += 50;
  localStorage.setItem(pointsKey, points);
  // small animation
  completeMissionBtn.textContent = 'Nice! +50';
  setTimeout(()=> completeMissionBtn.textContent = 'Complete Mission (+50)', 1200);
  refreshUI();
});

// Leaderboard stored in localStorage as array of {name,score}
function getLeaderboard(){
  try {
    return JSON.parse(localStorage.getItem(leaderboardKey)) || [];
  } catch(e){
    return [];
  }
}
function setLeaderboard(list){
  localStorage.setItem(leaderboardKey, JSON.stringify(list));
}

function renderLeaderboard(){
  const list = getLeaderboard().slice(0,10);
  leaderboardList.innerHTML = '';
  list.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = ${idx+1}. ${item.name} — ${item.score} pts;
    leaderboardList.appendChild(li);
  });
  if(list.length===0){
    leaderboardList.innerHTML = '<li>No scores yet — be the first!</li>';
  }
}

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('playerName').value.trim();
  if(!name) return;
  const list = getLeaderboard();
  list.push({name, score: points});
  list.sort((a,b) => b.score - a.score);
  setLeaderboard(list.slice(0,50));
  alert('Saved! Check the leaderboard.');
  document.getElementById('playerName').value = '';
  renderLeaderboard();
});

// small stubs for activity buttons (expand later)
function openQuiz(){ alert('Quiz: coming soon — use this area to load a quiz modal.'); }
function openGarden(){ alert('Garden: coming soon — expand with canvas or SVG.'); }
function openChallenge(){ alert('Challenge: coming soon — add timer + drag/drop.'); }

// Expose to global for the demo buttons
window.openQuiz = openQuiz;
window.openGarden = openGarden;
window.openChallenge = openChallenge;