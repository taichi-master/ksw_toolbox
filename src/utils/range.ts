'use strict'

import { createArray } from "./create-array"

const getSize = ( starting: number, ceiling: number, step: number ) => Math.ceil( ( ceiling - starting ) / step )

// can be used as range_generator()
export function range_array ( starting?: number, ceiling?: number, step = 1 ) {
  if ( typeof ceiling === 'undefined' ) {
    ceiling = starting ?? 0
    starting = 0
  }

  const size = getSize( starting!, ceiling, step )

  return size > 0 ? createArray( size ).map( ( _x, i ) => starting! + i * step ) : []
}

// will need to be used as [ ...range_generator() ]
export function *range_generator ( starting?: number, ceiling?: number, step = 1 ) {
  if ( typeof ceiling === 'undefined' ) {
    ceiling = starting
    starting = 0
  }

  let size = getSize( starting!, ceiling!, step ),
      i = starting

  while ( size > 0 ) {
    yield i
    i! += step
    size--
  }
}

export const range = range_array
// module.exports = {
//   range: range_generator
// }