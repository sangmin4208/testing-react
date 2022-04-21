import { useMemo, useState } from 'react'
import './App.css'

const [first, second] = ['tomato', 'blue']

function App() {
  const [buttonColor, setButtonColor] = useState(first)
  const text = useMemo(
    () =>
      buttonColor === first ? `Change to ${second}` : `Change to ${first}`,
    [buttonColor]
  )
  const toggleButtonColor = () => {
    setButtonColor((prev) => (prev === first ? second : first))
  }
  return (
    <div>
      <button
        onClick={toggleButtonColor}
        style={{ backgroundColor: buttonColor }}
      >
        {text}
      </button>
    </div>
  )
}

export default App
