Date.prototype.customFormat = function(formatString){
  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
  YY = ((YYYY=this.getFullYear())+"").slice(-2);
  MM = (M=this.getMonth()+1)<10?('0'+M):M;
  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
  DD = (D=this.getDate())<10?('0'+D):D;
  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
  th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
  h=(hhh=this.getHours());
  if (h==0) h=24;
  if (h>12) h-=12;
  hh = h<10?('0'+h):h;
  hhhh = hhh<10?('0'+hhh):hhh;
  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
  mm=(m=this.getMinutes())<10?('0'+m):m;
  ss=(s=this.getSeconds())<10?('0'+s):s;
  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};

function extractPathAndDate(json, adj){
    var tmpPathList = [];
    var tmpTimeList = [];
    var tmpCarList = [];
    var counter = 0;
    $.each(json, function(index, el) {
        var tmpPath = {};
        tmpPath['lat'] = el['event_lat'];
        tmpPath['lng'] = el['event_lon'];
        tmpPathList.push(tmpPath);
        var tmpTime = new Date(el['event_time'])
        if (index % 15 != 0 && adj == true) {
            counter = counter < 14 ? counter + 1 : 1;
            tmpTime.setSeconds(tmpTime.getSeconds() + counter);
        }
        tmpTimeList.push(tmpTime.customFormat("#hhhh#:#mm#:#ss#"));
        var tmpCar = {};
        tmpCar['speed'] = parseInt(el['avg_speed']);
        tmpCar['rpm'] = parseInt(el['rpm']);
        tmpCar['fuel'] = parseFloat(el['avg_fuel_store']).toFixed(2);
        tmpCarList.push(tmpCar);
    });
    return {travelPath: tmpPathList, timeRecord: tmpTimeList, carRecord: tmpCarList};
};

function extractData(json){
	var dateList = [];
	var data1 = [];
	var data2 = [];
	$.each(json, function(idx, e){
		dateList.push(new Date(e[0]).customFormat('#YYYY#/#MM#/#DD#'));
		data1.push(parseFloat(e[1]).toFixed(2));
		data2.push(parseFloat(e[2]).toFixed(2));
	});
	return {date: dateList, d1: data1, d2: data2};
}
// console.log(extractData(speedLine));
// $(document).ready(function(){
	// travelInput = extractPathAndDate(travelJson, true);
	// console.log(carStatusJson);
// });