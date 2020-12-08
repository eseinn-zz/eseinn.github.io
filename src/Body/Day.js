import React from 'react';

import styled from 'styled-components';
import Exercise from './Exercise';
const date = new Date();
const today = date.getDate();

const Wrapper = styled.div`
  min-height: 100px;
  border: 1px solid;
  display: flex;
  padding: 8px;
  min-width: 100px;
  margin: 4px;
  justify-content: center;
  flex-direction: column;
  justify-content: start;
  flex: 0 0 10%;
  cursor: ${(props) => (props.isTodayHidden ? 'pointer' : '')};
  background: ${(props) => (props.isToday ? '#0b601c' : '#b31315')};
  border-radius: 8px;
  opacity: 0.8;
  box-shadow: '0 0 40px 40px none inset, 0 0 0 0 none';
  transition: 'all 150ms ease-in-out';
  :hover {
    opacity: 1;
    box-shadow: ${(props) =>
      props.isToday
        ? '0 0 10px 0 #0b601c inset, 0 0 10px 4px #0b601c'
        : '0 0 10px 0 #b31315 inset, 0 0 10px 4px #b31315'};
    outline: 0;
  }
  :focus {
    outline: 0;
  }
  :hover > span {
    color: #d5d3da;
  }
`;

const Number = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 14px;
  overflow-wrap: anywhere;
`;

const Day = ({ day }) => {
  const [isTodayVisible, setTodayVisibility] = React.useState(false);

  const isToday = day === today;

  const dayHasPast = day < today;
  return (
    <Wrapper
      isToday={isToday}
      dayHasPast={dayHasPast}
      isTodayHidden={isToday && !isTodayVisible}
      onClick={() => setTodayVisibility(true)}
    >
      <Number>{day}</Number>
      {((isToday && isTodayVisible) || dayHasPast) && (
        <ContentWrapper>
          <Exercise day={day} />
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default Day;
