import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Bio from './components/Bio'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Bio/>
      <Projects/>
    </div>
  )
}

export default App
