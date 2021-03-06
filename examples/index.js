/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs-read-file' );
var reduceAsync = require( './../lib' );

var files = [
	resolve( __dirname, '..', 'package.json' ),
	resolve( __dirname, '..', 'README.md' )
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
