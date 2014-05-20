describe('notes page', function () {
    it('should display right number of categories', function () {
        browser.get('http://localhost:3010/');

        var categories = element.all(by.repeater('category in data.categories'))
        expect(categories.count()).toEqual(2);
    });
});