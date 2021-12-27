
function setPlayerStyle(player) {
    player.style.border = "2px solid orange";
    player.style.margin = "10px";
    player.style.padding = "20px";
    player.style.borderRadius = "10px";
}
const players = document.getElementsByClassName("player");
for (const player of players) {
    setPlayerStyle(player);


}

//Create new elemnts
function addPlayer() {
    const playersContainer = document.getElementById("players");
    const player = document.createElement("div");
    player.classList.add('player');
    player.innerHTML = `<h4 class="player-name">player-4</h4>
    <p>Saepe, ut enim. Doloremque modi unde recusandae eum ipsa debitis commodi repellendus consequatur
        quod. Consequuntur non quibusdam in? Voluptate, iste architecto rerum nam dicta nobis voluptas
        adipisci cupiditate pariatur corrupti.</p>`;
    setPlayerStyle(player)
    playersContainer.appendChild(player);

}

document.getElementById("players").addEventListener("click", function (event) {

    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = "green";
    } else {
        event.target.parentNode.style.color = "red";
    }
})


