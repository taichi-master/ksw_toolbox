import { describe, test, expect } from 'vitest'
import { range } from '../range'

describe( 'range', function () {
  test( 'size only', function (){
    expect( range( 3 ) ).toEqual( [ 0, 1, 2 ] )
  } )

  test( 'start and size', function (){
    expect( range( 1, 3 ) ).toEqual( [ 1, 2, 3 ] )
  } )

  test( 'start, size and skip', function (){
    expect( range( 0, 6, 2 ) ).toEqual( [ 0, 2, 4, 6, 8, 10 ] )
  } )
} )