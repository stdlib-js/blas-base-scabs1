/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var Float32Array = require( '@stdlib/array-float32' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var scabs1 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( scabs1 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scabs1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sum of the absolute values of the real and imaginary components of a complex number', opts, function test( t ) {
	var expected;
	var re;
	var im;
	var y;
	var i;

	re = new Float32Array( [ 5.0, -3.0, 0.0, 0.0, 3.0 ] );
	im = new Float32Array( [ 3.0, 4.0, 0.0, -0.0, 0.0 ] );
	expected = new Float32Array( [ 8.0, 7.0, 0.0, 0.0, 3.0 ] );

	for ( i = 0; i < re.length; i++ ) {
		y = scabs1( new Complex64( re[ i ], im[ i ] ) );
		t.equal( y, expected[ i ], 'returns expected value. re: '+re[i]+'. im: '+im[i]+'. expected: '+expected[i]+'.' );
	}
	t.end();
});

tape( 'if either the real or imaginary component is `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = scabs1( new Complex64( NaN, 3.0 ) );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = scabs1( new Complex64( 5.0, NaN ) );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = scabs1( new Complex64( NaN, NaN ) );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});
