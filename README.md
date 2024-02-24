<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reduceAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a function against an accumulator and each element in a collection and return the accumulated result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import reduceAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-reduce@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-reduce@esm/index.mjs';
```

#### reduceAsync( collection, initial, \[options,] reducer, done )

Applies a function against an accumulator and each element in a `collection` and returns the accumulated result.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];
var acc = {
    'sum': 0
};
reduceAsync( arr, acc, reducer, done );
/*
    3000
    2500
    1000
    6500
*/
```

The `next` callback accepts two arguments: `error` and `accumulator`. The second argument to the `next` callback is passed as the first argument to the provided `reducer`.

<!-- eslint-disable no-use-before-define -->

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, acc );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out === acc );
    // => true
}

var arr = [ 3000, 2500, 1000 ];
var acc = {};

reduceAsync( arr, acc, reducer, done );
```

The function accepts the following `options`:

-   **limit**: the maximum number of pending invocations at any one time. If provided, the function sets `options.series=false`. Default: `infinity`.
-   **series**: boolean indicating whether to sequentially invoke `reducer` for each `collection` element. If `true`, the function sets `options.limit=1`. Default: `true`.
-   **thisArg**: the execution context for `reducer`.

By default, all elements are processed **sequentially**, which means that the function **does** guarantee completion order. To process each `collection` element concurrently, set the `series` option to `false`.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

var opts = {
    'series': false
};

reduceAsync( arr, acc, opts, reducer, done );
/* =>
    1000
    2500
    3000
    6500
*/
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

var opts = {
    'limit': 2
};

reduceAsync( arr, acc, opts, reducer, done );
/* =>
    2500
    3000
    1000
    6500
*/
```

To set the execution context of `reducer`, set the `thisArg` option.

```javascript
function reducer( acc, value, index, next ) {
    this.count += 1;
    setTimeout( onTimeout, value );
    function onTimeout() {
        acc.sum += value;
        next( null, acc );
    }
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

var context = {
    'count': 0
};

var opts = {
    'thisArg': context
};

reduceAsync( arr, acc, opts, reducer, done );

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
    // => 6500

    console.log( context.count );
    // => 3
}
```

When invoked, `reducer` is provided a maximum of five arguments:

-   **accumulator**: accumulated value.
-   **value**: collection value.
-   **index**: collection index.
-   **collection**: the input `collection`.
-   **next**: a callback which should be called once `reducer` has finished processing a collection `value`.

The actual number of provided arguments depends on function `length`. If `reducer` accepts three arguments, `reducer` is provided `accumulator`, `value` and `next`. If `reducer` accepts four arguments, `reducer` is provided `accumulator`, `value`, `index`, and `next`. For every other `reducer` signature, `reducer` is provided all five arguments.

```javascript
function reducer( acc, value, i, collection, next ) {
    console.log( 'collection: %s. %d: %d', collection.join( ',' ), i, value );
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var arr = [ 3000, 2500, 1000 ];

var acc = {
    'sum': 0
};

reduceAsync( arr, acc, reducer, done );
/* =>
    collection: 3000,2500,1000. 0: 3000
    collection: 3000,2500,1000. 1: 2500
    collection: 3000,2500,1000. 2: 1000
    3000
    2500
    1000
    6500
*/
```

#### reduceAsync.factory( \[options,] reducer )

Returns a function which invokes a function once for each element in a `collection`.

```javascript
function reducer( acc, value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        acc.sum += value;
        next( null, acc );
    }
}

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.sum );
}

var f = reduceAsync.factory( reducer );

var arr1 = [ 3000, 2500, 1000 ];

var acc1 = {
    'sum': 0
};

f( arr1, acc1, done );
/* =>
    3000
    2500
    1000
    6500
*/

var arr2 = [ 300, 250, 100 ];

var acc2 = {
    'sum': 0
};

f( arr2, acc2, done );
/* =>
    300
    250
    100
    650
*/
```

The function accepts the same `options` as `reduceAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   The function invokes the `done` callback with the `accumulator` provided as the second argument. If provided an empty `collection`, the function invokes the `done` callback with the `initial` value as the second argument.
-   The function does **not** support dynamic `collection` resizing.
-   The function does **not** skip `undefined` elements.
-   When processing `collection` elements concurrently, **beware** of race conditions when updating an accumulator. This is especially true when an accumulator is a primitive (e.g., a `number`). In general, prefer `object` accumulators, as objects are passed by reference, not by value.
-   **Neither** `reduceAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var resolve = require( 'path' ).resolve;
import readFile from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@esm/index.mjs';
import reduceAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-reduce@esm/index.mjs';

var files = [
    resolve( __dirname, 'package.json' ),
    resolve( __dirname, 'README.md' )
];

function done( error, acc ) {
    if ( error ) {
        throw error;
    }
    console.log( acc.count );
}

function read( acc, file, next ) {
    var opts = {
        'encoding': 'utf8'
    };
    readFile( file, opts, onFile );

    function onFile( error ) {
        if ( error ) {
            return next( null, acc );
        }
        acc.count += 1;
        next( null, acc );
    }
}

var acc = {
    'count': 0
};
reduceAsync( files, acc, read, done );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-async/for-each`][@stdlib/utils/async/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function once for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils-reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>
-   <span class="package-name">[`@stdlib/utils-async/reduce-right`][@stdlib/utils/async/reduce-right]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-reduce.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-reduce

[test-image]: https://github.com/stdlib-js/utils-async-reduce/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-async-reduce/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-reduce/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-reduce?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-reduce.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-reduce/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-reduce/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-reduce/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-reduce/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-reduce/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-reduce/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-reduce/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-reduce/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-reduce/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/async/for-each]: https://github.com/stdlib-js/utils-async-for-each/tree/esm

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils-reduce/tree/esm

[@stdlib/utils/async/reduce-right]: https://github.com/stdlib-js/utils-async-reduce-right/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
