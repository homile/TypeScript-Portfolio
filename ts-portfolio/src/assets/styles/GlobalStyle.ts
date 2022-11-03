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
    color: var(--color-white);
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

  /* Typography */
  h1{
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: var(--color-black);
    margin: 16px 0;
  }

  h2{
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: var(--color-black);
    margin: 8px 0;
  }

  h3{
    font-size: var(--font-regular);
    font-weight: var(--font-regular);
    color: var(--color-black);
    margin: 8px 0;
  }

  p{
    font-size: var(--font-regular);
    font-weight: var(--font-regular);
    color: var(--color-black);
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
