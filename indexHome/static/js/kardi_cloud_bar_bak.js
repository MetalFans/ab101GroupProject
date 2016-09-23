// configure for module loader
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

var input_label = ['里程數','油耗狀態','電瓶狀態','引擎負載狀態','水箱溫度','燃油壓力','引擎轉速','進氣岐管壓力','進氣溫度','空氣流量'];
var input_value = [100, 10, 10, 32, 130, 100, 1000, 60, 50, 30];
var input_unit = ['km', 'km/L', 'V', '%', '°C', 'kPa', 'rpm', 'kPa', '°C', 'g/s'];
var input_value_max = [1000, 25, 16, 100, 130, 300, 7000, 300, 60, 300];

var colorList = [
  'rgba(89,67,70,0.8)','rgba(33,32,39,0.8)','rgba(215,84,4,0.8)','rgba(141,47,35,0.8)','rgba(240,139,51,0.8)',
   'rgba(163,88,109,0.8)','rgba(92,74,114,0.8)','rgba(86,30,24,0.8)','rgba(193,64,61,0.8)','rgba(138,44,2,0.8)'
];

function drawBar(type, target,label, value, unit, max){
    if (type===undefined){type='class'};
    if (target===undefined){target='canvas'};
    if (label===undefined){label=input_label};
    if (value===undefined){value=input_value};
    if (unit===undefined){unit=input_unit};
    if (max===undefined){max=input_value_max};
    var input_value_normalized = label.map(function (e, i) {
        return value[i]/max[i] * 100;
    });
    var reversed_value = input_value_normalized.map(function (e, i){
        return 100-e;
    });
    var input_title = label.map(function (e, i) {
        return label[i] + '\n' + value[i] + ' ' + unit[i];
    });
    require(
        [
            'echarts',
            'echarts/chart/bar' // require the specific chart type
        ],
        function (ec) {
            // Initialize after dom ready
            if (type=='class') {
                var myChart = ec.init(document.getElementsByClassName(target)[0]); 
            }else if(type=='id'){
                var myChart = ec.init(document.getElementById(target));
            }else{
                console.log('Type is not define.');
            }
            var option = {    
                    title: {
                        text: '\t'.repeat(14) + '汽車現況',
                        subtext: '\t'.repeat(21) + '資料更新時間: 2016/09/06',
                    },
                    calculable : true,
                    grid: {
                        borderWidth: 0,
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
                            type:'bar',
                            stack:'total',
                            itemStyle: {normal: {
                                barBorderRadius:5,
                                color: function(params) {
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}'
                                }
                            }},
                            data:input_value_normalized,
                        },
                        // {
                        //     type:'bar',
                        //     stack:'total',
                        //     itemStyle: {
                        //         normal: {
                        //             barBorderRadius:0,
                        //             color:'#ddd',
                        //         } 
                        //     },
                        //     data:reversed_value
                        // }
                    ]
                };

            // Load data into the ECharts instance 
            myChart.setOption(option); 
        }
    );
}

