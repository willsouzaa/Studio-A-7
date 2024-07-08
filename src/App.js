import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0px 10px 0px 10px; /* Remove margem */

  

`;

const ContentWrap = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ContentWrap>
        <Main />
      </ContentWrap>
      <Footer />
    </AppContainer>
  );
};

export default App;
