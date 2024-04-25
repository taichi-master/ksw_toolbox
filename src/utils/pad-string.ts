import { replicate } from "./replicate"

export const padLeft = ( str = '', n = 0, padding = ' ' ) => str + replicate( padding, n ).substring( 0, n - str.length )

export function padRight ( str = '', n = 0, padding = ' ' ) {
  const padded = replicate( padding, n ) + str

  return str.length === padded.length ? str : 
    padded.substring( padded.length - n, padded.length + n )
}