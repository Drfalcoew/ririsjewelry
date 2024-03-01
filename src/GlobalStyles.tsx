import React from 'react';
import { createGlobalStyle } from 'styled-components';

const LightMode = {
  backgroundColor: '#FBE3F1',
  textColor: '#292028',
  accentColor: '#F4B8DA',
  highlight: '#F9CDE6',
  shadow: '#E58BBE'
}

// TODO: Remove this file and just use DynamicStyles.tsx
// Use the interface in your GlobalStyles component
const GlobalStyles = createGlobalStyle`
  .App {
    background-color: ${(props) => (LightMode.backgroundColor)};
    color: ${(props) => (LightMode.textColor)};
    /* other styles */
  }
  :root {
    --background-color: ${(props) => LightMode.backgroundColor};
    --text-color: ${(props) => LightMode.textColor};
    --accent-color: ${(props) => LightMode.accentColor};
    --highlight: ${(props) => LightMode.highlight};
    --shadow: ${(props) => LightMode.shadow};
    
  }
  /* other styles */
  .item-container {
    background-color: ${(props) => '#ededed'};
  }
  .footer-container {
    background-color: ${(props) => LightMode.highlight};
  }
`;

const StyledGlobalStyles = () => {
  return <GlobalStyles />;
};

export default StyledGlobalStyles;
