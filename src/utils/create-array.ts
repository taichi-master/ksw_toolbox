'use strict'

// Array(3) = []
// but if you need [undefined, undefined, undefined]

export function createArray ( size = 0 ) {
  return [ ...Array( size ) ]
}

// function createArray ( size = 0 ) {
//   return Array.apply( null, Array( size ) )
// }

// module.exports = {
//   createArray
// }
