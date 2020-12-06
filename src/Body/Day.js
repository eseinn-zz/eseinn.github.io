import React from 'react';

import styled from 'styled-components';
import Exercise from './Exercise';
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
  flex: 0 0 10%;
  cursor: ${(props) => props.isTodayHidden && 'pointer'};
  background: ${(props) => (props.isToday ? '#0b601c' : '#b31315')};
  border-radius: 8px;
  opacity: 0.9;
  box-shadow: 0 0 40px 40px none inset, 0 0 0 0 none;
  -webkit-transition: ${(props) => props.isToday && 'all 150ms ease-in-out'}
  transition:  ${(props) => props.isToday && 'all 150ms ease-in-out;'}
  :hover {
    box-shadow: ${(props) =>
      props.isToday && '0 0 10px 0 #0b601c inset, 0 0 10px 4px #0b601c'};
    color: #d5d3da;
    outline: 0;
  }
  :focus {
    color: #d5d3da;
    outline: 0;
  }
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
  font-size: 12px;
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
      onClick={() => (isToday ? setTodayVisibility(true) : null)}
    >
      <Number>{day}</Number>
      {(isTodayVisible || dayHasPast) && (
        <ContentWrapper>
          <Exercise day={day} />
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default Day;
