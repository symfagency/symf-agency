/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { CSSTransition, TransitionGroup } from "react-transition-group";

import config from "../config";
import { useIsMounted } from "../hooks";

const Hero = () => {
  const isMounted = useIsMounted(config.delays.header);

  return (
    <section className="relative z-10 mx-auto mt-24 flex min-h-[calc(100vh-10rem)] max-w-4xl items-center px-5 md:px-16">
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fade-up" timeout={config.delays.header}>
            <div className="text-center md:text-left">
              <div className="mx-auto flex w-fit flex-grow flex-col gap-6 md:flex-1">
                <h1 className="text text-[clamp(2.25rem,8vw,3rem)] font-bold leading-none">
                  We&apos;ll turn your info-product business into a passive
                  income source with what we call: &quot;The Organic, Lucrative
                  Info-Product Funnels System.&quot;
                </h1>

                <div>
                  <p className="md:text-xl">
                    <span className="mt-4 mb-1 block">
                      Stop leaving money on the table by wasting interested
                      eyeballs and subscribers,
                    </span>
                    <span className="block">
                      It’s time for you to turn your organic traffic along with
                      your email list into real money you can enjoy.
                    </span>
                  </p>
                </div>

                <a
                  className="mx-auto w-fit rounded border-2 border-solid border-secondary bg-tertiary py-1 px-2 text-sm font-bold uppercase transition hover:bg-tertiary/60 md:mx-0 md:text-base"
                  href={`mailto:${config.email}`}
                >
                  get in touch
                </a>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
};

export default Hero;
