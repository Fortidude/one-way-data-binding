import Binder from './Binder';

const binder = new Binder();


test("test bind", () => {
    let model = {
        text: 'lorem ipsum'
    };

    let expectedTemplate = document.createElement('p');
    expectedTemplate.setAttribute('data-bind', 'text');
    expectedTemplate.innerHTML = model.text;

    let template = document.createElement('p');
    template.setAttribute('data-bind', 'text');

    binder.bind(model, template);
    expect(template).toBe(expectedTemplate);
});


test("test updated bind", () => {
    let model = {
        text: 'lorem ipsum'
    };

    let expectedTemplate = document.createElement('p');
    expectedTemplate.setAttribute('data-bind', 'text');
    expectedTemplate.innerHTML = "lorem ipsum updated";

    let template = document.createElement('p');
    template.setAttribute('data-bind', 'text');

    binder.bind(model, template);

    model.text = "lorem ipsum updated";

    expect(template).toBe(expectedTemplate);
});