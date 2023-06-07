function Common() {

    /*
    * 功能: 重置rem
    * */
    this.resizeRem = function() {
        if (window.innerWidth < window.innerHeight)
        {
            let html = document.querySelector('html');
            let rem = html.offsetHeight / 10.80;
            html.style.fontSize = rem + "px";
        }
        else {
            let html = document.querySelector('html');
            let rem = html.offsetWidth / 19.20;
            html.style.fontSize = rem + "px";
        }
    };

    /*
    *   功能: 修改HTML元素图片
    *   参数t : type (string id/object)
    *   参数src : sprite url
    * */
    this.changeElementImage = function (t, src) {
        let element;
        if (typeof t == 'string')
            element = document.getElementById(t);
        else
            element = t;
        element.style.background = 'url('+src+')';
        element.style.backgroundSize = '100% 100%';
    };
}