// configure for module loader
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

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
var axis = [1,2,3,4,5,6,7,8,9,10];

var data_h = (function (){
    var res = [];
    var len = 10;
    while (len--) {
        res.push(30 + Math.round(Math.random() * 10));
    }
    return res;
})();
var data_l = (function (){
    var res = [];
    var len = 10;
    while (len--) {
        res.push(Math.round(Math.random() * 30));
    }
    return res;
})();
require(
    [
        'echarts',
        'echarts/chart/bar',
        'echarts/chart/line' // require the specific chart type
    ],
    function (ec) {
        // Initialize after dom ready
        myChart = ec.init(document.getElementsByClassName('speed')[0]); 
        myChart2 = ec.init(document.getElementsByClassName('rpm')[0]); 
        myChart3 = ec.init(document.getElementsByClassName('fuel')[0]); 
        
        var option = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['車速']
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : axis
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value}'
                        }
                    }
                ],
                series : [
                    {
                        name:'車速',
                        type:'line',
                        data: data_h,
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        },
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {color:'#72a2c0', type: 'default'}, lineStyle:{width:5, color:'#1d65a6'}}},
                        symbolSize:0
                    }
                ],
                grid: {
                    borderWidth:0,
                    x:60,
                    y:45,
                    x2:40,
                    y2:60
                }
            };
        myChart.setOption(option); 
        myChart2.setOption(option); 
        myChart3.setOption(option); 
    }
);