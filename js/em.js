// 获取数据
// ./emImgs/增幅箭头.png
// jt:"./emImgs/下跌箭头.png"
var data = [
    {
        num:"",
        num2:"./emImgs/第一名.png",
        name:"绿地恺泰",
        Amount:"56011.34",
        YoY:"4.3%",
        url:"./emImgs/绿地恺泰.png"
    },{
        num:"",
        num2:"./emImgs/第二名.png",
        name:"中建孚泰",
        Amount:"30430.00",
        YoY:"16.1%",
        url:"./emImgs/中建孚泰.png"
    },{
        num:"",
        num2:"./emImgs/第三名.png",
        name:"完美公司",
        Amount:"20717.27",
        YoY:"502.4%",
        url:"./emImgs/完美公司.png"
    },{
        num:"4",
        name:"中核建",
        Amount:"20249.22",
        YoY:"41.9%",
        url:"./emImgs/中核建.png"
    },{
        num:"5",
        name:"葛洲坝唯逸",
        Amount:"20249",
        YoY:"502%",
        url:"./emImgs/葛洲坝唯逸.png"
    },{
        num:"6",
        name:"南极电商",
        Amount:"20249",
        YoY:"30%",
        url:"./emImgs/南极电商.png"
    },{
        num:"7",
        name:"斐乐体育",
        Amount:"20249",
        YoY:"30%",
        url:"./emImgs/斐乐体育.png"
    },{
        num:"8",
        name:"国家会展中心",
        Amount:"20249",
        YoY:"30%",
        url:"./emImgs/国家会展中心.png"
    },
    {
        num:"9",
        name:"上海群鲤服饰",
        Amount:"20249",
        YoY:"30%",
        url:"./emImgs/上海群鲤服饰.png"
    },
    {
        num:"10",
        name:"上海圆擎信息科技",
        Amount:"20249",
        YoY:"30%",
        url:"./emImgs/上海圆擎信息科技.png"
    },
];
//企业平效排行，企业数据
var qyData = [
    {
        label:"绿地恺泰",
        bar:"51%",
        num:"2340.23",
    },
    {
        label:"中间孚泰",
        bar:"22%",
        num:"987.1",
    },
    {
        label:"安踏集团",
        bar:"11%",
        num:"500",
    },
    {
        label:"完美公司",
        bar:"9%",
        num:"432.6",
    },
    {
        label:"中核建",
        bar:"6.5%",
        num:"300.21",
    },
];
//企业平效排行，产业分类数据
var cyflData = [
    {
        label:"开发商",
        bar:"51%",
        num:"2340.23",
    },
    {
        label:"电子商务",
        bar:"22%",
        num:"987.1",
    },
    {
        label:"餐饮",
        bar:"11%",
        num:"500",
    },
    {
        label:"高新科技",
        bar:"9%",
        num:"432.6",
    },
    {
        label:"文创",
        bar:"6.5%",
        num:"300.21",
    },
];
//企业人均产能排行，企业数据
var peopleQyData = [
    {
        label:"绿地恺泰",
        bar:"66%",
        num:"40.23",
    },
    {
        label:"中间孚泰",
        bar:"13%",
        num:"8.1",
    },
    {
        label:"安踏集团",
        bar:"8%",
        num:"5",
    },
    {
        label:"完美公司",
        bar:"7%",
        num:"4.6",
    },
    {
        label:"中核建",
        bar:"5%",
        num:"3.21",
    },
];
//企业人均产能排行，产业分类数据
var peoplecyflData = [
    {
        label:"开发商",
        bar:"66%",
        num:"40.23",
    },
    {
        label:"电子商务",
        bar:"13%",
        num:"8.1",
    },
    {
        label:"餐饮",
        bar:"8%",
        num:"5",
    },
    {
        label:"高新科技",
        bar:"7%",
        num:"4.6",
    },
    {
        label:"文创",
        bar:"5%",
        num:"3.21",
    },
];

$(document).ready(
    function() {
        // drawCharts('chart1',option1);
        // drawCharts('chart2',option2);
        drawCharts('chart3',option3);
        // drawCharts('chart4',option4);
        drawCharts('chart5',option5);
        $('#template-box').html(template('tableData', { data: data }));
        $('#qyBarDivs').html(template('qyBarDiv', { qyData: qyData }));
        $('#cyflBarDivs').html(template('cyflBarDiv', { cyflData: cyflData }));
        $('#peopleQyBarDivs').html(template('peopleQyBarDiv', { peopleQyData: peopleQyData }));
        $('#peoplecyflBarDivs').html(template('peoplecyflBarDiv', { peoplecyflData: peoplecyflData }));
        //获取楼号
        var index =
        decodeURIComponent(
                // eslint-disable-next-line no-sparse-arrays
                (new RegExp("[?|&]key=" + "([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, "%20")) || null
        var name = buildingData[index].name
    }
)
//渲染图表
function drawCharts(id,option){
    var mychart = echarts.init(document.getElementById(id));
    // console.log(mychart);
    // console.log(option);
    mychart.setOption(option);
    //自适应屏幕变化
    setTimeout(function (){
        window.addEventListener('resize',function () {
	    	mychart.resize();
	    })
	    // window.onresize = function () {
	    // 	mychart.resize();
	    // }
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

//企业规模点击事件
$('.qygm').click(function(){
    // console.log(222)
    $(this).addClass('active');
    $(this).siblings().removeClass("active");
    // console.log($(this).html());
    if($(this).html()=='人员规模'){
        $('.rygmDiv').removeClass('hide');
        $('.ysgmDiv').addClass('hide');
    }else{
        $('.rygmDiv').addClass('hide');
        $('.ysgmDiv').removeClass('hide');
    }
})
// 企业平效排行
$('.qypxph').click(function(){
    // console.log(222)
    $(this).addClass('active');
    $(this).siblings().removeClass("active");
    // console.log($(this).html());
    if($(this).html()=='企业'){
        $('.barDivs1').removeClass('hide');
        $('.barDivs2').addClass('hide');
    }else{
        $('.barDivs1').addClass('hide');
        $('.barDivs2').removeClass('hide');
    }
})
// 企业人均产能排行
$('.qycnph').click(function(){
    // console.log(222)
    $(this).addClass('active');
    $(this).siblings().removeClass("active");
    // console.log($(this).html());
    if($(this).html()=='企业'){
        $('.popbarDivs1').removeClass('hide');
        $('.popbarDivs2').addClass('hide');
    }else{
        $('.popbarDivs1').addClass('hide');
        $('.popbarDivs2').removeClass('hide');
    }
})
//跳转页面
$('.buildingVacancy').on('click',function(){
    window.location.href = "./buildingVacancy.html?key="+name
});