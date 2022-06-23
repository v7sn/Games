/*
const player = document.getElementById("player");
const health = document.getElementById("health");
const healthRemaining = document.getElementById("healthRemaining");

const win = document.getElementById("win");
const rematch = document.getElementById("rematch");

window.addEventListener("load", function(e) {
	player.style.opacity = 0;
	health.style.opacity = 0;
	healthRemaining.style.opacity = 0;
	win.style.opacity = 0;
	rematch.style.opacity = 0;
});
*/

/*
window.addEventListener("load", function(e) {

	this.setInterval( () => {
		var randomTop = Math.floor(Math.random() * 650);
		var randomLeft = Math.floor(Math.random() * 1400);

		player.style.top = randomTop + "px";	
		player.style.left = randomLeft + "px";
	}, 1000)

	health.style.width = 100 + "%";
})
*/

/*
player.onclick = function() {
	var randomTop = Math.floor(Math.random() * 650);
	var randomLeft = Math.floor(Math.random() * 1400);


	player.style.backgroundColor = "red";
	setTimeout(() => {
		player.style.backgroundColor = "skyblue";

		health.style.width = parseInt(health.style.width) - 20 + "%";
	}, 100);


	if (health.style.width === `0%`) {
		document.body.style.background = "black";
		healthRemaining.style.opacity = 0;
		player.style.opacity = 0;
		win.style.opacity = 1;
		rematch.style.opacity = 1;
	}
}

rematch.onclick = function() {
	window.location.reload();
}
*/