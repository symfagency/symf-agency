/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { useEffect, useState } from "react";

const useIsMounted = (delay: number) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isMounted;
};

export default useIsMounted;
