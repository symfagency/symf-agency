/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { Footer, Header, Loader } from "../components";
import config from "../config";

const App = ({ Component, pageProps, router }: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const isHome = router.pathname === "/";

  useEffect(() => {
    if (isLoading) return;

    let timeout: NodeJS.Timeout | null;

    let hash;
    if ((hash = location.hash)) {
      const $section = document.querySelector(hash);
      timeout = setTimeout(() => $section?.scrollIntoView(), 0);
    }

    return () => clearTimeout(timeout as NodeJS.Timeout);
  }, [isLoading]);

  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <Head>
        <title>SYMF Agency</title>

        <link href="/favicon.png" rel="icon" sizes="32x32" type="image/png" />
      </Head>

      <SwitchTransition mode="out-in">
        <CSSTransition
          classNames="fade"
          key={router.pathname}
          timeout={config.delays.reveal}
        >
          {isLoading && isHome ? (
            <Loader finishLoading={finishLoading} />
          ) : (
            <div className="flex min-h-screen flex-col">
              <Header />

              <Component {...pageProps} />

              <Footer />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default App;
