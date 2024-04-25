import { describe, test, expect } from 'vitest'
import { flip, flipOn子, flipOn寅 } from '../flip'
import { range } from '../range'

describe( 'flip', function () {

  test( 'flip n', function () {
    const size = 5

    range( size ).forEach( function ( i ) {
      expect( flip( i, size ) ).toBe( ( size - i ) % size )
      expect( flip( i, size, false ) ).toBe( i )
    } )
  } )

  test( 'flipOn子', function () {
    expect( flipOn子( 0 ) ).toBe( 0 )
    expect( flipOn子( 1 ) ).toBe( 11 )
    expect( flipOn子( 2 ) ).toBe( 10 )
    expect( flipOn子( 3 ) ).toBe( 9 )
    expect( flipOn子( 4 ) ).toBe( 8 )
    expect( flipOn子( 5 ) ).toBe( 7 )
    expect( flipOn子( 6 ) ).toBe( 6 )
    expect( flipOn子( 7 ) ).toBe( 5 )
    expect( flipOn子( 8 ) ).toBe( 4 )
    expect( flipOn子( 9 ) ).toBe( 3 )
    expect( flipOn子( 10 ) ).toBe( 2 )
    expect( flipOn子( 11 ) ).toBe( 1 )
  } )

  test( 'flipOn寅', function () {
    expect( flipOn寅( 0 ) ).toBe( 4 )
    expect( flipOn寅( 1 ) ).toBe( 3 )
    expect( flipOn寅( 2 ) ).toBe( 2 )
    expect( flipOn寅( 3 ) ).toBe( 1 )
    expect( flipOn寅( 4 ) ).toBe( 0 )
    expect( flipOn寅( 5 ) ).toBe( 11 )
    expect( flipOn寅( 6 ) ).toBe( 10 )
    expect( flipOn寅( 7 ) ).toBe( 9 )
    expect( flipOn寅( 8 ) ).toBe( 8 )
    expect( flipOn寅( 9 ) ).toBe( 7 )
    expect( flipOn寅( 10 ) ).toBe( 6 )
    expect( flipOn寅( 11 ) ).toBe( 5 )
  } )
} )