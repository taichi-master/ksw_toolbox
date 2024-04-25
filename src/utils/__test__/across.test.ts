import { test, expect } from 'vitest'
import { across } from '../across'

test( 'across', function () {
  expect( across( 0 ) ).toBe( 6 )
  expect( across( 1 ) ).toBe( 7 )
  expect( across( 2 ) ).toBe( 8 )
  expect( across( 3 ) ).toBe( 9 )
  expect( across( 4 ) ).toBe( 10 )
  expect( across( 5 ) ).toBe( 11 )
  expect( across( 6 ) ).toBe( 0 )
  expect( across( 7 ) ).toBe( 1 )
  expect( across( 8 ) ).toBe( 2 )
  expect( across( 9 ) ).toBe( 3 )
  expect( across( 10 ) ).toBe( 4 )
  expect( across( 11 ) ).toBe( 5 )
} )

