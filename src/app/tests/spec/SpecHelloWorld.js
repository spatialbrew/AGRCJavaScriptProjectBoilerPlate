require([
    'app/HelloWorld'

], function (
    ClassUnderTest
) {
	var testWidget;

	afterEach(function () {
        if (testWidget) {
            if (testWidget.destroy) {
                testWidget.destroy();
            }

            testWidget = null;
        }
    });

    beforeEach(function () {
        testWidget = new ClassUnderTest();
    });

   describe('Sanity', function () {
        it('should create a HelloWorld', function () {
            expect(testWidget).toEqual(jasmine.any(ClassUnderTest));
            expect(testWidget.helloTest()).toBe("Hello world!");
        });
    });

});
