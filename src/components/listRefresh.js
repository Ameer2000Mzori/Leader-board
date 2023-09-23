import leaderBoardObj from "./leaderBaordObj";

const leaderBoardUl = document.getElementsByClassName('leader-board-ul')[0];

const listRefresh = () => {
  leaderBoardUl.innerHTML = ''; // Corrected the typo here
  console.log('first stap');
  leaderBoardObj();
  console.log('last stap');
}

export default listRefresh;
