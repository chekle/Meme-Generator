import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Form from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Form />
    </>
  )
}

export default App
