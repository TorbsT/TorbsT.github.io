var scrollClass = "scroll";
var defaultScrollScalarY = 0;  // relative, typically [-1, 1]
var defaultScrollScalarX = 0;
var defaultScrollOffsetX = 0;  // in px
var defaultScrollOffsetY = 0;

function init() {
    forAllScrollELsDo(logInitialXY);
    addPageEvents();
    scrollPage();
}
function addPageEvents() {
    document.addEventListener("scroll", scrollPage);
    window.addEventListener("resize", scrollPage);
}
function scrollPage() {
    forAllScrollELsDo(scroll);
}
function forAllScrollELsDo(f) {
    var scrollELs = getScrollELs();
    for (var i = 0; i < scrollELs.length; i++) {
        var el = scrollELs[i];
        f(el);
    }
}
function scroll(el) {
    var pageY = getPageY();
    var iX = el.iX;
    var iY = el.iY;
    var d = el.dataset;
    var scrollScalarX = d.scrollscalarx || defaultScrollScalarX;
    var scrollScalarY = d.scrollscalary || defaultScrollScalarY;
    var scrollOffsetX = d.scrolloffsetx || defaultScrollOffsetX;
    var scrollOffsetY = d.scrolloffsety || defaultScrollOffsetY;
    var scrollAnchorBottom = d.scrollanchorbottom || false;
    var doScrollX = d.doscrollx || false;
    var doScrollY = d.doscrolly || false;

    var newX = scrollScalarX * pageY + iX - scrollOffsetX;
    console.log(newX + " " + scrollScalarX + " " + pageY + " " + iX + " " + scrollOffsetX);
    var newY = scrollScalarY * pageY + iY - scrollOffsetY;
    if (doScrollX) el.style.left = newX + "px";
    if (doScrollY) {
        el.style.top = newY + "px";

        // for some reason, this must be done on mobile
        if (isMobile() && scrollAnchorBottom && el.offsetTop < 0) {
            newY -= el.offsetTop;
        }
        el.style.top = newY + "px";
    }
}
function logInitialXY(el) {
    var x = el.getBoundingClientRect().left;
    el.iX = x;

    var y = el.getBoundingClientRect().top;
    var docY = document.documentElement.scrollTop;
    var iY = y + docY;
    el.iY = iY;
}
function getPageY() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
function getScrollELs() {
    return document.getElementsByClassName(scrollClass);
}
function getOffsetBottom(el) {
    var top = el.offsetTop;
    var height = el.offsetHeight;
    console.log(top + ", " + height);
    return top + height;
}
function isMobile(el) {
    return /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

init();