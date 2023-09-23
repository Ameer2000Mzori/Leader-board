const leaderBoardUl = document.getElementsByClassName('leader-board-ul')[0];

let leaderBoardObj = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUAZ/scores/',
  )
    .then((response) => response.json())
    .then((json) => {
      leaderBoardUl.innerHTML = '';
      json.result.forEach((item) => {
        const lsit = document.createElement('li');
        lsit.innerHTML = `<p>${item.user} : ${item.score}</p>`;
        leaderBoardUl.appendChild(lsit);
      });
    });
};

export default leaderBoardObj; // Commented the correction since there were no changes in this part of the code.
