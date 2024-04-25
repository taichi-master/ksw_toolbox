import { describe, it, expect } from 'vitest'
import * as utils from '../index'

describe( 'Utils index', function () {
  it( 'has these functions', function () {
    expect( utils.across ).toBeInstanceOf( Function ) 
    // expect( utils.range ).toBeInstanceOf( Function ) 
  } )
} )