import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin-bottom: 8px;
  font-size: 10px;
  display: flex;
`;
const Item = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Item></Item>
    </Container>
  );
};

export default Footer;
