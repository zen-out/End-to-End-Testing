class BaseTest {
    constructor() {

    }
    hasClass(element, classname) {
        if (element.hasClass(classname)) {
            return true;
        } else {
            return false;
        }
    }
    hasId(element, id) {
        var elmId = element.attr("id");
        return elmId === id ? true : false;
    }
    hasAttr(element, attribute) {
        var getVal = element.attr(attribute);
        return getVal === undefined ? false : true;
    }
    hasDataTest(element, key, value = "") {
        let getData = element.data(key)

        if (value === "") {
            return getData ? true : false
        } else {
            return getData === value ? true : false
        }
    }
    hasHTML(element, html) {
        // let getHTML = element.outerHTML()
        let get = element.html();
        console.log(typeof get)
        let stringed = get.toString()
        return stringed.includes(html) ? true : false
    }
    exists(element) {
        if (element.length) {
            return true;
        } else {
            return false
        }
    }
    visible(element) {
        let getDisplayNone = element.is(":visible")
        return getDisplayNone ? true : false
    }
    hasCSS(element, key, value) {
        let getValue = element.css(key)
        console.log("get value", getValue)
    }
}


$(() => {
    console.log("hello")
    let el = $(".yonas")
    let love = $(".love")
    let base = new BaseTest()
    let hasClass = base.hasClass(el, "yonas")
    let hasClassFalse = base.hasClass(el, "no")
    console.log('hasClassFalse:', hasClassFalse);
    console.log('hasClass:', hasClass);
    let hasIdTrue = base.hasId(el, "yon")
    console.log('hasIdTrue:', hasIdTrue);
    let hasIdFalse = base.hasId(el, "whatsup")
    console.log('hasIdFalse:', hasIdFalse);
    let hasAttrTrue = base.hasAttr(el, "disabled")
    console.log('hasAttrTrue:', hasAttrTrue);
    let hasAttrFalse = base.hasAttr(el, "no")
    console.log('hasAttrFalse:', hasAttrFalse);

    let hasDataTrue = base.hasDataTest(el, "problem_id")
    console.log('hasDataTrue:', hasDataTrue);
    let hasDataFalse = base.hasDataTest(el, "task_id")
    console.log('hasDataFalse:', hasDataFalse);
    let hasDataTrueTrue = base.hasDataTest(el, "problem_id", 3)
    console.log("🚀 ~ file: base.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
    let hasDataTrueTrue2 = base.hasDataTest(el, "problem_id", "3")
    console.log("🚀 ~ file: base.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
    let htmlTrue = base.hasHTML(el, "<div>baller</div>")
    console.log("🚀 ~ file: base.js ~ line 80 ~ htmlTrue", htmlTrue)
    let htmlFalse = base.hasHTML(el, "whatthef")
    console.log("🚀 ~ file: base.js ~ line 82 ~ htmlFalse", htmlFalse)
    let htmltext = base.hasHTML(el, "ll")
    console.log("🚀 ~ file: base.js ~ line 84 ~ htmltext", htmltext)
    let existTrue = base.exists(el)
    console.log("🚀 ~ file: base.js ~ line 90 ~ existTrue", existTrue)
    let existFalse = base.exists($(".love"))
    console.log("🚀 ~ file: base.js ~ line 92 ~ existFalse", existFalse)
    let visibleTrue = base.visible(el)
    console.log("🚀 ~ file: base.js ~ line 91 ~ visibleTrue", visibleTrue)
    let visibleFalse = base.visible($(".noDisplay"))
    console.log("🚀 ~ file: base.js ~ line 93 ~ visibleFalse", visibleFalse)
})