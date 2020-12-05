import styled from 'styled-components';
import Day from './Day';
const Wrapper = styled.div`
  margin: 8px 0;
  padding: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Week = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const renderDays = () => {
  let days = [];
  const rows = [];
  const count = 25;
  for (let day = 0; day < count; day++) {
    days.push(<Day day={day} />);

    if ((day + 1) % 7 === 0 || day === count - 1) {
      rows.push(<Week>{days}</Week>);
      days = [];
    }
  }

  return rows;
};
const Calendar = () => {
  return (
    <Wrapper>
      <Container>{renderDays()}</Container>
    </Wrapper>
  );
};

export default Calendar;
