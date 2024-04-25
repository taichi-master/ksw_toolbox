import { describe, it, expect } from 'vitest'

import { WrapAroundCounter, clockForward, clockBackward } from '../wrap-around-counter'

describe( 'WrapAroundCounter', function () {
  it( 'can be instantiated', function () {
    expect( new WrapAroundCounter( 0 ) ).toBeInstanceOf( WrapAroundCounter )
  } )

  it( 'has countForward', function () {
    let counter = new WrapAroundCounter( 3 ),
        count = 0

    expect( count = counter.countForward( count, 0 ) ).toBe( 0 )
    expect( count = counter.countForward( count, 1 ) ).toBe( 1 )
    expect( count = counter.countForward( count, 1 ) ).toBe( 2 )
    expect( count = counter.countForward( count, 1 ) ).toBe( 0 )
    expect( count = counter.countForward( count, 2 ) ).toBe( 2 )
    expect( count = counter.countForward( count, 5 ) ).toBe( 1 )

    counter = new WrapAroundCounter( 3, 3 )
    count = 3
    expect( count = counter.countForward( count, 0 ) ).toBe( 3 )
    expect( count = counter.countForward( count, 1 ) ).toBe( 4 )
    expect( count = counter.countForward( count, 1 ) ).toBe( 5 )
    expect( count = counter.countForward( count, 1 ) ).toBe( 3 )
    expect( count = counter.countForward( count, 2 ) ).toBe( 5 )
    expect( count = counter.countForward( count, 5 ) ).toBe( 4 )
  } )

  it( 'has countBackward', function () {
    let counter = new WrapAroundCounter( 3 ),
        count = 1

    expect( count = counter.countBackward( count, 0 ) ).toBe( 1 )
    expect( count = counter.countBackward( count, 1 ) ).toBe( 0 )
    expect( count = counter.countBackward( count, 1 ) ).toBe( 2 )
    expect( count = counter.countBackward( count, 1 ) ).toBe( 1 )
    expect( count = counter.countBackward( count, 5 ) ).toBe( 2 )

    counter = new WrapAroundCounter( 3, 3 )
    count = 3
    expect( count = counter.countBackward( count, 0 ) ).toBe( 3 )
    expect( count = counter.countBackward( count, 1 ) ).toBe( 5 )
    expect( count = counter.countBackward( count, 1 ) ).toBe( 4 )
    expect( count = counter.countBackward( count, 1 ) ).toBe( 3 )
    expect( count = counter.countBackward( count, 2 ) ).toBe( 4 )
    expect( count = counter.countBackward( count, 5 ) ).toBe( 5 )
  } )

  it( 'clockForward', function () {
    let count = 1

    expect( count = clockForward( count ) ).toBe( 2 )
    expect( count = clockForward( count ) ).toBe( 3 )
    expect( count = clockForward( count ) ).toBe( 4 )
    expect( count = clockForward( count ) ).toBe( 5 )
    expect( count = clockForward( count ) ).toBe( 6 )
    expect( count = clockForward( count ) ).toBe( 7 )
    expect( count = clockForward( count ) ).toBe( 8 )
    expect( count = clockForward( count ) ).toBe( 9 )
    expect( count = clockForward( count ) ).toBe( 10 )
    expect( count = clockForward( count ) ).toBe( 11 )
    expect( count = clockForward( count ) ).toBe( 12 )
    expect( count = clockForward( count ) ).toBe( 1 )
    expect( count = clockForward( count ) ).toBe( 2 )
  } )
  
  it( 'clockBackward', function () {
    let count = 1

    expect( count = clockBackward( count ) ).toBe( 12 )
    expect( count = clockBackward( count ) ).toBe( 11 )
    expect( count = clockBackward( count ) ).toBe( 10 )
    expect( count = clockBackward( count ) ).toBe( 9 )
    expect( count = clockBackward( count ) ).toBe( 8 )
    expect( count = clockBackward( count ) ).toBe( 7 )
    expect( count = clockBackward( count ) ).toBe( 6 )
    expect( count = clockBackward( count ) ).toBe( 5 )
    expect( count = clockBackward( count ) ).toBe( 4 )
    expect( count = clockBackward( count ) ).toBe( 3 )
    expect( count = clockBackward( count ) ).toBe( 2 )
    expect( count = clockBackward( count ) ).toBe( 1 )
    expect( count = clockBackward( count ) ).toBe( 12 )
  } )
} )