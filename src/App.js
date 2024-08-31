import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import React from 'react';

import ContentLayout from './ContentLayout';
import ContentSection from './ContentSection';
import Footer from './Footer';
import Header from './Header';
import LatestArticles from './LatestArticles';
import Navbar from './Navbar';
import SliderComponent from './SliderComponent';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar>{}</Navbar>
      <Header>{}</Header>
      <SliderComponent>{}</SliderComponent>
      <ContentSection>{}</ContentSection>
      <ContentLayout>{}</ContentLayout>
      <LatestArticles>{}</LatestArticles>
      <Footer>{}</Footer>
      
    </ChakraProvider>
  );
}

export default App;
