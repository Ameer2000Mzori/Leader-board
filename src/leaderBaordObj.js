const  leaderBoardUl = document.getElementsByClassName('leader-board-ul')[0];

let leaderBoardObj = (name,score) =>{
    const ul = document.createElement('ul');
    ul.innerHTML = `<li><p>${name} : ${score}</p></li>`
    leaderBoardUl.appendChild(ul);
    
    console.log("here is the object");
};

export default leaderBoardObj;
