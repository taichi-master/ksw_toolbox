export function flip ( value: number, size: number, isOkay = true ) {
  return isOkay ? ( size - value ) % size : value
}

export function flipOn子 ( value: number, isOkay = true ) {
  return flip( value, 12, isOkay ) 
}

export function flipOn寅 ( value: number, isOkay = true ) {
  return flip( value - 4, 12, isOkay ) 
}