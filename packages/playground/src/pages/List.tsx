import { random } from 'es-toolkit'
import { Suspense, use, useState } from 'react'

function genPs(p = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ name: random(1) }, { name: random(1) }, { name: random(1) }])
    }, 200)
  })
}

export default function List() {
  const [ps, setPs] = useState(() => [genPs(1)])

  return (
    <div>
      {ps.map((item, idx) => (
        <Suspense fallback={<div>Loading...</div>} key={idx}>
          <ListPage p={item} pageIndex={idx} />
        </Suspense>
      ))}

      <button onClick={() => setPs([...ps, genPs()])}>load more</button>
    </div>
  )
}

function ListPage({ p, pageIndex }) {
  const data = use(p)

  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className="p-2">
          {pageIndex * 3 + idx} - {item.name}
        </div>
      ))}
    </>
  )
}
