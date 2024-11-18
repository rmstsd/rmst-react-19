import clsx from 'clsx'
import { random } from 'es-toolkit'
import { useOptimistic, useRef, useState, useTransition } from 'react'

const api = () => {
  const abs = new AbortController()

  const p = fetch(`https://echo.apifox.com/delay/${random(0, 2)}`, { signal: abs.signal })
  p.abort = () => {
    abs.abort()
  }

  return p
}

export default function Zan() {
  const [bool, setBool] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [optsBool, addOptimistic] = useOptimistic(bool, (current, optsBool) => {
    return optsBool
  })

  const prev = useRef(null)

  const handleClick = () => {
    const nv = !optsBool

    startTransition(() => {
      addOptimistic(nv)

      if (prev.current) {
        console.log(prev.current)
        prev.current.abort()
      }

      const p = api()
      prev.current = p

      return p.then(() => {
        setBool(nv)
      })
    })
  }

  return (
    <div>
      <div className="p-5">
        <button className={clsx('text-lg', optsBool ? 'text-red-400' : '')} onClick={handleClick}>
          Zan
        </button>

        {isPending && <>Loading...</>}
      </div>
    </div>
  )
}
