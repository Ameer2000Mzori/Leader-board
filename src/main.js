import newPlayer from './components/addPlayer.js';
import leaderBoardObj from './components/leaderBaordObj.js';
import listRefrsh from './components/listRefresh.js';
import './style/style.css';

const refreshBtn = document.getElementsByClassName('refresh-btn')[0];

refreshBtn.addEventListener('click', listRefrsh);
const submitBtn = document.getElementById("sub-btn");
leaderBoardObj();

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Corrected the typo here
  newPlayer();
});
