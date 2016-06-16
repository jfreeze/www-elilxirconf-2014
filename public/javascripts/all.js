// This is where it all goes :)
$(document).ready(function() {
    $(document).mousemove(function(event) {
        var x = event.clientX * 0.01;
        var y = event.clientY * 0.01;

        $elementA = $(".palms .small-palms");
        $elementB = $(".palms .big-palms");

        $elementA.css({
            "-webkit-transform": "translate3d(" + x + "px," + y + "px,0px)",
            "-ms-transform": "translate3d(" + x + "px," + y + "px,0px)",
            "transform": "translate3d(" + x + "px," + y + "px,0px)"
        });

        $elementB.css({
            "-webkit-transform": "translate3d(" + (-x) + "px," + (-y) + "px,0px)",
            "-ms-transform": "translate3d(" + (-x) + "px," + (-y) + "px,0px)",
            "transform": "translate3d(" + (-x) + "px," + (-y) + "px,0px)"
        });
    });

    $(document).scroll(function() {
        var top = -($(this).scrollTop() * 0.1);

        $(".pyramid-bottom, .event-information").css({
            "-webkit-transform": "translateY(" + top + "px)",
            "-ms-transform": "translateY(" + top + "px)",
            "transform": "translateY(" + top + "px)"
        });
    });

    $(".menu-button").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".navbar").toggleClass('active');
    });

    function mapinit() {
        var mapa = document.getElementById("mapframe");
        if (mapa === null) {
            return;
        }

        var latlong = new google.maps.LatLng("28.3674646", "-81.5628278"),
            mapOptions = {
                center: latlong,
                zoom: 12,
                scrollwheel: false,
                navigationControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            },
            map = new google.maps.Map(mapa, mapOptions);

        var image = '/images2016/pin.png';
        var marker = new google.maps.Marker({
            position: latlong,
            map: map,
            icon: image
        });

        var currCenter = map.getCenter();
        google.maps.event.addDomListener(mapa, 'resize', function() {
            map.setCenter(currCenter);
        });
    }

    mapinit();
});
