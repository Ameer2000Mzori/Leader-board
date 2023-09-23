const newPlayer = async () => {
  const playerName = document.getElementById("name").value;
  const playerScore = document.getElementById("score").value;
  const errorP = document.getElementById('error');

  if (playerName === "" && playerScore === "") {
    console.log('wrong');
    errorP.textContent = 'please enter name of the player and/or their score!';
  } else {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUAZ/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: playerName,
          score: playerScore,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8', // Corrected 'json' to 'json;'
        },
      }
    ).then((response) => response.json());
  }
  document.getElementById("name").value = '';
  document.getElementById("score").value = '';
};

    export default newPlayer;