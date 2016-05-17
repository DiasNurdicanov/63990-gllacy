var form = document.querySelector('.form');
var btn = document.querySelector('.form-btn');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close');

btn.addEventListener('click', function(event) {
	event.preventDefault();

	form.classList.add('show');
});

overlay.addEventListener('click', function(event) {
	event.preventDefault();

	form.classList.remove('show');
});

close.addEventListener('click', function(event) {
	event.preventDefault();

	form.classList.remove('show');
});

//Карта
ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 16
    }); 
    
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.svg',
        iconImageSize: [218, 142],
        iconImageOffset: [-50, -142]
    });
    
    myMap.geoObjects.add(myPlacemark);
}