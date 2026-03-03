
function startGame() {

	const choice = confirm(
		"You are presented with a rare opportunity, you get to pick what Shows Universe you will live in for the next 72hrs. \n Press okay if you want to live in Narutos Universe Specificlally the Hidden Mist Village or press cancel to live in the Unova Region of Pokemon.",
	);


	if (choice) {
		choosenaruto();
	} else {
		choosepokemon();
	}
}

function choosenaruto() {

	const choice = confirm(
		"You enter the Hidden Mist and find the Executioner's blade. Click OK to take it, or Cancel to keep walking.",
	);
	if (choice) {
		takeblade();
	} else {
		movealong();
	}
}

function openTreasureChest() {
	alert("You take the Blade Zabuza isn't very happy, he slimes you out RIP");
}

function leaveTreasureChest() {
	alert(
		"You decide to leave the blade alone and continue into the Hidden Mist.",
	);
}

function choosepokemon() {
	const choice = confirm(
		"You enter the Unova Region of Pokemon and it's time to choose a starter. However, you're late, so you only have 2 options. \nClick OK to pick Tepig the fire pig Pokémon, or cancel to pick Oshawott the sea otter Pokémon.",
	);
	if (choice) {
		choosetepig();
	} else {
		chooseoshawott();
	}
}

function choosetepig() {
	alert(
		"You chose Tepig the fire pig Pokemon to start your journey.",
	);

function chooseoshawott() {
	alert(
		"You chose Oshawott the sea otter Pokemon to start your journey.",
	);
}
