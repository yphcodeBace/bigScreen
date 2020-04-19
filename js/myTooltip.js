function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author liang
 * @param {String} boxId为必传生成EC的ID
 * @param {Object} config为配置项
 * @description
 *      引入JS，init图表之后 new myTooltip()，此时可传递config覆盖样式
 *      getPosOrSize('pos', pos)获取tooltip生成位置
 *      getTooltipDom(text)传递需要展示text，获取tooltipDom
 *      text大小需要根据内容进行微调
 */
var myTooltipC =
    /*#__PURE__*/
    function () {
        "use strict";

        function myTooltipC(boxId) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, myTooltipC);

            if (!boxId) throw Error('boxId为必传项');
            this.boxId = boxId;
            this.config = {
                priority: 'top',
                // 默认在点上方OR下方（top/bottom）
                partition: 1.4,
                // 左右分割比例
                lineColor: 'rgba(253, 129, 91, 0.8)',
                // 引导线颜色
                offset: [5, 5],
                L1: {
                    time: 0.3,
                    // L1动画时长(单位s)
                    long: 40 // L1长度

                },
                L2: {
                    time: 0.3,
                    long: 40
                },
                text: {
                    time: 0.5,
                    font: '14px Arial',
                    color: '#fff',
                    padding: [10, 10],
                    width: 120,
                    height: 60,
                    lineHeight: 24,
                    backgroundColor: 'rgba(50, 50, 50, 0.5)',
                    borderColor: 'rgba(253, 129, 91, 1)',
                    borderWidth: 1,
                    angle: {
                        width: 2,
                        long: 15
                    }
                }
            };

            _.merge(this.config, config, {
                left: false,
                top: false
            });
        }

        _createClass(myTooltipC, [{
            key: "getPosOrSize",
            value: function getPosOrSize(type, point) {
                var x1 = this.config.L1.long * Math.sin(Math.PI / 4);
                var width = x1 + this.config.L2.long + this.config.text.width;
                var height = x1 + this.config.text.height / 2;

                if (type === 'size') {
                    this.config.width = width;
                    this.config.height = height;
                    return {
                        width: width,
                        height: height
                    };
                } else {
                    var box = document.getElementById(this.boxId);
                    var bw = box.offsetWidth;
                    var bh = box.offsetHeight;
                    var x = point[0];
                    var y = point[1];
                    this.config.left = false;

                    if (x + width >= bw / this.config.partition) {
                        x = x - width - this.config.offset[0];
                        this.config.left = true;
                    }

                    if (this.config.priority === 'top') {
                        // L1向上
                        this.config.top = true;
                        y = y - height - this.config.offset[0];

                        if (y <= 0) {
                            y = point[1];
                            this.config.top = false;
                        }

                        return [x, y];
                    } else {
                        this.config.top = false;

                        if (y + height >= bh) {
                            y = y - height - this.config.offset[0];
                            this.config.top = true;
                        }

                        return [x, y];
                    }
                }
            }
        }, {
            key: "getTooltipDom",
            value: function getTooltipDom(text) {
                if (!text) throw Error('text为必传项');
                return this.clickTrigger(text);
            }
        }, {
            key: "createTooltip",
            value: function createTooltip(text) {
                var me = this;
                setTimeout(function (_) {
                    me.t = new _createTooltip('tCanvas', me.config, text);
                }, 0);
            }
        }, {
            key: "clickTrigger",
            value: function clickTrigger(text) {
                this.createTooltip(text);
                var size = this.getPosOrSize('size');
                return "<canvas id=\"tCanvas\" width=\"".concat(size.width, "\" height=\"").concat(size.height, "\"></canvas>");
            }
        }]);

        return myTooltipC;
    }();

