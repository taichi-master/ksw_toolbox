export class WrapAroundCounter {
  #size
  #base

  constructor ( size: number, base = 0 ) {
    this.#size = size
    this.#base = base
  }

  countForward = ( count: number, tick = 1 ) => ( count + tick - this.#base ) % this.#size + this.#base

  countBackward = ( count: number, tick = 1 ) => ( count + this.#size - ( tick + this.#base ) % this.#size ) % this.#size + this.#base
}

const clockCounter = new WrapAroundCounter( 12, 1 )

export function clockForward ( count: number, tick = 1 ) {
  return clockCounter.countForward( count, tick )
}

export function clockBackward ( count: number, tick = 1 ) {
  return clockCounter.countBackward( count, tick )
}