/**
 *
 * @Author Artur Schroeder <schroeder.artur@hotmail.com>
 *
 * EcmaScript / JavaScript does not implement universal Watch / Observable
 *
 */
class Observer {
    callback = () => {
        console.log('callback');
    };

    observe = (model) => {
        return new Proxy(model, {get: this.get, set: this.set});
    };

    get = (target, name) => {
            const value = name in target ? target[name] : (target[name] = {});
            return typeof value === "object" ? new Proxy(value, {get: this.get, set: this.set}) : value;
    };

    set = (target, key, value) => {
        target[key] = value;
        this.callback();
        return true;
    }
}

export default Observer;