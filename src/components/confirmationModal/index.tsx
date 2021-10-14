import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import TimePicker from '../time-picker';

export interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}


export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
justify-content: center;
margin: 16px 0px;
`
export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 80px;
  margin-right: 16px;
`
export const Input = styled.input`
  width: 400px;
  height: 24px;
  border-radius: 30px;
  border: none;
`

export const TimePickerWrpper = styled.div`
  justify-content: center;
  margin: 16px 0px;
`

export const TimePickerlabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 80px;
  margin-right: 16px;
`

export const Message = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 80px;
`;

export const MessageInputWrapper = styled.div`
  text-align: center;
`

export const MessageInput = styled.input`
  width: 480px;
  height: 140px;
  border: none;
`

export const YesButton = styled.button`
  width: 240px;
  height: 48px;
  background-color: #46C13C;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  margin: 40px;
`;

export const NoButton = styled.button`
  width: 240px;
  height: 48px;
  background-color: #F94B25;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  margin: 40px;
  `;

export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (props) => {
  return (
    <React.Fragment>
      {/* 회의 제목 */}
      <Wrapper>
      <Label>회의제목</Label>
          <Input/>
      </Wrapper>
      {/* 회의실 */}
      <Wrapper>
      <Label>회의실</Label>
        {/* <Input/> */}
        {/* 대회의실 1 */}
      </Wrapper>
      {/* 예약자 */}
      <Wrapper>
        <Label>예약자{' '}</Label>
          <Input/>
      </Wrapper>
      <TimePickerWrpper>
      <TimePickerlabel>예약시간</TimePickerlabel>
      <TimePicker/>
      </TimePickerWrpper>
        <Message>{props.message}</Message>
      <MessageInputWrapper>
        <MessageInput type="text"></MessageInput>
      </MessageInputWrapper>
      <ConfirmationButtons>
        <YesButton onClick={props.onConfirm}>예약하기</YesButton>
        <NoButton onClick={props.onCancel}>돌아가기</NoButton>
      </ConfirmationButtons>
    </React.Fragment>

  );
};