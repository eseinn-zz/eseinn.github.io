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
  backdrop-filter: blur(5px);
  border-radius: 8px;
  opacity: 0.9;
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
  return (
    <Wrapper
      isToday={isToday}
      isTodayHidden={isToday && !isTodayVisible}
      onClick={() => (isToday ? setTodayVisibility(true) : null)}
    >
      <Number>{day}</Number>
      {(isTodayVisible || day < today) && (
        <ContentWrapper>
          <Exercise day={day} />
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default Day;
