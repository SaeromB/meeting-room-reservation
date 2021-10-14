import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
  padding: 20px;
  color: white;
  background-color: #344551;
`;
const Title = styled.div`
  font-size: 35px;
`;
const BtnContainer = styled.div`
  margin: 10px;
`;
const BtnList = styled.span`
  padding: 10px;
`;
const Header = () => {
  return (
    <MainContainer>
      <Title>
        회의 관리 시스템
      </Title>
      <BtnContainer>
        <BtnList>
          마이페이지
        </BtnList>
        <BtnList>
          회의실
        </BtnList>
        <BtnList>
          회의록
        </BtnList>
        <BtnList>
          로그인
        </BtnList>
      </BtnContainer>
    </MainContainer>
  );
};
export default Header;