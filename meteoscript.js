// token meteo bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0
//
// https://api.meteo-concept.com/api/forecast/0?token=bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0

let codeInsee = '05079';
let token = 'bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0';


document.querySelector('button').addEventListener('click', function() {
  $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0&insee=05079`, function(reponse1){
    document.querySelector('#tmax').value = `${reponse1.forecast.tmax}`;
  });
});

document.querySelector('button').addEventListener('click', function() {
  $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0&insee=05079`, function(reponse2){
    document.querySelector('#tmin').value = `${reponse2.forecast.tmin}`;
  });
});

document.querySelector('button').addEventListener('click', function() {
  $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0&insee=05079`, function(reponse3){
    document.querySelector('#humidite').value = `${reponse3.forecast.probarain}`;
  });
});
