import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useUserSettings } from './common/UserSettingsContext'

// Define a TypeScript interface for the props
interface GlobalStyleProps {
  darkMode: boolean;
  accentColor: string;
}

const DarkMode = {
  backgroundColor: '#1B1B1B',
  textColor: '#FFFFFF',
  accentColor: '#FF1493',
  highlight: '#FFD1E8',
  shadow: '#E58BBE'
}

const LightMode = {
  backgroundColor: '#FBE3F1',
  textColor: '#292028',
  accentColor: '#F4B8DA',
  highlight: '#F9CDE6',
  shadow: '#E58BBE'
}

// TODO: Remove this file and just use DynamicStyles.tsx
// Use the interface in your GlobalStyles component
const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  .App {
    background-color: ${(props) => (props.darkMode ? DarkMode.backgroundColor : LightMode.backgroundColor)};
    color: ${(props) => (props.darkMode ? DarkMode.textColor : LightMode.textColor)};
    /* other styles */
  }
  :root {
    --background-color: ${(props) => (props.darkMode ? DarkMode.backgroundColor : LightMode.backgroundColor)};
    --text-color: ${(props) => (props.darkMode ? DarkMode.textColor : LightMode.textColor)};
    --accent-color: ${(props) => props.darkMode ? DarkMode.accentColor : LightMode.accentColor};
    --highlight: ${(props) => props.darkMode ? DarkMode.highlight : LightMode.highlight};
    --shadow: ${(props) => props.darkMode ? DarkMode.shadow : LightMode.shadow};
    
  }
  /* other styles */
  .item-container {
    background-color: ${(props) => (props.darkMode ? '#181a1f' : '#ededed')};
  }
  .footer-container {
    background-color: ${(props) => (props.darkMode ? DarkMode.highlight : LightMode.highlight)};
  }
`;

const StyledGlobalStyles = () => {
  const { state } = useUserSettings();

  return <GlobalStyles darkMode={state.darkMode} accentColor={state.accentColor} />;
};

export default StyledGlobalStyles;
