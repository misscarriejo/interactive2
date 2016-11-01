/* OLD MAP

$(function () {

    function initMap() {

        var location = new google.maps.LatLng(47.550591, -122.049826);

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

Add in the pin */

$(function () {

 function init_map(   {

        var myOptions = {

            zoom:17,
            center:new
            google.maps.LatLng(47.551237,-122.052456),
            mapTypeId: google.maps.MapTypeId.ROADMAP};

            map = new google.maps.Map(document.getElementById('gmap_canvas'),
            myOptions);
            marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(47.551237,-122.052456)});
            infowindow = new google.maps.InfoWindow({content:'<strong>Dr. Ambo & Assoc.</strong><br>Located inside Costco<br>1801 Tenth Avenue NW, Issaquah, WA<br>'});
            google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}


        google.maps.event.addDomListener(window, 'load', init_map);



