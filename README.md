<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# scabs1

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the sum of the [absolute values][absolute-value] of the real and imaginary components of a single-precision [complex][@stdlib/complex/float32/ctor] floating-point number.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-scabs1
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var scabs1 = require( '@stdlib/blas-base-scabs1' );
```

#### scabs1( z )

Computes the sum of the [absolute values][absolute-value] of the real and imaginary components of a single-precision [complex][@stdlib/complex/float32/ctor] floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var y = scabs1( new Complex64( 5.0, -3.0 ) );
// returns 8.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var scabs1 = require( '@stdlib/blas-base-scabs1' );

var c;
var i;
for ( i = 0; i < 100; i++ ) {
    c = new Complex64( discreteUniform( -50, 50 ), discreteUniform( -50, 50 ) );
    console.log( 'scabs1(%s) = %d', c.toString(), scabs1( c ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/scabs1.h"
```

#### c_scabs1( c )

Computes the sum of the [absolute values][absolute-value] of the real and imaginary components of a single-precision [complex][@stdlib/complex/float32/ctor] floating-point number.

```c
#include "stdlib/complex/float32/ctor.h"

const stdlib_complex64_t c = stdlib_complex64( 5.0f, -3.0f );

float y = c_scabs1( c );
// returns 8.0f
```

The function accepts the following arguments:

-   **c**: `[in] stdlib_complex64_t` complex number.

```c
float c_scabs1( const stdlib_complex64_t c );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/base/scabs1.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/realf.h"
#include "stdlib/complex/imagf.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.0f ),
        stdlib_complex64( -3.14f, -1.0f ),
        stdlib_complex64( 0.0f, 0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = c_scabs1( x[ i ] );
        printf( "f(%f + %f) = %f\n", stdlib_realf( x[ i ] ), stdlib_imagf( x[ i ] ), y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-scabs1.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-scabs1

[test-image]: https://github.com/stdlib-js/blas-base-scabs1/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-scabs1/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-scabs1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-scabs1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-scabs1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-scabs1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-scabs1/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-scabs1/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-scabs1/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-scabs1/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-scabs1/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-scabs1/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-scabs1/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-scabs1/main/LICENSE

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor

</section>

<!-- /.links -->
