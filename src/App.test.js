import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
const [before, after] = ['tomato', 'pink']

test(`render button`, () => {
  render(<App />)
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: `Change to ${after}` })

  // expect the background color to be tomato
  expect(colorButton).toHaveStyle({ backgroundColor: before })

  // click button
  fireEvent.click(colorButton)

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: after })

  // expect the button text to be 'Change to tomato'
  expect(colorButton).toHaveTextContent(`Change to ${before}`)
})

test('initial conditions', () => {
  render(<App />)
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: `Change to ${after}` })
  expect(colorButton).toBeEnabled()
  // check that the check box starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: `Change to ${after}` })
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test(`Disabled button has gray background and reverts to ${before}`, () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: `Change to ${after}` })
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle(`background-color: ${before}`)
})

test(`Disabled button has gray background and reverts to ${after}`, () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: `Change to ${after}` })
  fireEvent.click(colorButton)
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle(`background-color: ${after}`)
})