var _createTooltip =
    /*#__PURE__*/
    function () {
        "use strict";

        function _createTooltip(id, config, text) {
            _classCallCheck(this, _createTooltip);

            this.config = config;
            this.text = text;
            this.totalTime = 0;
            this.over = false;
            this.stage = new createjs.Stage(id);
            this.timeline = new TimelineMax({
                repeat: 0
            });
            this.g = new createjs.Graphics();
            this.lineShape = new createjs.Shape(this.g);
            this.textContainer = new createjs.Container();
            this.textShape = new createjs.Shape();
            this.textContainer.addChild(this.textShape);
            this.stage.addChild(this.lineShape, this.textContainer);
            this.init();
            this.begin();
            this.update();
        }

        _createClass(_createTooltip, [{
            key: "init",
            value: function init() {
                // 根据不同展示位置计算起点位置
                this.start = [0, 0];

                if (this.config.left) {
                    this.start[0] = this.config.width;
                }

                if (this.config.top) {
                    this.start[1] = this.config.height;
                }
            }
        }, {
            key: "begin",
            value: function begin() {
                this.L1();
                this.L2();
                this.addText();
            }
        }, {
            key: "L1",
            value: function L1() {
                var me = this;
                var c = me.config;
                var tl = new TimelineMax();
                var scale = {
                    s: 0
                };
                var x = c.L1.long * Math.sin(Math.PI / 4);

                if (me.config.left) {
                    if (me.config.top) {
                        this.L1End = [me.start[0] - x, me.start[1] - x];
                    } else {
                        this.L1End = [me.start[0] - x, me.start[1] + x];
                    }
                } else {
                    if (me.config.top) {
                        this.L1End = [x, me.start[1] - x];
                    } else {
                        this.L1End = [x, x];
                    }
                }

                tl.to(scale, c.L1.time, {
                    s: 1,
                    onUpdate: function onUpdate() {
                        var s = scale.s;

                        if (me.config.left) {
                            if (me.config.top) {
                                var _me$g$c$s;

                                (_me$g$c$s = me.g.c().s(c.lineColor)).mt.apply(_me$g$c$s, _toConsumableArray(me.start)).lt(me.start[0] - x * s, me.start[1] - x * s);
                            } else {
                                var _me$g$c$s2;

                                (_me$g$c$s2 = me.g.c().s(c.lineColor)).mt.apply(_me$g$c$s2, _toConsumableArray(me.start)).lt(me.start[0] - x * s, me.start[1] + x * s);
                            }
                        } else {
                            if (me.config.top) {
                                var _me$g$c$s3;

                                (_me$g$c$s3 = me.g.c().s(c.lineColor)).mt.apply(_me$g$c$s3, _toConsumableArray(me.start)).lt(x * s, me.start[1] - x * s);
                            } else {
                                var _me$g$c$s4;

                                (_me$g$c$s4 = me.g.c().s(c.lineColor)).mt.apply(_me$g$c$s4, _toConsumableArray(me.start)).lt(x * s, x * s);
                            }
                        }

                        me.update();
                    }
                });
                this.timeline.add(tl, this.totalTime);
                this.totalTime += c.L1.time;
            }
        }, {
            key: "L2",
            value: function L2() {
                // 只跟左右有关，只判断this.config.left
                var me = this;
                var c = me.config;
                var tl = new TimelineMax();
                var scale = {
                    s: 0
                };
                tl.to(scale, c.L2.time, {
                    s: 1,
                    onUpdate: function onUpdate() {
                        var s = scale.s;

                        if (me.config.left) {
                            var _me$g$c$s$mt, _me$g$c$s5;

                            (_me$g$c$s$mt = (_me$g$c$s5 = me.g.c().s(c.lineColor)).mt.apply(_me$g$c$s5, _toConsumableArray(me.start))).lt.apply(_me$g$c$s$mt, _toConsumableArray(me.L1End)).lt(me.L1End[0] - c.L2.long * s, me.L1End[1]);
                        } else {
                            var _me$g$c$s$mt2, _me$g$c$s6;

                            (_me$g$c$s$mt2 = (_me$g$c$s6 = me.g.c().s(c.lineColor)).mt.apply(_me$g$c$s6, _toConsumableArray(me.start))).lt.apply(_me$g$c$s$mt2, _toConsumableArray(me.L1End)).lt(me.L1End[0] + c.L2.long * s, me.L1End[1]);
                        }

                        me.update();
                    }
                });
                this.timeline.add(tl, this.totalTime);
                this.totalTime += c.L2.time;
            }
        }, {
            key: "addText",
            value: function addText() {
                // text框只与L2end有关，只需判断left即可，top不影响
                var me = this;
                var c = me.config;
                var tl = new TimelineMax();
                var scale = {
                    s: 0
                };
                var L2End = [me.L1End[0] + c.L2.long, me.L1End[1]];

                if (me.config.left) {
                    L2End = [me.L1End[0] - c.L2.long, me.L1End[1]];
                }

                tl.to(scale, c.text.time, {
                    s: 1,
                    onStart: function onStart() {
                        var _me$g$c$s$mt$lt, _me$g$c$s$mt3, _me$g$c$s7;

                        var x = 0;

                        if (me.config.left) {
                            x = L2End[0] - c.text.width;
                        } else {
                            x = L2End[0];
                        }

                        (_me$g$c$s$mt$lt = (_me$g$c$s$mt3 = (_me$g$c$s7 = me.g.c().s(c.lineColor)).mt.apply(_me$g$c$s7, _toConsumableArray(me.start))).lt.apply(_me$g$c$s$mt3, _toConsumableArray(me.L1End))).lt.apply(_me$g$c$s$mt$lt, _toConsumableArray(L2End)); // 容器定位


                        me.textContainer.x = x;
                        me.textContainer.y = L2End[1] - c.text.height / 2;
                        me.textBorder(c.text.width, c.text.height - 2);
                        me.textC = new createjs.Text(me.text, c.text.font, c.text.color);
                        me.textC.alpha = 0;
                        me.textC.lineHeight = c.text.lineHeight;
                        me.textC.x = c.text.padding[0];
                        me.textC.y = c.text.padding[1];
                        me.textContainer.addChild(me.textC);
                        me.textShape.graphics.c().f(c.text.backgroundColor).r(c.text.angle.width, c.text.angle.width, c.text.width - c.text.angle.width * 2, c.text.height - c.text.angle.width * 2);
                        me.textShape.alpha = 0;
                        me.update();
                    },
                    onUpdate: function onUpdate() {
                        if (!me.textC) return;
                        me.textC.alpha = scale.s;
                        me.textShape.alpha = Math.sin(scale.s * Math.PI * 2.5);
                        me.update();
                    },
                    onComplete: function onComplete() {
                        me.over = true;
                    }
                });
                this.timeline.add(tl, this.totalTime);
            }
        }, {
            key: "textBorder",
            value: function textBorder(w, h) {
                var me = this;
                var borderWidth = 1;
                var borderAngle = new createjs.Shape();
                var border = new createjs.Shape();
                var color = this.config.text.borderColor;
                this.textContainer.addChild(borderAngle, border);
                var angle = this.config.text.angle; // 偏移量

                var skew = angle.width / 2; // 边线
                // border.graphics.s(color).ss(1).mt(skew, skew).lt(skew, h - skew).lt(w - skew, h - skew).lt(w - skew, skew).cp()

                var tl = new TimelineMax();
                var scale = {
                    s: 0 // 四角

                };
                borderAngle.graphics.c().s(color).ss(angle.width).mt(skew, angle.long).lt(skew, skew).lt(angle.long, skew).mt(skew, h - angle.long).lt(skew, h - skew).lt(angle.long, h - skew).mt(w - angle.long, 0).lt(w - skew, skew).lt(w - skew, angle.long).mt(w - angle.long, h).lt(w - skew, h - skew).lt(w - skew, h - angle.long);
                tl.to(scale, this.config.text.time / 4, {
                    s: 1,
                    onUpdate: function onUpdate() {
                        var s = scale.s;
                        border.graphics.c().s(color).ss(borderWidth).mt(skew, skew).lt((w - skew) * s, skew);
                    }
                }).to(scale, this.config.text.time / 4, {
                    s: 0,
                    onUpdate: function onUpdate() {
                        var s = 1 - scale.s;
                        border.graphics.c().s(color).ss(borderWidth).mt(skew, skew).lt(w - skew, skew).lt(w - skew, (h - skew) * s);
                    }
                }).to(scale, this.config.text.time / 4, {
                    s: 1,
                    onUpdate: function onUpdate() {
                        var s = scale.s;
                        border.graphics.c().s(color).ss(borderWidth).mt(skew, skew).lt(w - skew, skew).lt(w - skew, h - skew).lt(w - skew - (w - 2 * skew) * s, h - skew);
                    }
                }).to(scale, this.config.text.time / 4, {
                    s: 0,
                    onUpdate: function onUpdate() {
                        var s = 1 - scale.s;
                        border.graphics.c().s(color).ss(borderWidth).mt(skew, skew).lt(w - skew, skew).lt(w - skew, h - skew).lt(skew, h - skew).lt(skew, h - skew - (h - 2 * skew) * s);
                    }
                });
                this.timeline.add(tl, this.totalTime);
            }
        }, {
            key: "update",
            value: function update() {
                this.stage.update();
            }
        }]);

        return _createTooltip;
    }();