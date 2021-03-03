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
