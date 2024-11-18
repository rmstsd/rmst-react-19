import ReactDOM from 'react-dom/client'
import App from './App'

import './main.less'

import d from 'rmst-design'
console.log('d', d)

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(<App />)
}

// 15026583648
