/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import type { NextPage } from "next";
import Link from "next/link";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import config from "../config";
import { useIsMounted } from "../hooks";

const Custom404: NextPage = () => {
  const isMounted = useIsMounted(config.delays.header);

  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition classNames="fade-up" timeout={config.delays.header}>
          <div className="mt-20 flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-5 text-center">
            <span className="text-8xl">404</span>

            <p className="relative text-2xl uppercase">
              page not found;{" "}
              <Link href="/">
                <a className="relative inline-block font-bold after:absolute after:left-0 after:-bottom-2 after:h-[0.1rem] after:w-0 after:bg-tertiary after:transition-all hover:text-secondary/60  hover:after:w-full">
                  go home
                </a>
              </Link>
            </p>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default Custom404;
