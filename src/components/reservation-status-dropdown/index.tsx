import React from 'react';
import styled from 'styled-components';

const ReservationStatusDropdown = () => {
  return (
    <Select>
      <Option>예약가능</Option>
      <Option>예약불가능</Option>
    </Select>

  )
}

const Select = styled.select`
  width: 84px;
  height: 24px;
  text-align-last: center;
  border-radius: 30px;
`

const Option = styled.option`
  font-size: 14px;
`
export default ReservationStatusDropdown
