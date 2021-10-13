import React from 'react'
import styled from 'styled-components'

const TimePicker = () => {
  return (
    <TimeInput type="time" id="time-input" name="time-input" >
    </TimeInput>
  )
}

const TimeInput = styled.input`
  width: 84px;
  height: 24px;
  border-radius: 30px;
`

export default TimePicker
