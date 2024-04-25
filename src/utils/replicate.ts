/* eslint-disable @typescript-eslint/no-unused-vars */
import { createArray } from "./create-array"

export function replicate ( str = '', n = 1 ) {
  return createArray( n ).map( _x => str ).join( '' )
}