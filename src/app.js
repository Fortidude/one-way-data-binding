import Binder from './bind/Binder';
import Observer from './observer/Observer';

let model = {
    label: 0,
    property: 'property value',
    url: 'http://example.url',
};

const dataBinder = new Binder();
const ObserverInstance = new Observer();

ObserverInstance.callback = dataBinder.update;
model = ObserverInstance.observe(model);

dataBinder.bind(model, document.getElementsByTagName('body')[0]);

setInterval(_ => {
    model.label = model.label + 1;
}, 1000);

setTimeout(_ => {
    model.property = "updated! after 2 sec";
    model.url = "http://url-changed-after-2-sec.com";
}, 2000);
