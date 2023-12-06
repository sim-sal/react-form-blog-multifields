import { useState } from 'react'
import Header from './components/hEADER.JSX'
import MyFormData from './components/MyFormData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MyFormData />
    </>
  )
}

export default App
