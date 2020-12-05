import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin-bottom: 8px;
`;
const Item = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Item>Footer</Item>
    </Container>
  );
};

export default Footer;
