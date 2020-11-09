
var map;




var map;

function initMap()
{
    // var position = {
    //     lat: 25.033977, lng: 121.563998,
        
    // };
    
    var position = {
        lat: 25.033977,
        lng: 121.563998,
        // draggable: true
    };
   
    

    map = new google.maps.Map(document.getElementById('issmap'), {
        zoom: 15,
        maxZoom: 20,
        scaleControl: false,
        // 限制使用者能縮放地圖的最小比例
        gestureHandling: 'greedy',
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false,
        fullscreenControl:false,
        position : { lat: 25.033977, lng: 121.563998 },//positon 位置
        map: map, //標示地圖
        // draggable: true,
        //說明文字(選擇性填寫)
      center: {lat:25.033977, lng: 121.563998},
      styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0f252e"
                },
                {
                    "lightness": 17
                }
            ]
        }
        ]
      
    });
    var marker = new google.maps.Marker({
        position: position,
        
        map: map,
        // label: 'No. 41, Section 2, Yanping Road',
        animation: google.maps.Animation.BOUNCE,
        draggable: true
    });
    var contentString = '<h3>No. 41, Section 2, Yanping Road</h3>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        position: position,
        maxWidth:400,
        pixelOffset: new google.maps.Size(0, 0) 
      });
    infowindow.open(map, marker);
    infowindow.addListener('domready',function() {
        var btn = document.getElementById('btn');
        btn.addEventListener('click', function() {
         
        });
      });
      marker.addListener('click',function(){
        infowindow.open(map, marker);
      });
    
    
    
  }