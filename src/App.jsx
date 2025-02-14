import { useState } from 'react'

import Titulo from './components/Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=''>Sua csa</h1>
      <Titulo />
    </>
  )
}

export default App
