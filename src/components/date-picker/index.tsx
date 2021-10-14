import styled from 'styled-components'
import React from 'react'

const DateInput = styled.input`
  width: 84px;
  height: 24px;
  border-radius: 30px;
  border: none;
  margin-left: 8px;
`

const DatePicker = () => {
  return (
    <DateInput type="date"> 
    </DateInput>
  )
}

export default DatePicker
