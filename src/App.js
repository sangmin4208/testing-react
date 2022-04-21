import { useMemo, useState } from 'react'
import './App.css'

const [first, second] = ['tomato', 'pink']

function App() {
  const [buttonColor, setButtonColor] = useState(first)
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = useMemo(
    () =>
      buttonColor === first ? `Change to ${second}` : `Change to ${first}`,
    [buttonColor]
  )
  const toggleButtonColor = () => {
    setButtonColor((prev) => (prev === first ? second : first))
  }
  const handleClickCheck = ({ target: { checked } }) => {
    setDisabled(checked)
  }

  return (
    <div>
      <button
        onClick={toggleButtonColor}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        disabled={disabled}
      >
        {newButtonColor}
      </button>
      <input
        id="disable-button-checkbox"
        onClick={handleClickCheck}
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  )
}

export default App
