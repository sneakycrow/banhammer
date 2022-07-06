import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>banhammer.gg</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
