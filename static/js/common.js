function showMsg(text){
    /* 创建HTML结构 */
    // $('#dialog').remove();
    var html = '<div id="dialog" ' +
        'style="min-width:140px' +
        ';max-width: 320px;' +
        ';position: fixed;' +
        'top: 50%;' +
        'left: 50%;' +
        'transform: translate(-50%,-50%);' +
        'font-size: 14px;' +
        'background: rgba(43,43,43,0.7);' +
        'color: #fff;' +
        'padding:14px 8px;' +
        'text-align: center;' +
        'line-height: 16px">'+text+'</div>';
    /* 添加到body里面 */
    $('body').append(html);
    var time = 3;
    var countDown = setInterval(function () {
        if (time <= 0) {
            clearInterval(countDown);
            $('#dialog').remove();
        }
        time -= 1000;
    }, 1000);
}
