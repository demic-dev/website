import { createGlobalStyle } from "styled-components";

export const themes = [
  {
    text: "#363537",
    background: "#fafafa",
    secondary: "#fff1c1",
    emoji: "☀️",
  },
  {
    text: "#fafafa",
    background: "#363537",
    secondary: "#e6dedd",
    emoji: "🌙",
  },
];

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    /* font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
    
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;
