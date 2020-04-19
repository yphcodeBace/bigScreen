//弹框饼图数据   
var loadPie_modal_data01 = [{
    value: 4081.72, name: '新设',
},{
    value: 2056.36, name: '增资',
},{ 
    value: 371.89, name: '迁址',
}];
var loadPie_modal_data02 = [{
    value: 5068.94, name: '内资',
},{
    value: 1425.97, name: '外资',
}];
$(window).resize(function () {
    window.location.reload();
});
$(document).ready(function(){
    loadPie_circle("checkChart_pie", "106.6%", '#FFB040');
    loadPie_circle("workChart_pie", "102.5%", '#20E8CE');
    loadPie_circle_radius("checkChart_sale_pie");
    loadBar("businessChart_bar");
    loadLine("chart_line");
    $('.more').on('click', function(){
        layer.open({
            type: 1,
            shade: 0.6,
            area: ['680px'],
            content: $('#moreCharts'), //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
            success:function(){  
                loadPie_modal("chartPie_type", loadPie_modal_data01);
                loadPie_modal("chartPie_mode", loadPie_modal_data02);
                swiper(); 
            }
        });
    })
})
//轮播
function swiper(){
    var mySwiper = new Swiper ('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //     delay: 1500,
        //     speed: 30000,
        // },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents: true//修改swiper的父元素时，自动初始化swiper 
    })  
};
// 饼图弹框
function loadPie_modal(elementId, data){
    var total = 0;
    for(var i=0;i<data.length;i++){
        total +=data[i].value;
    }
    var option = {
        title: {
            text: total,
            textStyle: {
                fontSize: 18,
                color: '#fff',
            },
            subtext: '总金额',
            subtextStyle: {
                fontSize: 14,
                color: '#fff',
                // align: 'center',
            },
            textAlign: 'center',
            left: '29%',
            top: '45%'
        },
        legend: {
            orient: 'vertical',
            right: '15%',
            top: 'middle',
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 20,
            icon: 'circle',
            formatter: function (name) {
                var val, percent;
                for (var i = 0, l = data.length; i < l; i++) {
                    if (data[i].name == name) {
                        val = data[i].value;
                        percent = (data[i].value/total*100).toFixed(2)
                    }
                }
                var arr = [
                    '{a| '+ name+' }',
                    '{b|'+val+'}'+'\n',
                    '{c|金额占比：'+percent+'%}',
                ]
                return arr;
            },
            textStyle:{
                rich:{
                    a:{
                        fontSize: 14,
                        color: '#fff',
                        verticalAlign:'top',
                    },
                    b:{
                        fontSize: 16,
                        color: '#01FFFC',
                    },
                    c:{
                        fontSize: 12,
                        color: '#fff',
                        lineHeight: 26,
                    }
                }
            },
            itemGap: 30,
            padding: 10,
            // textStyle: {
            //     fontSize: 14,
            //     color: '#fff',
            // }
        },
        grid: {
            top: '0',
        },
        color:['#5ce3e4', '#f9ba40','#ee704a'],
        series: [
            {
                type: 'pie',
                center: ['30%', '50%'],
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                data: data,
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false, //开启显示
                            position: 'inside', //在上方显示
                            textStyle: { //数值样式
                                //color: 'black',
                                //fontSize: 16,
                            },
                            formatter: '{c}%'
                        }
                    }
                },
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(elementId));
    myChart.setOption(option, true);
};
// 环形
function loadPie_circle(elementId, title, color) {
    var option = {
        title: {
            text: title,
            textStyle: { color: color, fontSize: 14, fontWeight: 'normal' },
            left: 'center',
            top: 'center'
        },
        grid: {
            top: '0',
        },
        series: [
            {
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['68%', '80%'],
                hoverAnimation: false,
                avoidLabelOverlap: false,
                color: color,
                data: [ 
                    {value: 335, name: '目标未完成'},
                    {value: 100, name: '目标完成'}
                ],
                itemStyle: {
                    normal: {
                        /*color: "rgba(30,144,255,0.8)",*/
                        label: {
                            show: false, //开启显示
                            position: 'inside', //在上方显示
                            textStyle: { //数值样式
                                //color: 'black',
                                //fontSize: 16,
                            },
                            formatter: '{c}%'
                        }
                    }
                },
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(elementId));
    myChart.setOption(option, true);
}
// 环形圆角
function loadPie_circle_radius(elementId) {
    var option = {
        title: {
        text: '75.23%',
        textStyle: {
        color: '#01FFFC',
            fontSize: 18,
            fontWeight: 'normal'
        },
        subtext: '考核目标完成',
        subtextStyle: {
            color: '#fff',
        },
        itemGap: 2, // 主副标题距离
        left: 'center',
        top: '40%'
    },
    angleAxis: {
        max: 100, // 满分
        clockwise: false, // 逆时针
        // 隐藏刻度线
        axisLine: {
        show: false
        },
        axisTick: {
        show: false
        },
        axisLabel: {
        show: false
        },
        splitLine: {
        show: false
        }
    },
    radiusAxis: {
        type: 'category',
        // 隐藏刻度线
        axisLine: {
        show: false
        },
        axisTick: {
        show: false
        },
        axisLabel: {
        show: false
        },
        splitLine: {
        show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: ['60%','95%']
    },
    series: [{
        type: 'bar',
        data: [{
        name: '作文得分',
        value: 75,
        itemStyle: {
            normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: '#aaf14f'
            }, {
                offset: 1,
                color: '#0acfa1'
            }])
            }
        },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15,
        barGap: '-100%', // 两环重叠
        z: 2,
    },{ // 灰色环
        type: 'bar',
        data: [{
        value: 100,
        itemStyle: {
            color: '#004b72',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 5,
            shadowOffsetY: 2
        }
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15,
        barGap: '-100%', // 两环重叠
        z: 1
    }]
    };
    var myChart = echarts.init(document.getElementById(elementId));
    myChart.setOption(option, true);
}
// 柱状图
function loadBar(elementId){
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            right: 0,
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            right: 0,
            bottom: 30,
        },
        xAxis: [
            {
                type: 'category',
                data: ['国展', '北斗', '绿地虹桥', '中建', '东隆大厦', '同联'],
                axisLine: {
                    lineStyle: {
                        type: 'dotted',
                        color: '#41C4F7',//左边线的颜色
                        width:'1',//坐标线的宽度
                        opacity: 0.3
                    }
                },
                 axisLabel: {
                    interval: 0,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                    },
                axisTick: {
                    show: false,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        width: 0,
                    }
                },
                 axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                    },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: '#41C4F7',
                        width: 1,
                        type: 'dotted',
                        opacity: 0.3,
                    }
            　　},
            }
        ],
        series: [
            {
                name: '餐饮',
                type: 'bar',
                barWidth: 10,
                color: '#209EFF',
                data: [18647, 8647, 1647, 1847, 6147, 3447],
            },{
                name: '社零',
                type: 'bar',
                barWidth: 10,
                color: '#01FFD8',
                data: [2341, 3421, 922, 834, 2342, 2345],
            },{
                name: '其它',
                type: 'bar',
                barWidth: '10',
                color: '#FFB040',
                data: [232, 713, 444, 349, 3310, 3423],
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(elementId));
    myChart.setOption(option, true);
}

