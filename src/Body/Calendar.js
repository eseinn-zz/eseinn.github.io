import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 8px 0;
  padding: 4px;
  border: 4px solid;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Day = styled.div`
  height: 50px;
  border: 1px solid;
  display: flex;
  padding: 8px;
  align-items: center;
  min-width: 50px;
  margin: 4px;
  justify-content: center;
  flex: 0 0 10%;
`;

const Week = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const LastWeek = styled.div`
  display: flex;
  flex-direction: row;
`;

const renderDays = () => {
  let days = [];
  const rows = [];
  const count = 25;
  for (let day = 0; day < count; day++) {
    days.push(<Day>{day}</Day>);

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
