import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('button has correct initial color(tomato)', () => {
  render(<App />)
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i })

  // expect the background color to be tomato
  expect(colorButton).toHaveStyle({ backgroundColor: 'tomato' })

  // click button
  fireEvent.click(colorButton)

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // expect the button text to be 'Change to tomato'
  expect(colorButton).toHaveTextContent(/change to tomato/i)
})
