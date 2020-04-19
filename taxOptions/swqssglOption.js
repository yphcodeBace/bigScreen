var swqssglOption = {
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
        right:10,
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
        data: ['2018年', '2019年'],
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
            data: ['创业公司', '企业服务中心', '北斗基地'],
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
            max: 25,
            interval:Math.ceil(25 / 5),  // 间距等分为10等分
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
        // {
        //     type: 'value',
        //     // name: '%',
        //     min: 0,
        //     max: 50,
        //     interval: Math.ceil(50 / 5),  // 间距等分为10等分
        //     // splitNumber: 7,
        //     // max: 25,
        //     // interval: 5,
        //     axisLabel: {
        //         formatter: '{value}%',
        //         show: true,
        //         textStyle: {
        //             color: '#ffffff',
        //             fontSize: 14,//字体大小
        //         }
        //     },
        //     axisLine: {
        //         show:false,
        //     },
        //     axisTick: {
        //         show:false,
        //     },
        //     splitLine :{    //网格线
        //         lineStyle:{
        //             type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
        //         },
        //         show:true //隐藏或显示
        //     },
        // }
    ],
    series: [
        {
            name: '2018年',
            type: 'bar',
            data: [6.48,11.59,1.03],
            barWidth : 22,//柱图宽度
            itemStyle:{
                normal:{
                    color:"#18EBF3"
                }
            }
        },
        {
            name: '2019年',
            type: 'bar',
            // yAxisIndex: 1,
            data: [5.49,18.95,0.91],
            barWidth : 22,//柱图宽度
            itemStyle:{
                normal:{
                    color:"#FFB040"
                }
            }
        }
    ]
};