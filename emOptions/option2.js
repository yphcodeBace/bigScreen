var option2 = {
    color:['#4F81BD'],
    grid:{
        bottom:30,
        right:30,
    },
    title: {
        text: '企业营收规模分布情况',
        // subtext: '单位：家',
        left: 'left'
    },
    xAxis: {
        type: 'category',
        data: ['50万以下', '50万-500万', '500万-3亿', '3亿以上'],
        axisLine: {
            // show:false,
        },
        axisTick: {
            show:false,
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show:false,
        },
        axisTick: {
            show:false,
        },
        splitLine: {
            show:false,
        }
    },
    series: [{
        data: [120, 200, 150, 80],
        itemStyle: {
			normal: {
				label: {
					show: true, //开启显示
					position: 'top', //在上方显示
					textStyle: { //数值样式
						color: 'black',
				// 		fontSize: 16
					}
				}
			}
		},
        type: 'bar',
        barWidth : 30,//柱图宽度
        // showBackground: true,
        // backgroundStyle: {
            // color: 'rgba(220, 220, 220, 0.8)'
        // }
    }]
};