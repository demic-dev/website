import { createGlobalStyle } from "styled-components";

export const themes = [
  {
    text: "#363537",
    background: "#fafafa",
  },
  {
    text: "#fafafa",
    background: "#363537",
  },
  {
    text: "#181941",
    background: "#ECE8BE",
  },
  {
    text: "#2d1e2d",
    background: "#d7e2d7",
  },
  {
    text: "#b6bbdf",
    background: "#454121",
  },
  {
    text: "#5d5b12",
    background: "#a5a7f8",
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
