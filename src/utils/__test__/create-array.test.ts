
import { describe, expect, test } from 'vitest'
import { createArray } from '../create-array'

describe( 'createArray', function () {

  test( 'no parameter', function () {
    expect( createArray() ).toEqual( [] )
  } )

  test( 'size = 0', function () {
    expect( createArray( 0 ) ).toEqual( [] )
  } )

  test( 'size = 1', function () {
    expect( createArray( 1 ) ).toEqual( [ undefined ] )
  } )

  test( 'size = 3', function () {
    expect( createArray( 3 ) ).toEqual( [ undefined, undefined, undefined ] )
  } )

} )