// 鼠标移入
$('.building > div').mouseenter(function(){
    // console.log($(this).attr('class'))
    //获取字符串最后一位（楼层）
    let i = $(this).attr('class').charAt($(this).attr('class').length-1);
    // console.log(i);
    $(this).parent().css('background-image','url(./asset/images/buildingVacancy/floor'+i+'.png)')
    //标题
    $('.floorNum').html(i+'F')
    //右侧数据改变
    $(".tabItems").eq(i-1).show();
    $(".tabItems").eq(i-1).siblings().hide();
})
//鼠标移出楼栋
$('.building').mouseleave(function(){
    // $(this).css('background-image','url(./asset/images/buildingVacancy/building.png)')
})
//点击楼层，弹框出现
$('.building > div').on('click', function(){
    //获取楼层
    let i = $(this).attr('class').charAt($(this).attr('class').length-1);
    //标题
    $('.title_floor').html(i)
    layer.open({
        type: 1,
        shade: 0.6,
        area: ['680px'],
        content: $('#moreCharts'), //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
        success:function(){  
            // loadPie_modal("chartPie_type", loadPie_modal_data01);
            // loadPie_modal("chartPie_mode", loadPie_modal_data02);
            // swiper(); 
        }
    });
})

// 右侧内容
var user_case_data = [{
    syz: 6,
    kzf: 2,
    rzl: '75%',
    rzqy: 8,
    bgmj: 13569,
    rzyg: 123,
    zlmj: 8500,
    jzmj: 33569,
},{
    syz: 4,
    kzf: 25,
    rzl: '70%',
    rzqy: 81,
    bgmj: 1369,
    rzyg: 113,
    zlmj: 8400,
    jzmj: 3569,
},{
    syz: 5,
    kzf: 14,
    rzl: '20%',
    rzqy: 82,
    bgmj: 169,
    rzyg: 13,
    zlmj: 800,
    jzmj: 369,
},{
    syz: 12,
    kzf: 252,
    rzl: '60%',
    rzqy: 812,
    bgmj: 139,
    rzyg: 13,
    zlmj: 840,
    jzmj: 3569,
},{
    syz: 12,
    kzf: 225,
    rzl: '30%',
    rzqy: 811,
    bgmj: 169,
    rzyg: 1123,
    zlmj: 800,
    jzmj: 359,
},{
    syz: 41,
    kzf: 251,
    rzl: '70%',
    rzqy: 813,
    bgmj: 1269,
    rzyg: 113,
    zlmj: 840,
    jzmj: 569,
},{
    syz: 21,
    kzf: 25,
    rzl: '75%',
    rzqy: 81,
    bgmj: 1369,
    rzyg: 1132,
    zlmj: 820,
    jzmj: 359,
},{
    syz: 42,
    kzf: 25,
    rzl: '70%',
    rzqy: 81,
    bgmj: 1369,
    rzyg: 113,
    zlmj: 8400,
    jzmj: 369,
},{
    syz: 4,
    kzf: 25,
    rzl: '50%',
    rzqy: 81,
    bgmj: 169,
    rzyg: 113,
    zlmj: 800,
    jzmj: 369,
}]

$(document).ready(function(){
    $('#template-box').html(template('user_case_data', {data: user_case_data}));
    $(".tabItems").eq(0).show();
    load_bar_dj("vacantRoom_chart")
})




// 堆积柱状图
function load_bar_dj(elementId){
    var data1 = [320, 332, 301, 334, 390, 330, 44, 88, 223];		//分类一
    var data2 = [1220, 1392, 1010, 134, 90, 230, 235, 286,467];		//分类二
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
            data: ['使用中', '空置房'],
            itemWidth: 26,
            itemHeight: 5,
            right: 0,
            textStyle: {
                color: '#fff'
            }
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
                data: ['1F', '2F', '3F', '4F', '5F', '6F', '7F', '8F', '9F'],
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
                min: 0,
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
                name: '使用中',
                type: 'bar',
                color: '#18EBF3',
                stack: '情况分析',
                barWidth: 24,
                data: data1,
            },
            {
                name: '空置房',
                type: 'bar',
                color: '#FFB040',
                stack: '情况分析',
                data: data2,
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(elementId));
    myChart.setOption(option, true);
    //自适应屏幕变化
    setTimeout(function (){
        window.addEventListener('resize',function () {
            myChart.resize();
        })
    },100)
}
//获取楼号
var buildingNum = decodeURIComponent((new RegExp("[?|&]key=" + "([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, "%20"))
$('.louNum').html(buildingNum);
