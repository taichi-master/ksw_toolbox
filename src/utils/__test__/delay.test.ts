import { describe, expect, it, vi } from 'vitest'

//typescript
// Necessary imports
import { delay } from '../delay'

// Unit tests for the delay function using vi
describe( 'delay function', () => {
  vi.useFakeTimers()

  it( 'should resolve with undefined after time ms when no value is provided', () => {
    const promise = delay( 1000 )

    vi.advanceTimersByTime( 1000 )
    return expect( promise ).resolves.toBeUndefined()
  } )

  it( 'should resolve with a value after time ms when a value is provided', () => {
    const testValue = 'test'
    const promise = delay( 500, testValue )

    vi.advanceTimersByTime( 500 )
    return expect( promise ).resolves.toEqual( testValue )
  } )

  it( 'should resolve the return value of the function after time ms when a function is provided as value', () => {
    const returnValue = 'return value'
    const fn = vi.fn().mockReturnValue( returnValue )
    const promise = delay( 300, fn )

    vi.advanceTimersByTime( 300 )
    expect( fn ).toHaveBeenCalled()
    return expect( promise ).resolves.toEqual( returnValue )
  } )

  it( 'should only resolve after the specified time has elapsed', () => {
    const promise = delay( 2000, 'delayed' )

    vi.advanceTimersByTime( 1999 )
    const checkPromise = promise.then( () => 'time passed' )

    vi.advanceTimersByTime( 1 )
    return expect( checkPromise ).resolves.toEqual( 'time passed' )
  } )

  it( 'should handle zero milliseconds delay', () => {
    const value = 'instant'
    const promise = delay( 0, value )

    vi.advanceTimersByTime( 0 )
    return expect( promise ).resolves.toEqual( value )
  } )

  it( 'should reject if setTimeout throws an error', () => {
    const error = new Error( 'Error in setTimeout' )

    vi.spyOn( global, 'setTimeout' ).mockImplementationOnce( () => { throw error } )
    const promise = delay( 1000 )

    expect( promise ).rejects.toEqual( error )
    vi.restoreAllMocks()
  } )

  it( 'should resolve correctly if delay is a negative number', () => {
    const negativeDelayValue = 'negativeDelay'
    const promise = delay( -100, negativeDelayValue )

    vi.advanceTimersByTime( 100 )
    return expect( promise ).resolves.toEqual( negativeDelayValue )
  } )

} )
//