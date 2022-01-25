/*
https://coolors.co/ffffff-ffcad4-b0d0d3-c08497-f7af9d
https://coolors.co/eca400-eaf8bf-006992-27476e-001d4a
https://coolors.co/ff9f1c-ffbf69-ffffff-cbf3f0-2ec4b6
*/

document.querySelector('#menu').a.addEventListener("click",showFF1);

function showFF1(){
	document.getElementById('displayArea').innerHTML = "<h3>When shuffling a deck of cards, the number of possible arrangements is approximately 8×1067. That’s more than the number of stars in the observable universe.</h3> <img id='card' src='images/card.jpg'>";
}
document.querySelector('#menu').b.addEventListener("click",showFF2);

function showFF2(){
	document.getElementById('displayArea').innerHTML = "<h3>Coca-Cola was first served in 1886. At that time, only nine colas were served on an average day, 3,285 a year. Today, 19,400 Coke products are consumed every second. 🥤⠀ </h3><img src='images/coke.jpg'>";
}
document.querySelector('#menu').c.addEventListener("click",showFF3);

function showFF3(){
	document.getElementById('displayArea').innerHTML = "<h3>At any given moment, 1,800 thunderstorms are happening on Earth. This amounts to 16 million storms each year. ⛈️☔⠀</h3> <img src='images/flash.jpg'> ";
}
document.querySelector('#menu').d.addEventListener("click",showFF4);

function showFF4(){
	document.getElementById('displayArea').innerHTML = "<h3>During WWII, a US naval destroyer won a battle against a Japanese submarine by throwing potatoes at them. The Japanese thought they were grenades.</h3> <img src='images/potato.jpg'>";
}
document.querySelector('#menu').e.addEventListener("click",showFF5);

function showFF5(){
	document.getElementById('displayArea').innerHTML = "<h3>Dogs can be allergic to humans - specifically, their dander. While being treated for this allergy, it can take up to 12 months for a dog to recover. 🐕</h3>⠀<img src='images/dog.jpg'>";
}

document.querySelector('#themes').t1.addEventListener("click",goT1);

function goT1(){
	document.querySelector('body').style.backgroundColor = "#ffffff";
	document.getElementById('displayArea').style.backgroundColor = "#ffcad4";
	document.getElementById('displayArea').style.borderColor = "#f7af9d";
	document.getElementById('displayArea').style.color = "#cc3300";
	var menubuttons = document.querySelector('#menu').getElementsByTagName('input');
	for(var i = 0; i < menubuttons.length; i++){
	menubuttons[i].style.color = "#ffffff";
	menubuttons[i].style.backgroundColor ="#b0d0d3";
	menubuttons[i].style.borderColor= "#f7af9d";
	}
	var themesbuttons = document.querySelector('#themes').getElementsByTagName('input');
	for(var i = 0; i < menubuttons.length; i++){
	themesbuttons[i].style.color = "#ffffff";
	themesbuttons[i].style.backgroundColor ="#b0d0d3";
	themesbuttons[i].style.borderColor= "#f7af9d";
	}

}

document.querySelector('#themes').t2.addEventListener("click",goT2);

function goT2(){
	document.querySelector('body').style.backgroundColor = "#ECA400";
	document.getElementById('displayArea').style.backgroundColor = "#EAF8BF";
	document.getElementById('displayArea').style.borderColor = "#006992";
	document.getElementById('displayArea').style.color = "#27476E";
	var menubuttons = document.querySelector('#menu').getElementsByTagName('input');
	for(var i = 0; i < menubuttons.length; i++){
	menubuttons[i].style.color = "#EAF8BF";
	menubuttons[i].style.backgroundColor ="#2ec4b6";
	menubuttons[i].style.borderColor= "#006992";
	}
	var themesbuttons = document.querySelector('#themes').getElementsByTagName('input');
	for(var i = 0; i < menubuttons.length; i++){
	themesbuttons[i].style.color = "#EAF8BF";
	themesbuttons[i].style.backgroundColor ="#2ec4b6";
	themesbuttons[i].style.borderColor= "#006992";
	}

}

document.querySelector('#themes').t3.addEventListener("click",goT3);

function goT3(){
	document.querySelector('body').style.backgroundColor = "#2EC4B6";
	document.getElementById('displayArea').style.backgroundColor = "#ffbf69";
	document.getElementById('displayArea').style.borderColor = "#ffffff";
	document.getElementById('displayArea').style.color = "#CBF3F0";
	var menubuttons = document.querySelector('#menu').getElementsByTagName('input');
	for(var i = 0; i < menubuttons.length; i++){
	menubuttons[i].style.color = "#ffbf69";
	menubuttons[i].style.backgroundColor ="#001D4A";
	menubuttons[i].style.borderColor= "#ffffff";
	}
	var themesbuttons = document.querySelector('#themes').getElementsByTagName('input');
	for(var i = 0; i < menubuttons.length; i++){
	themesbuttons[i].style.color = "#ffbf69";
	themesbuttons[i].style.backgroundColor ="#001D4A";
	themesbuttons[i].style.borderColor= "#006992";
	}

}
