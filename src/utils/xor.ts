export function XOR ( a: number | boolean, b: number | boolean ) {
  return a ? ( typeof b === 'number' ? 1 - b : !b ) : b
}