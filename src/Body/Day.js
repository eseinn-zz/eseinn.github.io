import styled from 'styled-components';

const date = new Date();
const today = date.getDate();

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
  @media only screen and (max-width: 950px) {
    min-width: 75px;
    height: 75px;
  }
  flex: 0 0 10%;
  cursor: ${(props) => props.isToday && 'pointer'};
  background: ${(props) => (props.isToday ? '#00B32C' : '#B3000C')};
  backdrop-filter: blur(5px);
`;
const Number = styled.div`
  font-size: 14px;
  position: absolute;
  font-weight: bold;
`;
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => !props.isVisible && 'none'};
`;
const ContentContainer = styled.div``;

const Day = ({ day }) => {
  const isToday = day === today;
  return (
    <Wrapper isToday={isToday}>
      <Number>{day}</Number>
      <ContentWrapper isVisible={day < today}>
        <ContentContainer>content</ContentContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Day;
