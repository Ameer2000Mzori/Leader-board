console.log("Hello, world!");
import leaderBoardObj from './leaderBaordObj.js';
import './style/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const leaderListObj = JSON.parse(localStorage.getItem('leaderBoardData')) || {};
  const refreshBtn = document.getElementsByClassName('refresh-btn')[0];
  const displayedKeys = new Set(); // Track displayed items
    displayNewItems();
  function saveToLocalStorage() {
    localStorage.setItem('leaderBoardData', JSON.stringify(leaderListObj));
  }

  function displayNewItems() {
    for (const key in leaderListObj) {
      if (!displayedKeys.has(key)) {
        // Display only if it hasn't been displayed before
        leaderBoardObj(leaderListObj[key].playerName, leaderListObj[key].playerScore);
        displayedKeys.add(key);
      }
    }
  }

  refreshBtn.addEventListener('click', () => {
    displayNewItems();
  });

  const submitBtn = document.getElementById('sub-btn');

  submitBtn.addEventListener('click', submitHandler);

  function submitHandler(event) {
    event.preventDefault();
    const playerName = document.getElementById("name").value;
    const playerScore = document.getElementById("score").value;

    if (!playerName || !playerScore) {
      console.log('Please enter your name and score');
    } else {
      const newKey = `${Object.keys(leaderListObj).length + 1}`;
      const newPlayer = {
        playerName,
        playerScore,
      };
      leaderListObj[newKey] = newPlayer;
      saveToLocalStorage();
      console.log(leaderListObj); // Log the updated data
    }
  }
});
