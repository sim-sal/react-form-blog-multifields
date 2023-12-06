import { useState } from 'react'
import MyFormData from './components/MyFormData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyFormData />
    </>
  )
}

export default App
