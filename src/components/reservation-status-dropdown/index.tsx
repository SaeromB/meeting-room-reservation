import React from 'react';
import styled from 'styled-components';


const Select = styled.select`
  width: 84px;
  height: 24px;
  text-align-last: center;
  border-radius: 30px;
  margin-left: 8px;
  border: none;
`

const Option = styled.option`
  font-size: 14px;
`

const ReservationStatusDropdown = () => {
  return (
    <Select>
      <Option>예약가능</Option>
      <Option>예약불가능</Option>
    </Select>

  )
}


export default ReservationStatusDropdown;
