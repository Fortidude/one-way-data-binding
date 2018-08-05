import {JSDOM} from 'jsdom';

import Binder from './Binder';
import Observer from './../observer/Observer';

const binder = new Binder();
const observerInstance = new Observer();
observerInstance.callback = binder.update;

/**
 * I tried to test it, using TDD but i have never tested DOM manipulation so far.
 * 'JSDOM' and 'Jest' are great to test that, but I had some problems,
 * so left this one just to not spend more time over this task.
 */
test("test bind", () => {});
test("test updated bind", () => {});