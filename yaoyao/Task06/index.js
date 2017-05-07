window.onload = function () {
    var btn = document.querySelector('#btn');
    var screen = document.querySelector('#screen');
    var message = document.querySelector('#message');
    btn.addEventListener('click', function () {
        screen.style.display = 'block';
        center(message, 404, 304);
        document.body.className = 'hidden';
    }, false);
    screen.addEventListener('click', function (e) {
        if (e.target.id == 'screen' || e.target.tagName == 'BUTTON') {
            screen.style.display = 'none';
            document.body.className = '';
        }
    }, false);
    dragMove(message);
}
// 拖动
function dragMove(target) {
    var dragFlag = false;
    var _top = 0;
    var _left = 0;
    target.addEventListener('mousedown', function (e) {
        if (e.target.id == 'drag') {
            _top = e.clientY - target.offsetTop;
            _left = e.clientX - target.offsetLeft;
            dragFlag = true;
        }
    }, false);
    target.addEventListener('mousemove', function (e) {
        if (dragFlag) {
            target.style.top = e.clientY - _top + 'px';
            target.style.left = e.clientX - _left + 'px';
        }
    }, false);
    target.addEventListener('mouseup', function (e) {
        dragFlag = false;
    }, false);
}
//跨浏览器获取视口大小
function getInner() {
    if (typeof window.innerWidth != 'undefined') {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}
//设置物体居中
function center(ele, width, height) {
    var top = (getInner().height - height) / 2;
    var left = (getInner().width - width) / 2;
    ele.style.top = top + 'px';
    ele.style.left = left + 'px';
}