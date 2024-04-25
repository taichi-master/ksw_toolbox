import { describe, expect, test } from 'vitest'
import { padLeft, padRight } from '../pad-string'

describe( 'padLeft', function () {
  test( 'default', function () {
    expect( padLeft() ).toBe( '' )
  } )

  test( 'missing size and pad parameters', function () {
    expect( padLeft( 'abc' ) ).toBe( 'abc' )
  } )

  test( 'missing pad parameter', function () {
    expect( padLeft( 'abc', 5 ) ).toBe( 'abc  ' )
  } )

  test( 'size = 0', function () {
    expect( padLeft( 'abc', 0, '#' ) ).toBe( 'abc' )
  } )

  test( 'char', function () {
    expect( padLeft( 'abc', 5, '#' ) ).toBe( 'abc##' )
  } )

  test( 'string', function () {
    expect( padLeft( 'abc', 5, '123' ) ).toBe( 'abc12' )
  } )
} )

describe( 'padRight', function () {
  test( 'default', function () {
    expect( padRight() ).toBe( '' )
  } )

  test( 'missing size and pad parameters', function () {
    expect( padRight( 'abc' ) ).toBe( 'abc' )
  } )

  test( 'missing pad parameter', function () {
    expect( padRight( 'abc', 5 ) ).toBe( '  abc' )
  } )

  test( 'size = 0', function () {
    expect( padRight( 'abc', 0, '#' ) ).toBe( 'abc' )
  } )

  test( 'char', function () {
    expect( padRight( 'abc', 5, '#' ) ).toBe( '##abc' )
  } )

  test( 'string', function () {
    expect( padRight( 'abc', 5, '123' ) ).toBe( '23abc' )
  } )
} )