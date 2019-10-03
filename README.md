## litr

`litr` evaluates JavaScript literals. `litr` doesn't use `eval` and is safe to use.

Internally, `litr` is a thin wrapper around a [PEG.js](https://pegjs.org) parser, generated from a stripped-down version of the [PEG Javscript Grammar](https://github.com/pegjs/pegjs/blob/master/examples/javascript.pegjs).


### example

```
const litr = require('litr');

const someJsString = `[
    { name: 'Venus', mass: 4.8675e+24,  flags: 0b1101, population: 0, },
    { name: 'Earth', mass: 5.97237e+23, flags: 0b1000, population: 7734484600n, },
]`;

try {
    const result = litr.parse(someJsString);
    console.log(result);
} catch(err) {
    console.log('SYNTAX ERROR!', err.message);
}

> [
>   { name: 'Venus', mass: 4.8675e+24, flags: 13, population: 0 },
>   { name: 'Earth', mass: 5.97237e+23, flags: 8, population: 7734484600n }
> ]
```


### use cases

- convert big amounts of data from Javascript to JSON
- deal with servers and APIs that return Javascript
- using user-provided data in calculations
- configuration files that contain values not easily expressed in JSON, e.g. regexes or bigints


### what is supported

- decimal number literals (plain and scientific notation)
- hex, octal and binary literals
- `BigInt` literals (`123456n`)
- "signed" number literals (`+123`, `-0xFEFE`)
- single and double quoted strings, including "wide" unicode escapes, e.g `"\u{1F44F}"`
- `RegExp` literals (no validity check)
- arrays (with "elisions") and objects


### usage

```
npm install litr
```

For browsers, grab `litr.js`.

`litr` provides a single function `parse(string)` which returns a Javascript value on success or throws a `SyntaxError` on failure.

