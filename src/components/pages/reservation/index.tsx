import React from 'react'
import styled from 'styled-components'
import DatePicker from '../../date-picker'
import { Available } from '../../reservation-status-dropdown/index.stories'
import TimePicker from '../../time-picker'
import MeetingRoomItem from '../../meeting-room-item'
import Header from '../../header/header'


// const Header = styled.header`
//   background-color: #344551;
//   height: 150px;
// `

const ContainerWrapper = styled.div`
  width: 900px; 
   display: flex;
  justify-content: center;
 `

const CardContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
`

const BackgroundWrapper = styled.div`
  background-color: #809EAB;
  margin: 0px 120px;
`

const DropDownWrapper = styled.div`
  display: flex;
  justify-content: flex-end; 

`
const CardWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px
`

const ReservationContent = () => {
  return (
    <div>
      <Header/>
      <BackgroundWrapper>
      <DropDownWrapper>   
        <DatePicker/>
        <TimePicker/>
        <Available/>
      </DropDownWrapper>

      <CardContainer>
      <CardWrapper>
        <div>
        <MeetingRoomItem />
        <MeetingRoomItem />
        <MeetingRoomItem />
        </div>
        <div>
        <MeetingRoomItem />
        <MeetingRoomItem />
        <MeetingRoomItem />
        </div>
        <div>
        <MeetingRoomItem />
        <MeetingRoomItem />
        <MeetingRoomItem />
        </div>
      </CardWrapper>
      </CardContainer>
      </BackgroundWrapper>
    </div>
  )
}

export default ReservationContent
