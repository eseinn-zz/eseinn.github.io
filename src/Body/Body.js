import styled from 'styled-components';
import { Calendar } from './';

const Container = styled.div`
  margin: 8px;
`;
const TodayDate = styled.div`
  text-align: center;
  font-size: 24px;
`;
const CountdownDays = styled.div`
  text-align: center;
  font-size: 24px;
`;

const today = new Date();
const dayOfMonth = today.getDate();

const getTodayDateString = () => {
  const formattedDate =
    dayOfMonth + '.' + (today.getMonth() + 1) + '.' + '2020';
  return formattedDate;
};

const numberOfDaysTilChristmas = () => {
  return 24 - dayOfMonth;
};
const Body = () => {
  return (
    <Container>
      <TodayDate>Í dag er {getTodayDateString()}</TodayDate>
      <CountdownDays>
        og það eru {numberOfDaysTilChristmas()} dagar til jóla!
      </CountdownDays>
      <Calendar />
    </Container>
  );
};

export default Body;
