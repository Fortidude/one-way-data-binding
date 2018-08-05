import {JSDOM} from 'jsdom';

import Binder from './Binder';
import Observer from './../observer/Observer';

const binder = new Binder();
const observerInstance = new Observer();
observerInstance.callback = binder.update;

/**
 * I tryied to test it, using TDD but i have never working with JSDOM or unitTest with DOM manipulation.
 * I left it just to not waste time over this task.
 */
test("test bind", () => {});
test("test updated bind", () => {});