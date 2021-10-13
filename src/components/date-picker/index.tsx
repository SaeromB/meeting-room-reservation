import styled from 'styled-components'
import React from 'react'

const DatePicker = () => {
  return (
    <DateInput type="date"> 
    </DateInput>
  )
}

const DateInput = styled.input`
  width: 84px;
  height: 24px;
  border-radius: 30px;
`
export default DatePicker
