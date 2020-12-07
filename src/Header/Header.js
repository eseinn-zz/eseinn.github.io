import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #d5d3da;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 32px;
  }
`;
const Header = () => {
  return <Heading>Jólaæfingadagatalið</Heading>;
};

export default Header;
