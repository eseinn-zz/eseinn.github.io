import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Container = styled.div`
  padding: 8px;
`;
function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
