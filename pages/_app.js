import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>banhammer.gg</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <SessionProvider session={session}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "dark",
            fontSizes: {
              md: "1rem",
              xl: "3rem",
            },
            headings: {
              sizes: {
                h1: {
                  fontSize: "10em",
                },
                h2: {
                  fontSize: "8em",
                },
              },
            },
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </>
  );
}
