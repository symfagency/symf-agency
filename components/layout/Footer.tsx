/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { CSSTransition, TransitionGroup } from "react-transition-group";

import config from "../../config";
import { useIsMounted } from "../../hooks";

const Footer = () => {
  const isMounted = useIsMounted(config.delays.header);

  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition classNames="fade" timeout={config.delays.header}>
          <footer className="relative z-10 mt-auto pt-8 pb-6">
            <p className="mx-auto w-fit text-sm font-bold capitalize">
              copyright &copy; 2023 | all rights reserved
            </p>
          </footer>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default Footer;
