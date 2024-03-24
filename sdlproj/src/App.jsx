import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pricing/>
      <FAQ/>
    </>
  )
}

export default App
