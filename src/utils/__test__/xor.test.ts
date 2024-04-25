import { describe, test, expect } from 'vitest'
import { XOR } from '../xor'

describe( 'XOR', function () {
  test( 'xor', function (){
    expect( XOR( 0, 0 ) ).toBe( 0 )
    expect( XOR( 0, 1 ) ).toBe( 1 )
    expect( XOR( 1, 0 ) ).toBe( 1 )
    expect( XOR( 1, 1 ) ).toBe( 0 )

    expect( XOR( false, false ) ).toBe( false )
    expect( XOR( false, true ) ).toBe( true )
    expect( XOR( true, false ) ).toBe( true )
    expect( XOR( true, true ) ).toBe( false )
  } )
} )