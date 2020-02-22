/*
Pour cet exercice, le but est de coder la fonctionalité suivante :

- Il doit y avoir deux boutons en haut de la page :
  un bouton « Thème clair » et un bouton « Thème sombre ».
- Quand on clique sur le bouton « Thème clair », les textes de la page
  doivent s’afficher en noir sur fond blanc.
- Quand on clique sur le bouton « Thème sombre », les textes de la page
  doivent s’afficher en blanc sur fond noir.

Vous pouvez utiliser toutes les manières que vous voulez pour ça,
tant que ça fonctionne :)
*/
// nuit
document.querySelector('.night-button').addEventListener('click', function(){
	document.querySelector("h1").style.color = 'white';
	document.querySelector("p").style.color = 'white';
	document.body.style.backgroundColor = 'black';
    document.querySelector('.jacquouillejour').style.display = "none";
    document.querySelector('.jacquouillenuit').style.display = "block";
});

// jour

document.querySelector('.day-button').addEventListener('click', function(){
	document.querySelector("h1").style.color = 'black';
	document.querySelector("p").style.color = 'black';
	document.body.style.backgroundColor = 'white';
    document.querySelector('.jacquouillenuit').style.display = "none";
    document.querySelector('.jacquouillejour').style.display = "block";
});
    document.querySelector('.jacquouillenuit').style.display = "none";
