import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />) // App component를 virtual DOM에 생성
  // screen을 통해 Virtual Dom 탐색
  // const linkElement = screen.getByText(/learn react testing library/i) // regualr expression
  const linkElement = screen.getByRole('link', {
    name: /learn react testing library/i,
  })
  // assertion - matcher
  expect(linkElement).toBeDisabled()
})
