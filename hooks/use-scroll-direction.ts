/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [dir, setDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const listener = function (this: Window) {
      setDir(this.scrollY - lastScrollY > 0 ? "DOWN" : "UP");
      lastScrollY = Math.max(this.scrollY, 0);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return dir;
};

export default useScrollDirection;
