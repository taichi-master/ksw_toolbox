import {describe, expect, it} from '@jest/globals'
import hello from '../hello'

describe( 'utils', function() {
    it( 'hello', function () {
        expect( hello( 'World' ) ).toBe( 'Hello, World!' )
    })
})
