import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStytle = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  body{
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    /* 마우스 커서가 텍스트에 갈때 변화하지 않도록 */
    cursor: default;
  }

  a{
    /* 텍스트의 밑줄 제거 */
    text-decoration: none;
    color: #ffffff;
  }

  ul{
    /* padding 제거 */
    padding-left: 0;
  }

  li{
      list-style: none;
  }

  button{
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  h1{
    font-size: 48px;
    font-weight: 700;
    color: #000000;
    margin: 16px 0;
  }

  h2{
    font-size: 28px;
    font-weight: 600;
    color: #000000;
    margin: 8px 0;
  }

  h3{
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    margin: 8px 0;
  }

  p{
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    margin: 4px 0;  
  }

  .section{
    padding: 50px;
    text-align: center;
    margin: auto;
    scroll-margin: 40px;
  }

  .section_container{
    max-width: 1200px;
    margin: auto;
  }
`;

export default GlobalStytle;
