var option3 = {
    title: {
        text: '产品分类',
        x: '12%',
        y: '46%',
        textStyle: {
            fontSize: '16',
            color: '#DEF1FF'
        },
    },
    color: ['#EE6D44', '#EEB00A', '#B1FF96', '#2CDB4D', '#1EF7FF', '#1EBDFF', '#1174EE', '#D870FF', '#FFBAEB', '#FAF863'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        icon: "circle",//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 12,  // 设置宽度
        itemHeight: 12, // 设置高度
        y: 'center',
        textStyle: {
            fontSize: 14,//字体大小
            color: '#DEF1FF'//字体颜色
        },
        // right:,
        left: "50%",
        data: ['餐饮', '贸易', '会展', '电子商务', '文创', '高新科技', '开发商', '总部类', '服务类', '其他'],
        textStyle: {
            // fontSize:18,
            width: 130,
            rich: {
                a: {
                    // align:'left',
                    color: '#DEF1FF',
                    padding: [0, 0, 0, 10],
                    fontSize: 14,
                },
                b: {
                    align: 'right',
                    color: '#eb3a53',
                },
                c: {
                    align: 'right',
                    color: '#2BFAFF',
                    fontSize: 14,
                },
            }
        },
        // tooltip: {
        //     show: true
        // },
        formatter: function (name) {
            let _index = 0;
            let _dataList = option3.series[0].data;
            _dataList.forEach((item, i) => {
                if (item.name == name) {
                    _index = i;
                }
            });
            let arr;
            if (name == '应交人民币') {
                arr = [
                    '{a|' + name + '}',
                    '{b|￥' + _dataList[_index].value + '%}'
                ]
            } else {
                arr = [
                    '{a|' + name + '}',
                    '{c|' + _dataList[_index].value + '}'
                ]
            }
            //console.log(_index)
            //console.log(_data1[_index].value)
            // 注意，换行仍是使用 '\n'。
            // console.log(_dataList[_index]);
            return arr.join('');
        }
    },
    series: [
        {
            name: '产品分类',
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                show: false,
                position: 'center'
            },
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // },
            labelLine: {
                show: false
            },
            data: [
                { value: 99, name: '餐饮' },
                { value: 82, name: '贸易' },
                { value: 45, name: '会展' },
                { value: 36, name: '电子商务' },
                { value: 33, name: '文创' },
                { value: 29, name: '高新科技' },
                { value: 20, name: '开发商' },
                { value: 5, name: '总部类' },
                { value: 1, name: '服务类' },
                { value: 220, name: '其他' }
            ]
        }
    ]
};