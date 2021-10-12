import React, { useState } from 'react'
import styled from 'styled-components'

// const [isOpen, setIsOpen] = useState(false)

const ReservationStatusDropdown = () => {
  return (
    <DropdownContainer>
      <DropdownHeader>예약 가능</DropdownHeader>
      <DropdownListContainer>
        <DropdownList>
          <ListItem>예약 가능</ListItem>
          <ListItem>예약 불가능</ListItem>
          </DropdownList>
      </DropdownListContainer>
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  width: 160px;
  height: 48px;

`
const DropdownHeader = styled.div`
/* font-family */
  font-size: 14px;
`

const DropdownListContainer = styled.div`
`

const DropdownList = styled.ul`
/* font-family */
  font-size: 14px;
`
const ListItem = styled.li`
`

export default ReservationStatusDropdown
