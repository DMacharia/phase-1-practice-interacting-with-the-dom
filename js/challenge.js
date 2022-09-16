//select counter add timer to it
const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.getElementById("likes");
const commentForm = document.getElementById("comment-form");
const button = document.getElementsByTagName("button");
let count = 0;
let intervalID = setInterval(timerHandler, 1000);
let paused = false;

document.addEventListener("DOMContentLoaded", () => {
	intervalID;
});

function timerHandler() {
	count = parseInt(counter.innerText);
	counter.innerText = count + 1;
}

//disable other buttons on pause
//for loop to iterate over all the buttons
let buttonArray = [];
for (let i = 0; i < button.length; i++) {
	if (button[i].id !== "pause") {
		buttonArray.push(button[i]);
	}
}
//function to disable buttons
function disableButton(button) {
	button.setAttribute("disabled", true);
}

function enableButton(button) {
	button.removeAttribute("disabled");
}

//replace innertext pause to resume when paused
function replacePause() {
	if (!paused) {
		pause.innerText = "resume";
	}
	if (paused) {
		pause.innerText = "pause";
	}
}
//select pause button, add event listener to pause counter
pause.addEventListener("click", (e) => {
	if (!paused) {
		clearInterval(intervalID);
		buttonArray.forEach((button) => disableButton(button));
		replacePause();
		alert("pause count?");
	}
	if (paused) {
		intervalID = setInterval(timerHandler, 1000);
		buttonArray.forEach((button) => enableButton(button));
		replacePause();
		alert("resume count?");
	}
	//after pausing this revers the pause status to the opposite to resume pause
	paused = !paused;
});

minus.addEventListener("click", (e) => {
	count = parseInt(counter.innerText);
	counter.innerText = count - 1;
});

plus.addEventListener("click", (e) => {
	count = parseInt(counter.innerText);
	counter.innerText = count + 1;
});

//select heart button, add event listener to increase likes
heart.addEventListener("click", (e) => {
	const newLikeClick = document.createElement("li");
	const likes = document.getElementsByClassName("likes")[0]; //
	newLikeClick.dataset.counter = count;
	let likeCounter = 0;

	if (newLikeClick.dataset.counter == count) {
		likeCounter++;
		newLikeClick.innerHTML = `${counter.innerHTML} has been liked ${likeCounter} times.`;
	}
	likes.appendChild(newLikeClick);
});

commentForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const commentInput = document.getElementById("comment-input");
	const newComment = document.createElement("li");
	const comment = document.getElementsByClassName("comments")[0];

	newComment.innerHTML = commentInput.value;
	console.log(newComment);
	comment.appendChild(newComment);
});
