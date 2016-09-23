Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        var simpleDate = new Date (currentDate).toLocaleDateString();
        dateArray.push(simpleDate.slice(5) + '\n' + simpleDate.slice(0,4));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

var date_start = new Date(2016, 7, 3);
var date_end = new Date(2016, 8, 2);
var input_date = getDates(date_start,date_end);
var input_value = [];
var average = 0;
for (var i = 0; i < input_date.length; i++){
    var speed = 40 + parseInt(Math.random()*91);
    var n = input_value.length;
    average = average * n / (n+1) + speed / (n+1) ;
    input_value.push(speed);
}

// use
function drawLine(type, target, date, value, unit){
    if (type===undefined){type='class'};
    if (target===undefined){target='canvas'};
    if (date===undefined){date=input_date};
    if (value===undefined){value=input_value};
    if (unit===undefined){unit='km/h'};
    // Initialize after dom ready
    if (type=='class') {
        var myChart = echarts.init(document.getElementsByClassName(target)[0]); 
    }else if(type=='id'){
        var myChart = echarts.init(document.getElementById(target));
    }else{
        console.log('Type is not define.');
    }
    var option = {
            backgroundColor:'#e6e6e6',
            tooltip : {
                trigger: 'axis'
            },
            // legend: {
            //     data:['平均車速']
            // },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : date
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ' + unit
                    }
                }
            ],
            series : [
                {
                    name:'平均車速',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {color:'#72a2c0', type: 'default'}, lineStyle:{width:5, color:'#1d65a6'}}},
                    data: value,
                    markPoint : {
                        itemStyle:{
                            normal:{
                                color:'#FF5803'
                            }
                        },
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        lineStyle:{
                            normal:{
                                color:'#FF5803'
                            }
                        },
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

    // Load data into the ECharts instance 
    myChart.setOption(option); 
}