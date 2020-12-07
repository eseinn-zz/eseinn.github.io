import styled from 'styled-components';
import { Calendar } from './';
import BakgroundImage from '../img/background.jpg';

const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.src})`};
  will-change: transform;
  z-index: -1;
  -webkit-background-size: cover;
  -ms-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  margin: 8px;
`;
const TodayDate = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 18px;
  color: #d5d3da;
  font-weight: bold;
`;
const CountdownDays = styled.div`
  text-align: center;
  font-size: 18px;
  margin-bottom: 16px;
  color: #d5d3da;
  font-weight: bold;
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
      <ImageContainer src={BakgroundImage}></ImageContainer>
    </Container>
  );
};

export default Body;
