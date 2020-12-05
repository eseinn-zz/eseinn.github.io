import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  border: 1px solid;
  display: flex;
  padding: 8px;
  min-width: 100px;
  margin: 4px;
  justify-content: center;
  flex-direction: column;
  justify-content: start;
`;
const Number = styled.div`
  font-size: 14px;
  position: absolute;
`;
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div``;

const Day = ({ day }) => {
  console.log(day);
  return (
    <Wrapper>
      <Number>{day}</Number>
      <ContentWrapper>
        <ContentContainer>content</ContentContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Day;
