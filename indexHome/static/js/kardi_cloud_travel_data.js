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

function createData(n) {
    var result = [];
    for (var i = 1; i <= n; i++) result.push(i);
    return result;
}

var date_start = new Date(2016, 7, 3);
var date_end = new Date(2016, 8, 2);
var input_date = getDates(date_start,date_end);

var axis = ['','','','','','','','','','','','','','','','','','','',''] ;
var nameList = ['時速', '轉速', '油耗'];

function createValue(n, type){
    var res = [];
    var len = n;
    while (len--) {
        switch(type) {
            case '時速':
                res.push(30+Math.round(Math.random() * 20));
                break;
            case '轉速':
                res.push(1000+Math.round(Math.random() * 6000));
                break;
            default:
                res.push(5+Math.round(Math.random() * 20));
        }
    }
    return res;
};

function select(type, target){
    var tmp = {};
    if (type=='class') {
        tmp = document.getElementsByClassName(target)[0]; 
    }else if(type=='id'){
        tmp = document.getElementById(target);
    }else{
        console.log('Type is not define.');
    }
    return tmp
}
function dynamicCanvas(type, targetList,label, value, rpmMax, fuelAverage){
    if (type===undefined){type='class'};
    if (targetList===undefined){targetList=['speed','rpm','fuel','map']};
    if (label===undefined){label=nameList};
    if (value===undefined){value=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
    if (rpmMax===undefined){rpmMax=6000};
    if (fuelAverage===undefined){fuelAverage=10};
    speed = echarts.init(select(type, targetList[0])); 
    rpm = echarts.init(select(type, targetList[1])); 
    fuel = echarts.init(select(type, targetList[2]));  
    canvas = [speed, rpm, fuel];
    option = {
        title: {
            text: 'Text',
            textStyle:{
                color: '#eee'
            }
        },
        textStyle:{
            color: '#eee'
        },
        tooltip : {
            trigger: 'axis'
        },
        // legend: {
        //     data:[]
        // },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : axis,
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                }
            }
        ],
        visualMap:{
            show: false,
            pieces:[
                {
                    gt:0,
                    // lte:45,
                    color: '#00B2FF'
                },
                {
                    gt:10000,
                    // color: '#FF540D'
                }
            ]
        },
        series : [
            {
                name:'',
                type:'line',
                data: [],
                markLine : {
                    data : [
                        // {type : 'average', name: '平均值'}
                        {yAxis : 0, name: ''}
                    ]
                },
                smooth:true,
                itemStyle: {
                    normal: {
                        color: '#eee'
                    }
                },
                // areaStyle: {
                //     normal: {
                //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //             offset: 0,
                //             color: 'rgb(255, 158, 68)'
                //         }, {
                //             offset: 1,
                //             color: 'rgb(255, 70, 131)'
                //         }])
                //     }
                // },
                symbolSize:5,
                showSymbol:false,
                // animationEasing: 'backOut',
                animation:false
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
    optionList = [JSON.parse(JSON.stringify(option)), JSON.parse(JSON.stringify(option)), JSON.parse(JSON.stringify(option))];
    $.each(nameList, function(idx, item){
        // option.legend.data = [item];
        // option.title.text = item;
        // option.series[0].name = item;
        // option.series[0].data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        // canvas[idx].setOption(option);
        optionList[idx].title.text = item;
        optionList[idx].series[0].name = item;
        switch(item) {
            case '時速':
                delete optionList[idx].series[0].markLine;
                // optionList[idx].series[0].markLine.data[0].yAxis = 40;
                // optionList[idx].visualMap.pieces[0].lte = 40;
                // optionList[idx].visualMap.pieces[1].gt = 40;
                // optionList[idx].yAxis[0].axisLabel.formatter = '{value} km/h';
                break;
            case '轉速':
                optionList[idx].series[0].markLine.data[0].yAxis = 6000;
                optionList[idx].series[0].markLine.data[0].name = '臨界值';
                optionList[idx].visualMap.pieces[0].lte = 6000;
                optionList[idx].visualMap.pieces[1].gt = 6000;
                // optionList[idx].yAxis[0].axisLabel.formatter = '{value} RPM'
                break;
            default:
                optionList[idx].series[0].markLine.data[0].yAxis = 10;
                optionList[idx].series[0].markLine.data[0].name = '最近90天平均線';
                optionList[idx].visualMap.pieces[0].lte = 10;
                optionList[idx].visualMap.pieces[1].gt = 10;
                optionList[idx].visualMap.pieces[0].color = '#FF540D';
                optionList[idx].visualMap.pieces[1].color = '#00B2FF';
                // optionList[idx].yAxis[0].axisLabel.formatter = '{value} km/L'
        }
        optionList[idx].series[0].data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        canvas[idx].setOption(optionList[idx]);
    })
}