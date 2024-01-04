import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { TAppPage } from 'config/types/page';

import GlobalStyle from 'public/styles/globalStyles';
import theme from 'public/styles/theme';

const App: TAppPage = ({ Component, pageProps, router }) => {
  const { query } = router;

  return (
    <>
      <Head>
        <title>Кинокусь</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} query={query} />
      </ThemeProvider>
    </>
  );
};

export default App;
