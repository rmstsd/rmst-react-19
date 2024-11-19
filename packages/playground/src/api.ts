import { random } from 'es-toolkit'

export const api = (da = 0) => {
  const abs = new AbortController()

  const p = fetch(`https://echo.apifox.com/delay/${random(0.3, 2)}`, { signal: abs.signal }).then(() => da)

  return p
}
