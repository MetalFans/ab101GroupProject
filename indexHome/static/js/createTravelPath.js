function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
};
var styleText = heredoc(function(){/*
	html, body{
	    margin: 0px;
	    padding: 0px;
	    min-width: 100%;
	    width: 100%;
	    max-width: 100%;
	    min-height: 100%;
	    height: 100%;
	    max-height: 100%;
	}
	img[src="https://maps.gstatic.com/mapfiles/api-3/images/mapcnt6.png"] {
	    display: none;
	}
	div[style="overflow: auto;"]{
		text-align: left;
	}
 */});

var scriptText = heredoc(function(){/*
	$(document).ready(function() {
		var infoBubble = '/Users/fan/anaconda/bin/Django/ab101GroupProject/indexHome/static/img/chat_bubble_green.png';
		var carMarker = '/Users/fan/anaconda/bin/Django/ab101GroupProject/indexHome/static/img/markers/CarMarker.png';
		initialize('class',targetList=['travel_speed','travel_rpm','travel_fuel','travel_map'],travelInput, infoBubble, carMarker);
	})
 */});

$(document).ready(function() {
	$('<div>').attr('class','travel_map').css({
		'height': '100%',
		'width': '50%',
		'display': 'inline-block',
	}).appendTo('.subcontent');
	$('<div>').attr('class','travel_dynamic_data').css({
		'margin':'0px',
		'background': '#2c2c2c',
		'height': '100%',
		'width': '49%',
		'border-left': '1px solid #eee',
		'display': 'inline-block',
	}).appendTo('.subcontent');
	var topAdj = 0
	$.each(['travel_speed','travel_rpm','travel_fuel'], function(idx, e){
		$('<div>').attr('class',e).css({
			'position': 'absolute',
			'top': topAdj +'%',
			'height':  100/3 + '%',
			'width': '49%',
		}).appendTo('.travel_dynamic_data');
		topAdj += 100/3;
	});
	$('<style>').html(styleText).appendTo('body');
	$('<script>').html(scriptText).appendTo('body');
});