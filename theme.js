// nuit
document.querySelector('.night-button').addEventListener('click', function(){
	document.querySelector("h1").style.color = '#F4FFFD';
	document.querySelector("p").style.color = '#F4FFFD';
	document.body.style.backgroundColor = '#011936';
  document.querySelector('.jacquouillejour').style.display = "none";
  document.querySelector('.jacquouillenuit').style.display = "block";
});

// jour
document.querySelector('.day-button').addEventListener('click', function(){
	document.querySelector("h1").style.color = '#011936';
	document.querySelector("p").style.color = '#011936';
	document.body.style.backgroundColor = '#F4FFFD';
  document.querySelector('.jacquouillenuit').style.display = "none";
  document.querySelector('.jacquouillejour').style.display = "block";
});
document.querySelector('.jacquouillenuit').style.display = "none";
document.body.style.backgroundColor = '#F4FFFD';
document.querySelector("h1").style.color = '#011936';
document.querySelector("p").style.color = '#011936';

// clickMe button
let clickMe = document.getElementById('clickMe');
clickMe.addEventListener('click', lol);
function lol() {
	document.querySelector('button.lol').outerHTML = '<img src="https://media2.giphy.com/media/3o6ozvv0zsJskzOCbu/giphy.gif?cid=ecf05e47i655p2nmqpfxkh8z14h6s0enb57se4idy8w7xz29&rid=giphy.gif&ct=g" width="80" height="80" id="emojiLol">';
}
