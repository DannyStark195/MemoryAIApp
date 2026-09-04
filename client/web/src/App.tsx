import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
     return (
      <>
        <div className=''>
          <h1 className='text-4xl text-blue-800'>{count}</h1>
          <button
            onClick={() =>{setCount(prev => prev +1)}}
          >
            + 1
          </button>
        </div>
      </>
     )
}

export default App