// 堆积柱状图
function loadBar_ver(elementId){
    var data1 = [320, 332, 301, 334, 390, 330];		//分类一
    var data2 = [1220, 1392, 1010, 134, 90, 230];		//分类二
    var data3 =[2120, 1182, 1191, 2234, 2290, 330];		//分类三
    //总计
    var total_data = function () {
        var datas = [];
        for (var i = 0; i < data1.length; i++) {
            datas.push(data1[i] + data2[i]+data3[i]);
        }
        return datas;
    }();
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['餐饮', '社零', '其他'],
            itemWidth: 10,
            itemHeight: 10,
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '40',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['国展', '北斗', '绿地虹桥', '中建', '东隆大厦', '同联']
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
            }
        ],
        series: [
            {
                name: '餐饮',
                type: 'bar',
                stack: '商业',
                barWidth: 25,
                data: data1,
            },
            {
                name: '社零',
                type: 'bar',
                stack: '商业',
                data: data2,
            },
            {
                name: '其他',
                type: 'bar',
                stack: '商业',
                data: data3,
            },
            {
                name: '总计',
                type: 'line',
                lineStyle:{
                    opacity : 0,
                    width: 0,
                },
                label: {
                    normal: {
                        offset: ['40', '80'],
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        textStyle: {
                            color: '#02FCFA'
                        }
                    }
                },
                data: total_data
            },
        ]
    };
    var myChart = echarts.init(document.getElementById(elementId));
    myChart.setOption(option, true);
}
// 折线图
function loadLine(elementId){
    var option = {
        title: {
            subtext: '单位:万美元',
            left: 0,
            top: '-10px',
            subtextStyle: {
                fontSize: 10,
                color: '#DEF1FF',
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['合同外资', '实到外资'],
            right: 0,
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            top: 30,
            bottom: 20,
            // left: 0,
            right: 0,
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', ' 10月', '11月', '12月'],
            axisLine: {
                lineStyle: {
                    type: 'dotted',
                    color: '#41C4F7',//左边线的颜色
                    width:'1',//坐标线的宽度
                    opacity: 0.3
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
            },
            axisTick: {
                show: false,
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    width: 0,
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                 },
            },
            splitLine: {
                show: true,
                lineStyle:{
                    color: '#41C4F7',
                    width: 1,
                    type: 'dotted',
                    opacity: 0.3,
                }
        　　},
        },
        series: [
            {
                name: '合同外资',
                type: 'line',
                symbol:'circle',
                color: '#FFF100',
                data: [86.15, 565.43, 1010.1, 1060.59, 153.19, 81.7, 830.74, 107.27, 214.53, 2084.81, 242.73, 0]
            },
            {
                name: '实到外资',
                type: 'line',
                symbol:'circle',
                color: '#1EF7FF',
                data: [6.15, 65.43, 110.1, 160.59, 53.19, 81.7, 83.74, 17.27, 24.53, 284.81, 24.73, 34]
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(elementId));
    myChart.setOption(option, true);
}

/**
 * 定时竖向滚动
 * @param id
 * @param times
 */
function timmerScrollDown() {
    $(".scroll-div").each(function () {
        var bxHeight = $(this).height();
        var bxScrollHeight = $(this)[0].scrollHeight
        var maxBottom = bxScrollHeight - bxHeight;
        var jObj = $(this)
        setInterval(function () {
            var bxTop = jObj.scrollTop();
                if (bxTop + 2 >= maxBottom) {
                    setTimeout(function () {
                        jObj.scrollTop(0)
                    }, 2000)
                } else {
                    jObj.scrollTop(bxTop + 2)
                }
        }, 500)
    });
}

setTimeout(function () {
    timmerScrollDown();
}, 3000)

