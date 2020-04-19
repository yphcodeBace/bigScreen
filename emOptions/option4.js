var option4 = {
    color:['#4F81BD'],
    grid:{
        bottom:30,
        right:30,
    },
    title: {
        text: '企业人员规模分布情况',
        subtext: '单位：人',
        left: 'left'
    },
    xAxis: {
        type: 'category',
        data: ['20人以下', '20-50人', '50-100人', '100-500人', '500以上'],
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
        data: [320, 22, 6, 3, 50],
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