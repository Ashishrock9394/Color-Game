/*var color = ["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(255, 0, 255)","rgb(0, 255, 255)"];*/

var numSquares = 9;

var color = getRandomColor(numSquares);

var square = document.querySelectorAll(".square");

var colorPicker = colorPick();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var medBtn = document.querySelector("#medBtn");

var checkEasy = true;
var checkHard = true;
var chechMed = true;


easyBtn.addEventListener("click",function(){
	if(checkEasy){
		easyBtn.classList.add("selected");
	medBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");

	numSquares = 3;
	color = getRandomColor(numSquares);

	colorPicker = colorPick();

	colorDisplay.textContent = colorPicker;

	messageDisplay.textContent = "";

	for(var i = 0; i < square.length; i++){
		if(color[i]){
			square[i].style.backgroundColor = color[i];
		} else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	checkHard = true;
	}
	checkMed = false;
});
medBtn.addEventListener("click",function(){
	if(checkMed){
		medBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");

	numSquares = 6;
	color = getRandomColor(numSquares);

	colorPicker = colorPick();

	colorDisplay.textContent = colorPicker;

	messageDisplay.textContent = "";

	for(var i = 0; i < square.length; i++){
		if(color[i]){
			square[i].style.backgroundColor = color[i];
		} else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	checkHard = true;
	}
	checkEasy = true;
});

hardBtn.addEventListener("click",function(){
	if(checkHard){
		hardBtn.classList.add("selected");
	medBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	numSquares = 9;
	color = getRandomColor(numSquares);

	colorPicker = colorPick();

	colorDisplay.textContent = colorPicker;

	messageDisplay.textContent = "";

	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
		square[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
	checkEasy = true;
	}
	checkMed = true;
});


colorDisplay.textContent = colorPicker;


resetButton.addEventListener("click",function(){
	numSquares = 9;
	color = getRandomColor(numSquares);

	colorPicker = colorPick();

	colorDisplay.textContent = colorPicker;

	messageDisplay.textContent = "";
	this.textContent = "New Colors"

	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue";
});

for(var i = 0; i < square.length; i++){
	//change the color of squares
	square[i].style.backgroundColor = color[i];

	//adding click to squares
	square[i].addEventListener("click",function(){
		var colorPicked = this.style.backgroundColor;
		if(colorPicked === colorPicker){
			messageDisplay.textContent = "Correct";
			changeColor(colorPicked);
			h1.style.backgroundColor = colorPicked;
			resetButton.textContent = "Play Again ?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});


}

function changeColor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor = color;
	}
}

function colorPick(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function getRandomColor(numb){
	var arr = [];

	for(var i=0;i<numb;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}