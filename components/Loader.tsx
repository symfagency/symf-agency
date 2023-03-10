/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import anime from "animejs";
import { useEffect, useState } from "react";

import { Logo } from ".";

import type { LoaderProps } from "../types";

const Loader = ({ finishLoading }: LoaderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 700);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isMounted)
      anime
        .timeline({
          complete: () => {
            finishLoading(), setIsMounted(false);
          },
        })
        .add({
          targets: "#logo",
          duration: 1000,
          easing: "easeInOutQuart",
          opacity: [0, 1],
        })
        .add({
          targets: "#logo",
          duration: 300,
          easing: "easeInOutQuart",
          opacity: 0,
          scale: 0,
        });
  }, [isMounted, finishLoading]);

  return isMounted ? (
    <div className="fixed flex min-h-full min-w-full items-center justify-center px-5 text-center">
      <Logo className="h-44 w-44 opacity-0" />
    </div>
  ) : null;
};

export default Loader;
