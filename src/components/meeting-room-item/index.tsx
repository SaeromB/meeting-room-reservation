import React, { FC } from 'react'
import styled from 'styled-components'


const MeetingRoomItem: FC<any> = (props) => {
  return (
    <MobileContainer>
      <Image src="https://via.placeholder.com/250x150" alt="placeholder"/ >
      <RoomName>데일리 스텐드업</RoomName>
      <ReserveButton><ButtonText>예약하기</ButtonText></ReserveButton>
    </MobileContainer>
  )
}

const MobileContainer = styled.div`
  display: block;
  width: 250px;
  height: 350px;
  text-align: center;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  margin-right: 16px;
`

const Image = styled.img`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`

const RoomName = styled.div`
 justify-content: center;
 margin-top: 40px;
 font-size: 20px;
 /* font family */
`

const ReserveButton = styled.button`
  justify-content: center;
  background-color: #46C13C;
  border: none;
  border-radius: 15px;
  margin-top: 40px;
`
const ButtonText = styled.span`
  display: inline-block;
  padding: 8px 40px;
  font-size: 16px;
  color: #ffffff;
  /* font-family */
`


export default MeetingRoomItem
