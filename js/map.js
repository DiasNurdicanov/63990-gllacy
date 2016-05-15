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