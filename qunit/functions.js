function add(a, b) {
    return a + b;
}

QUnit.module('add', function() {
    QUnit.test('two numbers', function(assert) {
        assert.equal(add(1, 2), 3);
    });
});

QUnit.module("test click", function(assert) {

    QUnit.test('two numbers', function(assert) {
        let button = $(".button")
        assert.hasClasses(button, "hello")
    });

    QUnit.test("has class", function(assert) {
        assert.dom('input[type="password"]').hasClass('secret-password-input');
    })
})