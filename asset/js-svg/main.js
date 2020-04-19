var draw = null;
var panZoomTrigger = null;
var group = null

$(function () {
    blueprintInit('./tu.png', pathList);
})

function parameterInit () {
    panZoomTrigger = null;
    rectGroup = null;
    group = null;
}

function blueprintInit (imagePath, blueprintSplit) {
    parameterInit()
    draw = new SVG("drawing").id("demoSVG");
    console.log(draw);

    group = draw.group().id("demoSVGGroup");
    rectGroup = draw.group().id("rectGroup");
    var image = draw.image(imagePath).loaded(function (loader) {
        group.add(image);
        group.add(rectGroup);
        rebuildingPanZoom();
        drawingInit(blueprintSplit);
    })
}

/*draw.on('mouseup', function (event){})*/

/**
 * 获取鼠标定位在SVG中的绝对坐标
 * @param event
 */
function getMouseSvgPoint (event) {
    var moveP = {
        x: (event.offsetX) / draw.viewbox().zoom + draw.viewbox().x,
        y: (event.offsetY) / draw.viewbox().zoom + draw.viewbox().y,
    }
    return moveP;
}

function eleSelect (_target, flag = false) {
    if (_target) {
        if (flag) {
            _target.attr('stroke', '#2c11ff').attr('stroke-width', 2).attr('fill', '#ff0000').attr('fill-opacity', '0.1').attr('on-selected', true);
            _activeEle = _target;
            layerIndex = layerSvg.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                skin: 'yourclass',
                content: $('#box').html(),
                offset: [_activeEle.node.getBoundingClientRect().top, _activeEle.node.getBoundingClientRect().left],
                success: function (layero, index) {
                    if (splitType && splitType == 'BASEMENT') {
                        form.render('select')
                    }
                }
            });
            if (rectInputContentMap) {
                if (rectInputContentMap[_activeEle.attr('id')]) {
                    for (var key in rectInputContentMap[_activeEle.attr('id')]) {
                        var input = $($('.layui-form')[1]).find('input[name=' + key + ']');
                        $(input).val(rectInputContentMap[_activeEle.attr('id')][key])
                        if (splitType && splitType == 'BASEMENT') {
                            if (key && key == 'buildingId') {
                                reflashSelect(buildingList, buildingIdChosen, rectInputContentMap[_activeEle.attr('id')][key]);
                                if ($("select").find("option[value='" + rectInputContentMap[_activeEle.attr('id')][key] + "']")) {
                                    $("select").find("option[value='" + rectInputContentMap[_activeEle.attr('id')][key] + "']").prop("selected", true);
                                }
                                form.render();
                            }
                        }

                    }
                } else {
                    if (splitType && splitType == 'BASEMENT') {
                        reflashSelect(buildingList, buildingIdChosen);
                        form.render('select')
                    }
                }
            }
        } else {
            _target.attr('stroke', '#ff0000').attr('stroke-width', 1).attr('fill', '#ff0000').attr('fill-opacity', '0.1').attr('on-selected', false);
            _activeEle = null;
        }
    }
    return _target;
}


//初始化之前画的svg图形
function drawingInit (blueprintSplit) {
    console.log(blueprintSplit.length);
    var svg = []
    for (var i = 0, l = blueprintSplit.length; i < l; i++) {
        var item = blueprintSplit[i]
        var index = i
        var paths = blueprintSplit[i].path
        // console.log(paths);
        for (var j = 0, le = paths[j].length; j < le; j++) {
            svg[i] = draw.path(paths[j]);
            svg[i].attr('name', index).attr('id', item.id).attr('stroke', '#f6ff0a').attr('stroke-width', 1).attr('stroke-opacity', 0).attr('fill-opacity', '0').attr('fill', '#f6ff0a')
            svg[i].attr('id', index).attr('stroke', '#f6ff0a').attr('stroke-width', 1).attr('stroke-opacity', 0).attr('fill-opacity', '0').attr('fill', '#f6ff0a')
            rectGroup.add(svg[i])
            svg[i].on('mouseover', function (e) {
                $(e.target).attr('stroke-opacity', '.8').attr('fill-opacity', '.3')
                // var className = "." + e.target.id + ""
                // $(className).show()
                var index = e.target.id
                $(".box").html(template('boxData', buildingData[index]));
                $(".box").show()
            }, false);
            svg[i].on('mouseout', function (e) {
                $(e.target).attr('stroke-opacity', 0).attr('fill-opacity', 0)
                $(".box").hide()
            }, false);
            svg[i].on('click', function (e) {
                var index = e.target.id
                window.location.href = "./em.html?key=" + index
            }, false);
        }

    }


    // for (var i = 0, l = blueprintSplit.length; i < l; i++) {
    //     var svg = draw.path(blueprintSplit[i]);
    //     svg.attr('stroke', '#ff0000').attr('stroke-width', 2).attr('stroke-opacity', 0).attr('fill-opacity', '0')/*.attr('fill', '#ff0000')*/
    //     rectGroup.add(svg)
    //     svg.on('mouseover', function (e) {
    //         $(e.target).attr('stroke-opacity', 1)
    //     }, false);
    //     svg.on('mouseout', function (e) {
    //         $(e.target).attr('stroke-opacity', 0)
    //     }, false);
    // }
}


function rebuildingPanZoom () {
    panZoomTrigger = svgPanZoom('#demoSVG',
        {
            zoomEnabled: false,
            panEnabled: true,
            controlIconsEnabled: false,
            preventMouseEventsDefault: false,
            fit: true,
            // center: true,
            minZoom: 0.5,
            maxZoom: 10,
            dblClickZoomEnabled: false,
            contain: true,
            onZoom: function (scale) {
            },
            onPan: function (point) {
                // console.log(point)
            }
        }
    );
}
