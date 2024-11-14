import { createContext, use, useContext, useRef } from 'react'
import './App.css'

const Context = createContext(null)

const App = () => {
  const inputRef = useRef<HTMLInputElement>(undefined)

  return (
    <Context value={{ name: 'React' }}>
      <button onClick={() => inputRef.current.focus()} autoFocus>
        focus
      </button>

      <Child ref={inputRef} />
    </Context>
  )
}

export default App

const p = new Promise(r => {
  setTimeout(() => {
    r('hello')
  }, 1000)
})

function Child(props) {
  const { ref } = props
  const c1 = use(Context)
  const d = use(p)

  const c2 = useContext(Context)

  console.log(c1 === c2)

  console.log(c1)

  console.log(ref)

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <span>{c1.name}</span>
      <span>{c2.name}</span>
      {d}
      <input type="text" ref={ref} />
    </div>
  )
}
