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
 */});

var scriptText = heredoc(function(){/*
	$(document).ready(function() {
		locate('class', 'location_map');
		drawBar1('id', 'bar_border');
		drawBar2('id', 'bar_blank');
		drawBar3('id', 'bar_content');
	})
 */});

$(document).ready(function() {
	$('<div>').attr('class', 'otherinfo').css({
		'position': 'absolute',
		'height': '5%',
		'width': '100%',
	}).appendTo('.subcontent');
	$('<span>').attr('class', 'vipinfo').css({
		'margin-right':'2%',
		'padding':'5px',
		'box-shadow': '1px 1px 2px 0 rgba(0, 0, 0, 0.2), 2px 2px 5px 0 rgba(0, 0, 0, 0.19)',
		'background': '#ddd',
		'color': '#333',
	}).html('累積里程數：200 km').appendTo('.otherinfo');
	$('<span>').attr('class', 'vipinfo').css({
		'margin-right':'5%',
		'padding':'5px',
		'box-shadow': '1px 1px 2px 0 rgba(0, 0, 0, 0.2), 2px 2px 5px 0 rgba(0, 0, 0, 0.19)',
		'background': '#ddd',
		'color': '#333',
	}).html('油耗狀態：10 km/L').appendTo('.otherinfo');
	$.each(['bar_border','bar_blank','bar_content'], function(idx, e){
		$('<div>').attr({'class':'bar_canvas', 'id':e}).css({
			'position': 'absolute',
			'top' :'5%',
			'height': '50%',
			'width': '100%',
		}).appendTo('.subcontent');
	});
	$('<div>').attr('class', 'location_map').css({
		'position': 'relative',
		'top': '55%',
		'height': '45%',
		'width': '100%',
	}).appendTo('.subcontent');
	$('<style>').html(styleText).appendTo('body');
	$('<script>').html(scriptText).appendTo('body');
});