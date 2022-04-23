import { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true)
  const toggleDisabled = ({ target: { checked } }) => {
    setDisabled(!checked)
  }
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  )
  return (
    <div>
      <button disabled={disabled}>confirm order</button>
      <input onClick={toggleDisabled} type="checkbox" id="check" />
      <OverlayTrigger placement="right" overlay={popover}>
        <label htmlFor="check">terms and conditions</label>
      </OverlayTrigger>
    </div>
  )
}

export default SummaryForm
