var yueduOption1 = {
    // backgroundColor:'black',
    // color:['#4F81BD'],
    title: {
        // text: '税收金额变化趋势',
        subtext: '单位：亿元',
        left: 'left',
        top: 0,
        subtextStyle: {
            color: "#DEF1FF", 
            fontSize: 16,
            // top: 30,
        }, 
    },
    grid:{
        top:60,
        left:60,
        right:60,
        bottom:30,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['税收金额', '增幅', '累计增幅'],
        top: 10,
        right: 0,
        textStyle:{
            fontSize: 14,//字体大小
            color: '#DEF1FF'//字体颜色
        },
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14,//字体大小
                }
            },
            axisLine: {
                show:false,
            },
            axisTick: {
                show:false,
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            // name: '水量',
            min: -1000,
            max: 49000,
            interval:Math.ceil(50000 / 5),  // 间距等分为10等分
            splitNumber: 7,
            axisLabel: {
                formatter: '{value}',
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14,//字体大小
                }
            },
            axisLine: {
                show:false,
            },
            axisTick: {
                show:false,
            },
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                },
                show:true //隐藏或显示
            },
        },
        {
            type: 'value',
            // name: '%',
            min: -150,
            max: 250,
            interval: Math.ceil(400 / 5),  // 间距等分为10等分
            // splitNumber: 7,
            // max: 25,
            // interval: 5,
            axisLabel: {
                formatter: '{value}%',
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14,//字体大小
                }
            },
            axisLine: {
                show:false,
            },
            axisTick: {
                show:false,
            },
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                },
                show:true //隐藏或显示
            },
        }
    ],
    series: [
        {
            name: '税收金额',
            type: 'bar',
            data: [42254,17885,16743.12,15812,9300,31691,20100,14000,9866,21400,15000,-2823],
            barWidth : 16,//柱图宽度
            itemStyle:{
                normal:{
                    color:"#18EBF3"
                }
            }
        },
        {
            name: '增幅',
            type: 'line',
            yAxisIndex: 1,
            data: [41.4,-29.8,52.7,-42.3,-58.8,210,-6.5,106,30.3,44.6,-5,-129],
            itemStyle:{
                normal:{
                    color:"#FCB92A"
                }
            }
        },
        {
            name: '累计增幅',
            type: 'line',
            yAxisIndex: 1,
            data: [41.4,8.5,15.9,-1.1,-12.3,56.1,46,48.9,47.9,47.6,56.7,24.7],
            itemStyle:{
                normal:{
                    color:"#18B3F0"
                }
            }
        }
    ]
};