import { describe, expect, test } from 'vitest'
import { replicate } from '../replicate'

describe( 'replicate', function () {
  test( 'no parameters', function () {
    expect( replicate() ).toBe( '' )
  } )

  test( 'missing the number of replication', function () {
    expect( replicate( '#' ) ).toBe( '#' )
  } )

  test( 'zero repeat', function () {
    expect( replicate( '#', 0 ) ).toBe( '' )
  } )

  test( 'char', function () {
    expect( replicate( '#', 3 ) ).toBe( '###' )
  } )

  test( 'string', function () {
    expect( replicate( 'abc', 3 ) ).toBe( 'abcabcabc' )
  } )
} )