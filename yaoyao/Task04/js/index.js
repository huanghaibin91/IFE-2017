// 绘制格子
window.onload = function () {
    var box = document.querySelector('#box');
    for (var i = 0; i < 100; i++) {
        var div = document.createElement('div');
        div.className = 'cell';
        box.appendChild(div);
    }
}
// 判断元素是否包含类名
var hasClass = function (ele, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}
// 添加类名
var addClass = function (ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}
// 移出类名
var removeClass = function (ele, cls) {
    if (hasClass(ele, cls)) {
        ele.className = ele.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), '');
    }
}
// 移动方块
var flag = 1;
function move(value) {
    var block = document.querySelector('#block');
    var eleCls = block.className;
    // 转换方向命令
    if (value == 'TURN RIG') {
        if (hasClass(block, 'turn-top')) {
            changeCls('turn-right');
            flag = 2;
        } else if (hasClass(block, 'turn-right')) {
            changeCls('turn-bottom');
            flag = 3;
        } else if (hasClass(block, 'turn-bottom')) {
            changeCls('turn-left');
            flag = 4;
        } else if (hasClass(block, 'turn-left')) {
            changeCls('turn-top');
            flag = 1;
        }
    } else if (value == 'TURN LEF') {
        if (hasClass(block, 'turn-top')) {
            changeCls('turn-left');
            flag = 4;
        } else if (hasClass(block, 'turn-right')) {
            changeCls('turn-top');
            flag = 1;
        } else if (hasClass(block, 'turn-bottom')) {
            changeCls('turn-right');
            flag = 2;
        } else if (hasClass(block, 'turn-left')) {
            changeCls('turn-bottom');
            flag = 3;
        }
    } else if (value == 'TURN BAC') {
        if (hasClass(block, 'turn-top')) {
            changeCls('turn-bottom');
            flag = 3;
        } else if (hasClass(block, 'turn-right')) {
            changeCls('turn-left');
            flag = 4;
        } else if (hasClass(block, 'turn-bottom')) {
            changeCls('turn-top');
            flag = 1;
        } else if (hasClass(block, 'turn-left')) {
            changeCls('turn-right');
            flag = 2;
        }
    }
    // 切换类名
    function changeCls(cls) {
        removeClass(block, eleCls);
        addClass(block, cls);
    }
    // 移动命令
    if (value == 'GO') {
        if (flag == 1) {
            if (parseInt(block.style.top) == 0) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'top');
                block.style.top = parseInt(block.style.top) - 51 + 'px';
                removeClass(block, 'top');
            }
        } else if (flag == 2) {
            if (parseInt(block.style.left) == 459) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'right');
                block.style.left = parseInt(block.style.left) + 51 + 'px';
                removeClass(block, 'right');
            }
        } else if (flag == 3) {
            if (parseInt(block.style.top) == 459) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'bottom');
                block.style.top = parseInt(block.style.top) + 51 + 'px';
                removeClass(block, 'bottom');
            }
        } else if (flag == 4) {
            if (parseInt(block.style.left) == 0) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'left');
                block.style.left = parseInt(block.style.left) - 51 + 'px';
                removeClass(block, 'left');
            }
        }
    }
}
// 初始化
function init() {
    var btn = document.querySelector('#btn');
    btn.addEventListener('click', function () {
        var text = document.querySelector('#text').value;
        if (!(text == 'GO' || text == 'TURN LEF' || text == 'TURN RIG' || text == 'TURN BAC')) {
            alert('请输入正确的命令！');
        } else {
            move(text);
        }
    }, false);
}
// 执行
init();