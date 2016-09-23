String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};
var unit = ['km/h', 'RPM', 'km/L'];
function initialize(type, targetList,label, value, rpmMax, fuelAverage) {
	if (type===undefined){type='class'};
    if (targetList===undefined){targetList=['speed','rpm','fuel','map']};
    if (label===undefined){label=nameList};
    if (value===undefined){value=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
    if (rpmMax===undefined){rpmMax=6000};
    if (fuelAverage===undefined){fuelAverage=10};
	dynamicCanvas(type, targetList,label, value, rpmMax, fuelAverage);
	var centerlatlng = new google.maps.LatLng(25.061441,121.550885);
	var myOptions = {
		zoom: 15,
		center: centerlatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles:[
			    {
			        "featureType": "all",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "on"
			            }
			        ]
			    },
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
			        "featureType": "administrative.country",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#ed5929"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative.locality",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#c4c4c4"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative.neighborhood",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#ed5929"
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
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.business",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ed5929"
			            },
			            {
			                "lightness": "0"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "color": "#ed5929"
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
			        "featureType": "road.arterial",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#575757"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "color": "#2c2c2c"
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
			        "featureType": "road.local",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#999999"
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
			                "color": "#000000"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    }
			]
	};
	var map = new google.maps.Map(select(type, targetList[3]), myOptions);
	var img = new google.maps.MarkerImage('/static/img/markers/CarMarker.png');
	var path_list = [	{lat:25.061441, lng: 121.550885},
						{lat:25.061558, lng: 121.551872},
						{lat:25.061869, lng: 121.553347},
						{lat:25.061947, lng: 121.554806},
						{lat:25.062024, lng: 121.555622},
						{lat:25.061986, lng: 121.556566},
						{lat:25.062141, lng: 121.557682},
						{lat:25.062413, lng: 121.559055},
						{lat:25.062452, lng: 121.560814},
						{lat:25.062608, lng: 121.56240},
						{lat:25.061441, lng: 121.550885},
						{lat:25.061558, lng: 121.551872},
						{lat:25.061869, lng: 121.553347},
						{lat:25.061947, lng: 121.554806},
						{lat:25.062024, lng: 121.555622},
						{lat:25.061986, lng: 121.556566},
						{lat:25.062141, lng: 121.557682},
						{lat:25.062413, lng: 121.559055},
						{lat:25.062452, lng: 121.560814},
						{lat:25.062608, lng: 121.56240},
						{lat:25.061441, lng: 121.550885},
						{lat:25.061558, lng: 121.551872},
						{lat:25.061869, lng: 121.553347},
						{lat:25.061947, lng: 121.554806},
						{lat:25.062024, lng: 121.555622},
						{lat:25.061986, lng: 121.556566},
						{lat:25.062141, lng: 121.557682},
						{lat:25.062413, lng: 121.559055},
						{lat:25.062452, lng: 121.560814},
						{lat:25.062608, lng: 121.56240},
						{lat:25.061441, lng: 121.550885},
						{lat:25.061558, lng: 121.551872},
						{lat:25.061869, lng: 121.553347},
						{lat:25.061947, lng: 121.554806},
						{lat:25.062024, lng: 121.555622},
						{lat:25.061986, lng: 121.556566},
						{lat:25.062141, lng: 121.557682},
						{lat:25.062413, lng: 121.559055},
						{lat:25.062452, lng: 121.560814},
						{lat:25.062608, lng: 121.56240}];
	var n = path_list.length;
	var count = 0;	
	var markers = [];
	var marker = new google.maps.Marker({
		title: "I'm here.",
		icon: img,
		id: count
	});
	var infodiv = '<div id=\"info\" style=\"height:120px;width:130px;\"><div style=\"position:relative;text-align:left;top:25%;margin-top:10%;margin-left:13%;color:#444;font-weight:bold;\">{0}</div></div>';
	var infowindow = new google.maps.InfoWindow({
		pixelOffset: new google.maps.Size(0, 0),
		content: 'Hi'
	});
	var interval = setInterval(function (){
		var latlng = new google.maps.LatLng(path_list[count].lat, path_list[count].lng);
		map.setCenter(latlng);
		var path = (count == 0) ? [path_list[0]] : path_list.slice(0, count + 1);
		var line = new google.maps.Polyline({
			path: path,
			strokeColor: '#f4ed71',
		});	
		if (count > 0) markers[count-1].setMap(null);
		marker.setOptions({position:latlng, id: count});
		markers.push(marker);
		line.setMap(map);
		marker.setMap(map);
		count ++;
		if (count >= n) clearInterval(interval);
		// var newData = createValue(1)[0];
		// var oldData = option.series[0].data;
		var oldAxis = optionList[0].xAxis[0].data;
		var content = '';
        if (typeof oldAxis.slice(-1)[0] == 'number'){
        	$.each(nameList, function(idx, item){
        		var axisData = optionList[idx].xAxis[0].data.slice(-1)[0]+1;
        		optionList[idx].xAxis[0].data.shift();
        		optionList[idx].xAxis[0].data.push(axisData);
        		optionList[idx].series[0].data.shift();
        		var tmp = createValue(1, item)[0];
        		if (content.length == 0){
        			content += item + ': ' + tmp + ' ' + unit[idx];
        		}else{
        			content += '<br>' + item + ': ' + tmp  + ' ' + unit[idx];
        		}
        		infowindow.setContent(infodiv.format(content));
        		optionList[idx].series[0].data.push(tmp);
        		optionList[idx].series[0].animation = true;
        		optionList[idx].title.text = item + ' ' + unit[idx];
        		optionList[idx].series[0].name = item;
        		canvas[idx].setOption(optionList[idx]);
        	});
   //      	var axisData = oldAxis.slice(-1)[0]+1;
   //      	oldAxis.shift();
   //      	oldAxis.push(axisData);
			// oldData.shift();
			// oldData.push(newData);
			// option.series[0].animation = true;
        } else {
        	// oldAxis[count-1] = count;
        	// oldData[count-1] = newData;
        	$.each(nameList, function(idx, item){
        		optionList[idx].xAxis[0].data[count-1] = count;
        		var tmp = createValue(1, item)[0];
        		if (content.length == 0){
        			content += item + ': ' + tmp  + ' ' + unit[idx];
        		}else{
        			content += '<br>' + item + ': ' + tmp  + ' ' + unit[idx];
        		}
        		infowindow.setContent(infodiv.format(content));
        		optionList[idx].series[0].data[count-1] = tmp;
        		optionList[idx].title.text = item + ' ' + unit[idx];
        		optionList[idx].series[0].name = item;
        		canvas[idx].setOption(optionList[idx]);
        	});
        }
        infowindow.open(map, marker);
		$( ".gm-style-iw" ).prev().children('*:nth-child(4)').css({
			// 'background-color':'#86A0D7',
			'top':'15px',
			'background-color':'rgba(0,0,0,0)',
			'background': "url\(\"/static/img/chat_bubble_green.png\"\)",
        	'background-size': '70%',
        	'background-position': 'center',
        	'background-repeat': 'no-repeat'
			}
		);
		$( ".gm-style-iw" ).prev().children('*:nth-child(2)').css({
			'background-color':'rgba(0,0,0,0)',
		})
		$( ".gm-style-iw" ).prev().children('*:nth-child(3)').children().css({
			'height':'0px',
			'background-color':'rgba(0,0,0,0)'
		});
		$( ".gm-style-iw" ).prev().children('*:nth-child(3)').children().children().css({
			'height':'0px',
			'background-color':'rgba(0,0,0,0)'
		});
	}, 100);
}