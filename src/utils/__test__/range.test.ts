import { describe, test, expect } from 'vitest'
import { range } from '../range'

describe( 'range', function () {
  test( 'default', function () {
    expect( [ ...range() ] ).toEqual( [] )
  } )

  test( 'size zero', function () {
    expect( [ ...range( 0 ) ] ).toEqual( [] )
  } )

  test( 'size one', function () {
    expect( [ ...range( 1 ) ] ).toEqual( [ 0 ] )
  } )

  test( 'size only', function () {
    expect( [ ...range( 3 ) ] ).toEqual( [ 0, 1, 2 ] )
  } )

  test( 'start and end', function () {
    expect( [ ...range( 1, 3 ) ] ).toEqual( [ 1, 2 ] )
  } )

  test( 'start and end', function () {
    expect( [ ...range( 1, 0 ) ] ).toEqual( [] )
  } )

  test( 'start and end', function () {
    expect( [ ...range( 1, 0, 2 ) ] ).toEqual( [] )
  } )

  test( 'start, end and step', function () {
    expect( [ ...range( 0, 7, 2 ) ] ).toEqual( [ 0, 2, 4, 6 ] )
  } )

  test( 'negative step', function () {
    expect( [ ...range( 1, -5, -1 ) ] ).toEqual( [ 1, 0, -1, -2, -3, -4 ] )
  } )

  test( 'bad parameters', function () {
    expect( [ ...range( 1, 5, -1 ) ] ).toEqual( [] )
    expect( [ ...range( 1, -5 ) ] ).toEqual( [] )
  } )
} )