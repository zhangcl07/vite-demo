import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss'

const componentsList = [
  {
    path: '/card',
    name: 'Card',
  },
]
function App() {
  return (
    <div className="App">
      <header>
        <h1>组件demo</h1>
      </header>
      <ul className="components-list">
        {componentsList.map((e) => {
          return (
            <li key={e.path}>
              <Link to={e.path}>{e.name}组件</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
