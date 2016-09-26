function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
};
var carStyleText = heredoc(function(){/*
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

var carScriptText = heredoc(function(){/*
	$(document).ready(function() {
		locate('class', 'location_map', '/Users/fan/anaconda/bin/Django/ab101GroupProject/indexHome/static/img/markers/CarMarker.png');
		drawBar1('id', 'bar_border');
		drawBar2('id', 'bar_blank');
		drawBar3('id', 'bar_content');
	})
 */});
function createCarStatus(tag, json) {
	if (json===undefined){json=carStatusJson};
	$('<div>').attr('class', 'otherinfo').css({
		'position': 'absolute',
		'height': '5%',
		'width': '100%',
	}).appendTo(tag);
	$.each(['累積里程數：'+json['all_total_mileage'].toFixed(0)+' km',
	 		'油耗狀態：'+json['avg_fuel_store'].toFixed(2)+' km/L',
	  		'資料更新時間：'+ new Date(json['event_time']).customFormat('#YYYY#/#MM#/#DD# #hhhh#:#mm#:#ss#')
		],function(idx,e){
			$('<span>').attr('class', 'vipinfo').css({
				'margin-right':'2%',
				'padding':'5px',
				'box-shadow': '1px 1px 2px 0 rgba(0, 0, 0, 0.2), 2px 2px 5px 0 rgba(0, 0, 0, 0.19)',
				'background': '#ddd',
				'color': '#333',
			}).html(e).appendTo('.otherinfo');
	})
	$.each(['bar_border','bar_blank','bar_content'], function(idx, e){
		$('<div>').attr({'class':'bar_canvas', 'id':e}).css({
			'position': 'absolute',
			'top' :'5%',
			'height': '50%',
			'width': '100%',
		}).appendTo(tag);
	});
	$('<div>').attr('class', 'location_map').css({
		'position': 'absolute',
		'top': '55%',
		'height': '45%',
		'width': '100%',
	}).appendTo(tag);
	$('<style>').html(carStyleText).appendTo('body');
	$('<script>').html(carScriptText).appendTo('body');
};