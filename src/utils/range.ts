export function range ( begin: number, size?: number, skip = 1 ): number[] {
  if ( !size ) {
    size = begin
    begin = 0
  }
  return [ ...( new Array( size ) ) ].map( ( _size, i ) => begin + i * skip )
}