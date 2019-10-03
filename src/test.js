const litr = require('../index');
const fs = require('fs');

let strings = (path) => fs.readFileSync(`src/${path}.txt`, 'UTF8')
    .split(/\n(?! )/)
    .filter(s => s.length > 0)
    .map(s => ({text: s, name: s.trim().replace(/\s+/g, ' ')}))


for (let {text, name} of strings('test-ok')) {
    let value = eval('(' + text + ')');

    if (!value || typeof value !== 'object') {
        test(name, () => expect(litr.parse(text)).toBe(value));
    } else if (value instanceof RegExp) {
        test(name, () => expect(litr.parse(text).toString()).toBe(text));
    } else {
        test(name, () => expect(litr.parse(text)).toEqual(value));
    }
}


for (let {text, name} of strings('test-fail')) {
    test('err: ' + name, () => expect(() => litr.parse(text)).toThrow(SyntaxError));
}
