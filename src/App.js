import React from 'react';
import { Header } from './components/Header';
import { Review } from './components/Review';
import { GlobalStyle } from './styles/global';



export function App () {
  return (
    <div>
      <Header />
      <Review />
      <GlobalStyle />
    </div>
  );
}
