import {describe, expect, test} from '@jest/globals'
import delay from '../delay'

describe( 'utils', function() {

    test( 'delay without second parameter', function () {
        expect.assertions(1) // Ensures that at least one assertion is called

        return expect( delay( 0 ) ).resolves.toBe( undefined )
    })

    test( 'delay with a second parameter', function () {
        expect.assertions(1) // Ensures that at least one assertion is called

        return expect( delay( 0, 'Done' ) ).resolves.toBe( 'Done' )
    })

    test( 'delay with a function', function () {
        expect.assertions(1) // Ensures that at least one assertion is called

        return expect( delay( 0, () => 'abc' ) ).resolves.toBe( 'abc' )
    })

    test( 'delay with async/await', async function () {
        expect( await delay( 0, 'abc' )).toBe( 'abc' )
    })

    test( 'delay with then', function ( done ) {

        delay( 0, 'abc' ).then( result => {
            expect( result ).toBe( 'abc' )
            done()
        })
    })
})
