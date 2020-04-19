// 获取数据
var data = [
    {
        name:"绿地恺泰",
        zlyb:"56011.34",
        zlyj:"58399.56",
        YoY:"4.30%",
        scale:"23.00%"
    },{
        name:"中建孚泰",
        zlyb:"26208.79",
        zlyj:"30430.00",
        YoY:"16.10%",
        scale:"12.00%"
    },{
        name:"安踏集团",
        zlyb:"3439.00",
        zlyj:"20717.27",
        YoY:"502.40%",
        scale:"8.20%"
    },{
        name:"完美公司",
        zlyb:"14266.24",
        zlyj:"20249.22",
        YoY:"41.90%",
        scale:"8.00%"
    },{
        name:"中核建",
        zlyb:"861.50",
        zlyj:"16399.06",
        YoY:"1803.50%",
        scale:"6.50%"
    },{
        name:"南极电商",
        zlyb:"10742.28",
        zlyj:"14490.6",
        YoY:"34.90%",
        scale:"5.70%"
    },{
        name:"国展中心",
        zlyb:"14673.28",
        zlyj:"11968.13",
        YoY:"-18.40%",
        scale:"4.70%"
    },{
        name:"葛洲坝",
        zlyb:"206",
        zlyj:"10844.99",
        YoY:"5164.60%",
        scale:"4.30%"
    },{
        name:"弘阳集团",
        zlyb:"0",
        zlyj:"6375.71",
        YoY:"/",
        scale:"2.50%"
    },{
        name:"圆通集团",
        zlyb:"0",
        zlyj:"6189.03",
        YoY:"/",
        scale:"2.40%"
    },{
        name:"华峰集团",
        zlyb:"0",
        zlyj:"6095.8",
        YoY:"/",
        scale:"2.40%"
    },{
        name:"威马汽车",
        zlyb:"2651",
        zlyj:"5156.22",
        YoY:"94.50%",
        scale:"2.00%"
    },{
        name:"中电投",
        zlyb:"0",
        zlyj:"4796.38",
        YoY:"/",
        scale:"1.90%"
    },{
        name:"汇成集团",
        zlyb:"1474",
        zlyj:"4300.8",
        YoY:"191.80%",
        scale:"1.70%"
    },{
        name:"华测导航",
        zlyb:"5784.8",
        zlyj:"4154.52",
        YoY:"-28.20%",
        scale:"1.60%"
    },{
        name:"特步集团",
        zlyb:"4042.35",
        zlyj:"4013.66",
        YoY:"-0.70%",
        scale:"1.60%"
    },
];
$(document).ready(
    function() {
        drawCharts('chart1',option1);
        drawCharts('top3Chart',top3ChartOption);
        drawCharts('swqssglOption',swqssglOption);
        $('#template-box').html(template('tableData', { data: data }));
    }
)
//渲染图表
function drawCharts(id,option){
    var mychart = echarts.init(document.getElementById(id));
    mychart.setOption(option,true);
    //自适应屏幕变化
    setTimeout(function (){
        window.addEventListener('resize',function () {
	    	mychart.resize();
	    })
	},100)
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
            // console.log(bxTop);
            // console.log(jObj);
            // if (jObj.hasScrollBar()) {
                if (bxTop + 2 >= maxBottom) {
                    setTimeout(function () {
                        jObj.scrollTop(0)
                    }, 2000)
                } else {
                    jObj.scrollTop(bxTop + 2)
                }
            // }
        }, 500)
    });
}

setTimeout(function () {
    timmerScrollDown();
}, 3000)

// 点击事件
$('.ndOryd').click(function(){
    // console.log(222)
    $(this).addClass('active');
    $(this).siblings().removeClass("active");
    if($(this).html()=='年度'){
        drawCharts('chart1',option1);
    }else{
        drawCharts('chart1',yueduOption1);
    }
    // drawCharts('chart1',option1);
})
//公司的点击事件
$('.gs').click(function(){
    // console.log(222)
    $(this).addClass('active');
    $(this).siblings().removeClass("active");
    // $('.niandu').removeClass('active');
    // console.log(top3ChartOption);
    console.log($(this).html());
    if($(this).html()=='创业公司'){
        top3ChartOption.series[0].data=[11404.97,6711.31,1844,7176,2027,298,4300,1895,2500,9800,4100,5988];
        top3ChartOption.series[1].data=[-24,-18.30,-74.6,-79,-57.8,-53.3,-28.4,-23.2,15.80,36.10,-37.90,-16.80];
        top3ChartOption.series[2].data=[-24,-21.50,-35.7,-22.30,-25.90,-27.10,-22.70,-22.90,-20.90,-15.60,-19.80,-15.30];
    }else if($(this).html()=='企业服务中心'){
        top3ChartOption.series[0].data=[41274.74,39458.84,5340,14670.4,8790,30915.1,13900,14300,6900,11200,9600,-9849];
        top3ChartOption.series[1].data=[66.5,334.1,-34.4,34.1,136.3,256.4,-19,-16.9,46.8,67.2,11.6,-212.6];
        top3ChartOption.series[2].data=[66.55,137.3,105,90.2,93.3,114.6,86.7,87.2,88.6,90,84.5,63.5];
    }else{
        top3ChartOption.series[0].data=[1681.97,716,302,1038,940,478.2,1505,-9.7,480.4,418,1300,-3.4];
        top3ChartOption.series[1].data=[-29.2,-15.8,-77.5,19.9,27.4,-0.43,56.8,97.3,-36.7,-42.5,102,-100.5];
        top3ChartOption.series[2].data=[-29.2,8.7,-35.4,-23.6,-17.2,-20.4,-11.3,-6.8,-9.9,-14.7,-5.3,-11.6];
    }
    drawCharts('top3Chart',top3ChartOption);
})
