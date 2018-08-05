/**
 *
 * @Author Artur Schroeder <schroeder.artur@hotmail.com>
 *
 */
class Binder {

    /**
     * Should be public or private? Up to you guys. In my opinion - public. let's leave it configurable.
     *
     * @type {[*]}
     */
    availableAttributes = [
        'href',
        'src',
        'alt',
        'title'
    ];

    _model = null;
    _template = null;

    bind = (models, template) => {
        this._model = models;
        this._template = template;

        this.update();
    };

    update = () => {
        this._tryToBindHTML(this._model);
        this._tryToBindAttributes(this._model);
    };

    _tryToBindHTML = (model) => {
        let nodes = this._template.querySelectorAll('[data-bind]');
        nodes.forEach(node => {
            const propertyValueToBind = this._getPropertyValueToBind(node, 'data-bind');
            if (propertyValueToBind in model) {
                node.innerText = model[propertyValueToBind];
            }
        })
    };

    _tryToBindAttributes = (model) => {
        this.availableAttributes.forEach(attribute => {
            let nodes = this._template.querySelectorAll(`[data-bind-${attribute}]`);

            nodes.forEach(node => {
                const propertyValueToBind = this._getPropertyValueToBind(node, `data-bind-${attribute}`);
                const attributeName = attribute.replace('data-bind', '');
                if (propertyValueToBind in model) {
                    node.setAttribute(attributeName, model[propertyValueToBind]);
                }
            })
        })
    };

    _getPropertyValueToBind = (node, propertyName) => {
        const index = Array.from(node.attributes)
            .findIndex(attribute => {
                return attribute.nodeName === propertyName;
            });

        return node.attributes[index].value;
    }
}

export default Binder;
