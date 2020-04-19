var option1 = {
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
        left:30,
        right:40,
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
        data: ['税收金额', '增幅'],
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
            data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
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
            min: 0,
            max: 30,
            interval:Math.ceil(30 / 5),  // 间距等分为10等分
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
            min: 0,
            max: 50,
            interval: Math.ceil(50 / 5),  // 间距等分为10等分
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
            data: [10.23,15.1,16.33,19.1,25.35],
            barWidth : 22,//柱图宽度
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
            data: [0,50,6.67,19.38,24.70],
            itemStyle:{
                normal:{
                    color:"#FCB92A"
                }
            }
        }
    ]
};