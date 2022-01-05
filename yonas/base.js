class BaseTest {
    constructor() {

    }
    /**
     * checkElement(el) 
     * @description ensures that you can pass in jquery or string
     * @date 2022-01-05
     * @param {any} el
     * @returns {any}
     */
    checkElement(el) {
        if (typeof el === "string") {
            return $(el)
        } else {
            return el;
        }
    }
    /**
     * hasClass(element, classname)
     * @example
     let hasClass = base.hasClass(el, "yonas")
     let hasClassFalse = base.hasClass(el, "no")
     * @date 2022-01-05
     * @param {any} element
     * @param {any} classname
     * @returns {any}
     */
    hasClass(element, classname) {
        element = this.checkElement(element)
        if (element.hasClass(classname)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * hasId(element, id)
     * @example
     let hasIdTrue = base.hasId(el, "yon")
     console.log('hasIdTrue:', hasIdTrue);
     let hasIdFalse = base.hasId(el, "whatsup")
     console.log('hasIdFalse:', hasIdFalse);
     * @date 2022-01-05
     * @param {any} element
     * @param {any} id
     * @returns {any}
     */
    hasId(element, id) {
        element = this.checkElement(element)
        var elmId = element.attr("id");
        return elmId === id ? true : false;
    }
    /**
     * hasAttr(element, attribute)
     * @example
     let hasAttrTrue = base.hasAttr(el, "disabled")
     console.log('hasAttrTrue:', hasAttrTrue);
     let hasAttrFalse = base.hasAttr(el, "no")
     console.log('hasAttrFalse:', hasAttrFalse);
     * @date 2022-01-05
     * @param {any} element
     * @param {any} attribute
     * @returns {any}
     */
    hasAttr(element, attribute) {
        element = this.checkElement(element)
        var getVal = element.attr(attribute);
        return getVal === undefined ? false : true;
    }
    /**
     * hasDataTest(element, key, value = "")
  
     let hasDataTrue = base.hasDataTest(el, "problem_id")
     console.log('hasDataTrue:', hasDataTrue);
     let hasDataFalse = base.hasDataTest(el, "task_id")
     console.log('hasDataFalse:', hasDataFalse);
         let hasDataTrueTrue = base.hasDataTest(el, "problem_id", 3)
         console.log("🚀 ~ file: base.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
         let hasDataTrueTrue2 = base.hasDataTest(el, "problem_id", "3")
         console.log("🚀 ~ file: base.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
     * @date 2022-01-05
     * @param {any} element
     * @param {any} key
     * @param {any} value=""
     * @returns {any}
     */
    hasDataTest(element, key, value = "") {
        element = this.checkElement(element)
        let getData = element.data(key)
        if (value === "") {
            return getData ? true : false
        } else {
            return getData === value ? true : false
        }
    }
    /**
     * hasHTML(element, html)
     * @example
     let htmlTrue = base.hasHTML(el, "<div>baller</div>")
     console.log("🚀 ~ file: base.js ~ line 80 ~ htmlTrue", htmlTrue)
     let htmlFalse = base.hasHTML(el, "whatthef")
     console.log("🚀 ~ file: base.js ~ line 82 ~ htmlFalse", htmlFalse)
     let htmltext = base.hasHTML(el, "ll")
     console.log("🚀 ~ file: base.js ~ line 84 ~ htmltext", htmltext)
     * @date 2022-01-05
     * @param {any} element
     * @param {any} html
     * @returns {any}
     */
    hasHTML(element, html) {
        element = this.checkElement(element)
        let get = element.html();
        let stringed = get.toString()
        return stringed.includes(html) ? true : false
    }
    /**
     * hasChild(element, child)
     * @example 
     let ChildTrue1 = base.hasChild(el, ".supergrandchild")
     console.log("🚀 ~ file: base.js ~ line 103 ~ ChildTrue1", ChildTrue1)
     let hasChildFalse = base.hasChild(el, ".what")
     console.log("🚀 ~ file: base.js ~ line 105 ~ hasChildFalse", hasChildFalse)
     * @date 2022-01-05
     * @param {any} element
     * @param {any} child
     * @returns {any}
     */
    hasChild(element, child) {
        element = this.checkElement(element)
        let found = $(child)
        let get = element.find(found)
        return get.length > 0 ? true : false
    }
    /**
     * exists(element)
     let existTrue = base.exists(el)
     console.log("🚀 ~ file: base.js ~ line 90 ~ existTrue", existTrue)
     let existFalse = base.exists($(".love"))
     console.log("🚀 ~ file: base.js ~ line 92 ~ existFalse", existFalse)
     * @date 2022-01-05
     * @param {any} element
     * @returns {any}
     */
    exists(element) {
        element = this.checkElement(element)
        if (element.length) {
            return true;
        } else {
            return false
        }
    }
    /**
     * visible(element)
     * @example
     let visibleTrue = base.visible(el)
     console.log("🚀 ~ file: base.js ~ line 91 ~ visibleTrue", visibleTrue)
     let visibleFalse = base.visible($(".noDisplay"))
     console.log("🚀 ~ file: base.js ~ line 93 ~ visibleFalse", visibleFalse)
     * @date 2022-01-05
     * @param {any} element
     * @returns {any}
     */
    visible(element) {
        element = this.checkElement(element)
        let getDisplayNone = element.is(":visible")
        return getDisplayNone ? true : false
    }
    /**
     * hasCSS(element, key, value)
     let hasCSSFalse = base.hasCSS(el, "color", "#6f57e5")
     console.log("🚀 ~ file: base.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
     let hasCSSTrue = base.hasCSS(el, "display", "flex")
     console.log("🚀 ~ file: base.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)
     * @date 2022-01-05
     * @param {any} element
     * @param {any} key
     * @param {any} value
     * @returns {any}
     */
    hasCSS(element, key, value) {
        element = this.checkElement(element)
        let getValue = element.css(key)
        return getValue === value ? true : false
    }
}


$(() => {
    console.log("hello")
    let el = ".yonas"
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
    let hasCSSFalse = base.hasCSS(el, "color", "#6f57e5")
    console.log("🚀 ~ file: base.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
    let hasCSSTrue = base.hasCSS(el, "display", "flex")
    console.log("🚀 ~ file: base.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)
    // let hasChildTrue = base.hasChild(el, $(".supergrandchild"))
    // console.log("🚀 ~ file: base.js ~ line 101 ~ hasChildTrue", hasChildTrue)
    let ChildTrue1 = base.hasChild(el, ".supergrandchild")
    console.log("🚀 ~ file: base.js ~ line 103 ~ ChildTrue1", ChildTrue1)
    let hasChildFalse = base.hasChild(el, ".what")
    console.log("🚀 ~ file: base.js ~ line 105 ~ hasChildFalse", hasChildFalse)
})