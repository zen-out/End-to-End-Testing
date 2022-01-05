/**
 * getElementStyles(elem)
 * @date 2022-01-04
 * @param {any} elem
 * @returns {any}
 */
function getElementStyles(elem) {
    var styles = {};
    var style = elem.ownerDocument.defaultView ?
        elem.ownerDocument.defaultView.getComputedStyle(elem, null) :
        elem.currentStyle;
    var key, len;

    if (style && style.length && style[0] && style[style[0]]) {
        len = style.length;
        while (len--) {
            key = style[len];
            if (typeof style[key] === "string") {
                styles[camelCase(key)] = style[key];
            }
        }

        // Support: Opera, IE <9
    } else {
        for (key in style) {
            if (typeof style[key] === "string") {
                styles[key] = style[key];
            }
        }
    }

    return styles;
}


var addEvent = function(elem, type, fn) {
    if (elem.addEventListener) {
        // Standards-based browsers
        elem.addEventListener(type, fn, false);
    } else if (elem.attachEvent) {
        // support: IE <9
        elem.attachEvent("on" + type, fn);
    }
};