export function across ( i: number, base = 12 ) { // zero base
  const half = base / 2

  i = i + half
  return i % base
}

// module.exports = across