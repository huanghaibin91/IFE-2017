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
function move(target) {
    var block = document.querySelector('#block');
    var eleCls = block.className;
    // 转换方向命令
    if (target.id == 'turn-top') {
        if (hasClass(block, 'turn-top')) {
            alert('方块已经朝向这个方向了，命令无效！');
        } else {
            if (parseInt(block.style.top) == 0) {
                alert('超出边界，请换一个方向移动！');
            } else {
                removeClass(block, eleCls);
                addClass(block, 'turn-top');
                block.style.top = parseInt(block.style.top) - 51 + 'px';
            }
        }
    } else if (target.id == 'turn-right') {
        if (hasClass(block, 'turn-right')) {
            alert('方块已经朝向这个方向了，命令无效！');
        } else {
            if (parseInt(block.style.left) == 459) {
                alert('超出边界，请换一个方向移动！');
            } else {
                removeClass(block, eleCls);
                addClass(block, 'turn-right');
                block.style.left = parseInt(block.style.left) + 51 + 'px';
            }
        }
    } else if (target.id == 'turn-bottom') {
        if (hasClass(block, 'turn-bottom')) {
            alert('方块已经朝向这个方向了，命令无效！');
        } else {
            if (parseInt(block.style.top) == 459) {
                alert('超出边界，请换一个方向移动！');
            } else {
                removeClass(block, eleCls);
                addClass(block, 'turn-bottom');
                block.style.top = parseInt(block.style.top) + 51 + 'px';
            }
        }
    } else if (target.id == 'turn-left') {
        if (hasClass(block, 'turn-left')) {
            alert('方块已经朝向这个方向了，命令无效！');
        } else {
            if (parseInt(block.style.left) == 0) {
                alert('超出边界，请换一个方向移动！');
            } else {
                removeClass(block, eleCls);
                addClass(block, 'turn-left');
                block.style.left = parseInt(block.style.left) - 51 + 'px';
            }
        }
    } else if (target.id == 'top') {
        if (parseInt(block.style.top) == 0) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'top');
                block.style.top = parseInt(block.style.top) - 51 + 'px';
                removeClass(block, 'top');
            }
    } else if (target.id == 'right') {
        if (parseInt(block.style.left) == 459) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'right');
                block.style.left = parseInt(block.style.left) + 51 + 'px';
                removeClass(block, 'right');
            }
    } else if (target.id == 'bottom') {
        if (parseInt(block.style.top) == 459) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'bottom');
                block.style.top = parseInt(block.style.top) + 51 + 'px';
                removeClass(block, 'bottom');
            }
    } else if (target.id == 'left') {
        if (parseInt(block.style.left) == 0) {
                alert('超出边界，请换一个方向移动！');
            } else {
                addClass(block, 'left');
                block.style.left = parseInt(block.style.left) - 51 + 'px';
                removeClass(block, 'left');
            }
    }
}
// 初始化
function init() {
    var order = document.querySelector('#order');
    order.addEventListener('click', function (e) {
        var target = e.target;
        if (target.tagName == 'BUTTON') {
            move(target);
        }
    }, false);
}
// 执行
init();