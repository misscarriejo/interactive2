/*function myMap() {
    var myCenter = new google.maps.LatLng(47.551719,-122.041122);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 5};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
} 

Yeah this one didn't work.
*/


$(function () {

    function initMap() {

        var location = new google.maps.LatLng(47.551719,-122.041122);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});