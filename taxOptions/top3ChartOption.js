var top3ChartOption = {
    title:{
        // text: '创业公司月度税收增长趋势图',
        subtext: '单位：万元',
        left: 'left',
        top:8,
        subtextStyle: {
            color: "#DEF1FF", 
            fontSize: 16
        },  
    },
    grid:{
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
        data: ['全口径税收', '单月增幅', '累计增幅'],
        right:20,
        top:15,
        textStyle:{
            fontSize: 14,//字体大小
            color: '#DEF1FF'//字体颜色
        },
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                show:false,
            },
            axisTick: {
                show:false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14,//字体大小
                }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            // name: '水量',
            min: -10000,
            max: 50000,
            interval:Math.ceil(60000 / 6),  // 间距等分为10等分
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
            // name: '温度',
            min: -250,
            max: 350,
            interval:Math.ceil(600 / 6),  // 间距等分为10等分
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
            }
        }
    ],
    series: [
        {
            name: '全口径税收',
            type: 'bar',
            data: [11404.97,6711.31,1844,7176,2027,298,4300,1895,2500,9800,4100,5988],
            barWidth : 22,//柱图宽度
            itemStyle:{
                normal:{
                    color:"#18EBF3"
                }
            }
        },
        {
            name: '单月增幅',
            type: 'line',
            yAxisIndex: 1,
            data: [-24,-18.30,-74.6,-79,-57.8,-53.3,-28.4,-23.2,15.80,36.10,-37.90,-16.80],
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
            data: [-24,-21.50,-35.7,-22.30,-25.90,-27.10,-22.70,-22.90,-20.90,-15.60,-19.80,-15.30],
            itemStyle:{
                normal:{
                    color:"#18B3F0"
                }
            }
        }
    ]
};
