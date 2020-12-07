import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const renderContentForDay = (day) => {
  const [text, link, isLink] = getExerciseForDay(day);
  return isLink ? <a href={link}>{text ? text : link}</a> : text;
};

const getExerciseForDay = (day) => {
  let text = null;
  let link = null;
  let isLink = false;
  console.log(day);
  switch (day) {
    case 1:
      text = '50 burpees (brjóta upp í viðráðanleg sett)';
      break;

    case 2:
      text = '5 mín. wall squat (t.d. 1 min x5)';
      break;

    case 3:
      text = '100x bakfettur';
      link = 'https://www.youtube.com/watch?v=DDJtB8Zgyow'; //bakfettur
      isLink = true;
      break;

    case 4:
      link = 'https://www.youtube.com/watch?v=9DqQ5GfZth4'; //6 min ab workout
      isLink = true;
      break;

    case 5:
      link = ' https://www.youtube.com/watch?v=oAPCPjnU1wA'; // 20 MINUTE FULL BODY WORKOUT(NO EQUIPMENT)
      isLink = true;
      break;

    case 6:
      text = 'Hálftíma göngutúr';
      break;

    case 7:
      text = '50 armbeygjur';
      break;

    case 8:
      link = 'https://www.youtube.com/watch?v=E6IrIPnzsKE';
      isLink = true;
      break;

    case 9:
      link = 'https://www.youtube.com/watch?v=GfUpbhaCK7Y';
      isLink = true;
      break;

    case 10:
      text = 'Veldu 10 teygjur og gerðu hverja í a.m.k. mínútu';
      link =
        'https://www.youtube.com/watch?v=RCFF0Ogkqfw&list=PL0mpr8-xOflAKZwOcG4_vLsLHyYEhBDRx&index=14';
      isLink = true;
      break;

    case 11:
      text = '10 burpees';
      break;

    case 12:
      text = '20 burpees';
      break;

    case 13:
      text = '10 burpees';
      break;

    case 14:
      text = '20 burpees';
      break;

    case 15:
      text = '10 burpees';
      break;

    case 16:
      text = '20 burpees';
      break;

    case 17:
      text = '10 burpees';
      break;

    case 18:
      text = '20 burpees';
      break;

    case 19:
      text = '10 burpees';
      break;

    case 20:
      text = '20 burpees';
      break;

    case 21:
      text = '10 burpees';
      break;

    case 22:
      text = '20 burpees';
      break;

    case 23:
      text = '20 burpees';
      break;

    case 24:
      text = '20 burpees';
      break;
  }
  return [text, link, isLink];
};

const Exercise = ({ day }) => {
  return <Wrapper>{renderContentForDay(day)}</Wrapper>;
};

export default Exercise;
