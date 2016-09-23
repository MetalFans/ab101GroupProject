// var input_label = ['里程數','油耗狀態','電瓶狀態','引擎負載狀態','水箱溫度','燃油壓力','引擎轉速','進氣岐管壓力','進氣溫度','空氣流量'];
// var input_value = [100, 10, 10, 32, 130, 100, 1000, 60, 50, 30];
// var input_unit = ['km', 'km/L', 'V', '%', '°C', 'kPa', 'rpm', 'kPa', '°C', 'g/s'];
// var input_value_max = [1000, 25, 16, 100, 130, 300, 7000, 300, 60, 300];

// var colorList = [
//   'rgba(89,67,70,0.8)','rgba(33,32,39,0.8)','rgba(215,84,4,0.8)','rgba(141,47,35,0.8)','rgba(240,139,51,0.8)',
//    'rgba(163,88,109,0.8)','rgba(92,74,114,0.8)','rgba(86,30,24,0.8)','rgba(193,64,61,0.8)','rgba(138,44,2,0.8)'
// ];

var input_label = ['電瓶狀態','引擎負載狀態','水箱溫度','燃油壓力','引擎轉速','進氣岐管壓力','進氣溫度','空氣流量'];
var input_value = [10, 32, 130, 100, 1000, 60, 50, 30];
var input_unit = ['V', '%', '°C', 'kPa', 'rpm', 'kPa', '°C', 'g/s'];
var input_value_max = [16, 100, 130, 300, 7000, 300, 60, 300];
var mileage = 500;
var last_fuel = 10;
// 1,2,4,7,5,3,6,8
var colorList = ['rgba(240,139,51,0.8)','rgba(215,84,4,0.8)','rgba(193,64,61,0.8)','rgba(138,44,2,0.8)',
'rgba(141,47,35,0.8)','rgba(163,88,109,0.8)','rgba(86,30,24,0.8)','rgba(92,74,114,0.8)'
];


function drawBar1(type, target,label, value, unit, max){
    if (type===undefined){type='id'};
    if (target===undefined){target='border'};
    if (label===undefined){label=input_label};
    if (value===undefined){value=input_value};
    if (unit===undefined){unit=input_unit};
    if (max===undefined){max=input_value_max};
    var input_value_normalized = label.map(function (e, i) {
        var tmp_v = value[i]/max[i] * 100;
        return tmp_v;
    });
    var reversed_value = input_value_normalized.map(function (e, i){
        return 100-e;
    });
    var input_title = label.map(function (e, i) {
        // return label[i] + '\n' + value[i] + ' ' + unit[i];
        return value[i] + ' ' + unit[i];
    });
    var input_max = label.map(function (e, i) {
        // return label[i] + '\n' + value[i] + ' ' + unit[i];
        return input_value_max[i] + ' ' + unit[i];
    });
            var labelIndex = -1;
            var colorIndex = -1;
            // Initialize after dom ready
            if (type=='class') {
                var myChart = echarts.init(document.getElementsByClassName(target)[0]); 
            }else if(type=='id'){
                var myChart = echarts.init(document.getElementById(target));
            }else{
                console.log('Type is not define.');
            }
            var option = {  
                    animation: false,  
                    // title: {
                    //     text: '累積里程數：' + mileage + ' KM' + ' '.repeat(8) +'最新油耗值：' + last_fuel + ' KM/L',
                    //     left:'7%',
                    //     textStyle:{
                    //         color: 'rgba(33,32,39,0.8)',
                    //         fontSize: 16,
                    //     },
                        // subtext: '\t'.repeat(21) + '資料更新時間: 2016/09/06',
                    // },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        borderWidth:0,
                        top:'10%',
                        bottom:'10%',
                        left:'0%',
                        right:'0%'
                    },
                    xAxis : [
                        {
                            type : 'category',
                            show: false,
                            data : input_label
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            show: false,
                            min: 0,
                            max: 100

                        }
                    ],
                    series : [
                        {
                            barGap:'40%',
                            type:'bar',
                            stack:'total',
                            itemStyle: {
                                normal: {
                                    barBorderRadius:8,
                                    color: function(e){
                                        return colorList[e.dataIndex];
                                    },
                                } 
                            },
                            label: {
                                normal:{
                                    show: true,
                                    position: 'bottom',
                                    formatter:'{b}',
                                    // textStyle:{
                                    //     color: function(e){
                                    //         return colorList[e.dataIndex];
                                    //     },
                                    // }
                                }
                            },
                            // data:reversed_value
                            // data:[0,0,0,0,0,0,0,0,0,0]
                            data:[0,0,0,0,0,0,0,0]
                        },
                        {
                            // barGap:'40%',
                            type:'bar',
                            stack:'total',
                            itemStyle: {
                                normal: {
                                    barBorderRadius:8,
                                    // barBorderWidth:6,
                                    // barBorderColor: 'tomato',
                                    color: function(e){
                                        return colorList[e.dataIndex];
                                    },
                                } 
                            },
                            label: {
                                normal:{
                                    show: true,
                                    position: 'top',
                                    formatter:function(e){
                                        return input_max[e.dataIndex];
                                    },
                                }
                            },
                            // data:reversed_value
                            // data:[100,100,100,100,100,100,100,100,100,100]
                            data:[100,100,100,100,100,100,100,100]
                        }
                    ]
                };
            // Load data into the ECharts instance 
            myChart.setOption(option); 
}

