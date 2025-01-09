import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --font-size: initial;
  --colors-filter: none;
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}

html {
  text-size-adjust: 100%;
}

body {
  min-height: 100vh;
  padding: 0;
  margin: 0;

  font-family: ALSHauss, Arial, sans-serif;
  font-weight: 400;
  font-variant-ligatures: no-contextual;
  line-height: 1.25rem;
  vertical-align: baseline;
}

:focus {
  outline: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

input,
textarea {
  font-family: ALSHauss, Arial, sans-serif;
  font-variant-ligatures: no-contextual;
}

a,
button {
  font-family: ALSHauss, Arial, sans-serif;
  font-variant-ligatures: no-contextual;

  cursor: pointer;
}

a {
  color: white;
  text-decoration: none;

  outline: none;

  transition: all 0.25s ease-in-out 0s;
}

ul,
ol {
  padding: 0;
  margin: 0;

  list-style: none;
}

  table {
    width: 100%;
    overflow: auto;

    border-spacing: 0;
    border-collapse: collapse;
  }

  thead {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    text-align: left;
  }

  thead,
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  tr:not(thead > tr) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
    }

    &:last-child {
      border: 0
    }
  }

  th {
    font-weight: 500;
  }

  th,
  td {
    padding: 0.875rem 1.5rem;

    vertical-align: top;
  }
`;

export default GlobalStyle;
