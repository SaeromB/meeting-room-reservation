import React from 'react'
import styled from 'styled-components'


const TimeInput = styled.input`
  width: 84px;
  height: 24px;
  border-radius: 30px;
  border: none;
  margin-left: 8px;
`

const TimePicker = () => {
  return (
    <TimeInput type="time" id="time-input" name="time-input" >
    </TimeInput>
  )
}


export default TimePicker