function drawBar2(type, target,label, value, unit, max){
    if (type===undefined){type='id'};
    if (target===undefined){target='empty'};
    if (label===undefined){label=input_label};
    if (value===undefined){value=input_value};
    if (unit===undefined){unit=input_unit};
    if (max===undefined){max=input_value_max};
    var input_value_normalized = label.map(function (e, i) {
        var tmp_v = value[i]/max[i] * 100;
        return tmp_v;
    });
    var reversed_value = input_value_normalized.map(function (e, i){
        return 100-e;
    });
    var input_title = label.map(function (e, i) {
        // return label[i] + '\n' + value[i] + ' ' + unit[i];
        return value[i] + ' ' + unit[i];
    });
            // Initialize after dom ready
            if (type=='class') {
                var myChart = echarts.init(document.getElementsByClassName(target)[0]); 
            }else if(type=='id'){
                var myChart = echarts.init(document.getElementById(target));
            }else{
                console.log('Type is not define.');
            }
            var option = {
                    animation: false,    
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        borderWidth:0,
                        top:'12%',
                        bottom:'12%',
                        left:'0%',
                        right:'0%'
                    },
                    xAxis : [
                        {
                            type : 'category',
                            show: false,
                            data : input_value_max
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            show: false,
                            min: 0,
                            max: 100

                        }
                    ],
                    series : [
                        {
                            // barGap:'40%',
                            type:'bar',
                            stack:'total',
                            barWidth:'69%',
                            itemStyle: {
                                normal: {
                                    barBorderRadius:6,
                                    // barBorderWidth:6,
                                    // barBorderColor: 'tomato',
                                    color: 'rgba(255,255,255,0.7)'
                                } 
                            },
                            // data:reversed_value
                            // data:[100,100,100,100,100,100,100,100,100,100]
                            data:[100,100,100,100,100,100,100,100]
                        },
                    ]
                };
            // Load data into the ECharts instance 
            myChart.setOption(option); 
}

function drawBar3(type, target,label, value, unit, max){
    if (type===undefined){type='id'};
    if (target===undefined){target='canvas'};
    if (label===undefined){label=input_label};
    if (value===undefined){value=input_value};
    if (unit===undefined){unit=input_unit};
    if (max===undefined){max=input_value_max};
    var input_value_normalized = label.map(function (e, i) {
        var tmp_v = value[i]/max[i] * 100;
        return tmp_v;
    });
    var reversed_value = input_value_normalized.map(function (e, i){
        return 100-e;
    });
    var input_title = label.map(function (e, i) {
        // return label[i] + '\n' + value[i] + ' ' + unit[i];
        return value[i] + ' ' + unit[i];
    });
            // Initialize after dom ready
            if (type=='class') {
                var myChart = echarts.init(document.getElementsByClassName(target)[0]); 
            }else if(type=='id'){
                var myChart = echarts.init(document.getElementById(target));
            }else{
                console.log('Type is not define.');
            }
            var option = {    
                    animationDuration: 2000,
                    tooltip : {
                        trigger: 'axis',
                        formatter: '{b}',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        borderWidth:0,
                        top:'11%',
                        bottom:'11%',
                        left:'0%',
                        right:'0%'
                    },
                    xAxis : [
                        {
                            type : 'category',
                            show: false,
                            data : input_title
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            show: false,
                            min: 0,
                            max: 100

                        }
                    ],
                    series : [
                        {   
                            // barGap:'40%',
                            type:'bar',
                            barWidth:'70%',
                            stack:'total',
                            itemStyle: {normal: {
                                barBorderRadius:6,
                                color: function(e){
                                        return colorList[e.dataIndex];
                                },
                                label: {
                                    show: true,
                                    position: 'insideTop',
                                    // position: 'bottom',
                                    formatter: '{b}'
                                }
                            }},
                            data:input_value_normalized,
                        }
                    ]
                };
            // Load data into the ECharts instance 
            myChart.setOption(option); 
}

