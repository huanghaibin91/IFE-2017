var table = document.querySelector('table');
var tbody = table.tBodies[0];
var rows = tbody.rows;
var tops = document.querySelectorAll('.top');
var bottoms = document.querySelectorAll('.bottom');
// 从大到小排序
tops.forEach(function (ele, index) {
    ele.addEventListener('click', function () {
        var arr = [];
        for (var i = 0; i < rows.length; i++) {
            arr.push(rows[i]);
        }
        arr.sort(function (a, b) {
            return parseFloat(b.cells[index + 1].innerText) - parseFloat(a.cells[index + 1].innerText);
        });
        arr.forEach(function (row) {
            tbody.appendChild(row);
        });
    }, false);
});
// 从小到大排序
bottoms.forEach(function (ele, index) {
    ele.addEventListener('click', function () {
        var arr = [];
        for (var i = 0; i < rows.length; i++) {
            arr.push(rows[i]);
        }
        arr.sort(function (a, b) {
            return parseFloat(a.cells[index + 1].innerText) - parseFloat(b.cells[index + 1].innerText);
        });
        arr.forEach(function (row) {
            tbody.appendChild(row);
        });
    }, false);
});

