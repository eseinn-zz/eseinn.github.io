import styled from 'styled-components';
import Day from './Day';
const Wrapper = styled.div`
  margin: 8px 0;
  padding: 4px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const renderDays = () => {
  let days = [];
  const count = 25;
  for (let day = 1; day < count; day++) {
    days.push(<Day day={day} />);
  }

  return days;
};
const Calendar = () => {
  return (
    <Wrapper>
      <Container>{renderDays()}</Container>
    </Wrapper>
  );
};

export default Calendar;
