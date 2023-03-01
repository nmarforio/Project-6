import { SWRConfig } from "swr";
import GlobalStyle from "../components/GlobalStyles";
import Layout from "../components/Layout";

const fetcher = (url) => fetch(url).then((r) => r.json());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default MyApp;
