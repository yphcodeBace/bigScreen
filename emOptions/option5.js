var option5 = {
    // color:['#4F81BD'],
    title: {
        // text: '企业复工情况统计',
        // subtext: '单位：',
        // left: 'left'
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
        data: ['新增复工', '累计复工'],
        top: 10,
        textStyle:{
            fontSize: 14,//字体大小
            color: '#DEF1FF'//字体颜色
        },
    },
    grid:{
        top:50,
        bottom:30,
        left:40,
        right:50,
    },
    xAxis: [
        {
            type: 'category',
            data: ['4/9', '4/10', '4/11', '4/12', '4/13', '4/14', '4/15'],
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
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            // name: '水量',
            min: 0,
            max: 150,
            interval:Math.ceil(150 / 5),  // 间距等分为10等分
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
            }
        },
        {
            type: 'value',
            // name: '温度',
            min: 1000,
            max: 6000,
            interval: Math.ceil(5000 / 5),  // 间距等分为10等分
            // splitNumber: 7,
            // max: 25,
            // interval: 5,
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
            }
        }
    ],
    series: [
        {
            name: '新增复工',
            type: 'bar',
            data: [15,23,50,120,11,23,34],
            barWidth : 22,//柱图宽度
            itemStyle:{
                normal:{
                    color:"#18EBF3"
                }
            }
        },
        {
            name: '累计复工',
            type: 'line',
            yAxisIndex: 1,
            data: [5000,5015,5038,5088,5208,5219,5242],
            itemStyle:{
                normal:{
                    color:"#FCB92A"
                }
            }
        }
    ]
};
