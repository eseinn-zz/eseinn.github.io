import styled from 'styled-components';
import { Calendar } from './';

const TodayDate = styled.div``;
const CountdownDays = styled.div``;

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
    <div>
      <TodayDate>Í dag er {getTodayDateString()}</TodayDate>
      <CountdownDays>
        og það eru {numberOfDaysTilChristmas()} dagar til jóla!
      </CountdownDays>
      <Calendar />
    </div>
  );
};

export default Body;
