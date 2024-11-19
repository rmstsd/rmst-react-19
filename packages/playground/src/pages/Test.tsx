import { Suspense, use, useState } from 'react'
import { api } from '../api'

export default function Test() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Display id={1} />
        <Display id={2} />
        <Display id={3} />
      </Suspense>
    </div>
  )
}

function Display({ id }) {
  const [p] = useState(() => api(id))
  const data = use(p)

  return <div>{data}</div>
}
