import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import GilroyLight from './fonts/Gilroy-FREE/Gilroy-Light.otf';
import GilroyExtraBold from './fonts/Gilroy-FREE/Gilroy-ExtraBold.otf';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyLight}) format('opentype');
        font-weight: 300;
        font-style: normal;
    }

  @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyExtraBold}) format('opentype');
        font-weight: 800;
        font-style: normal;
    }

  html {
    box-sizing: border-box;
  }

  *, 
  *:before, 
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
  }

  h2 {
    font-size: 70px;
    font-weight: 800;
    text-align: center;
    color: #353d5b;
    margin: 15px 0;

    @media (max-width: 940px) {
      font-size: 62px;
    }

    @media (max-width: 700px) {
      font-size: 50px;
    }

    @media (max-width: 500px) {
      font-size: 36px;
    }

    @media (max-width: 500px) {
      font-size: 32px;
    }
  }

  p {
    color: #9C9CA5;
  }
`;

export default GlobalStyle;
