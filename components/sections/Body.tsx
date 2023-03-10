/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { useEffect, useRef } from "react";
import { BsDropletHalf } from "react-icons/bs";

import config from "../../config";

const Body = () => {
  const firstRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);
  const thirdRef = useRef<HTMLDivElement | null>(null);
  const fourthRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const sr = (await import("scrollreveal")).default();

      firstRef.current && sr.reveal(firstRef.current, config.srConfig());
      secondRef.current && sr.reveal(secondRef.current, config.srConfig());
      thirdRef.current && sr.reveal(thirdRef.current, config.srConfig());
      fourthRef.current && sr.reveal(fourthRef.current, config.srConfig());
    })();
  }, []);

  return (
    <section className="mx-auto my-24 grid max-w-[100rem] gap-16">
      <div ref={firstRef}>
        <span className="mb-6 block text-center text-[clamp(1.875rem,5vw,2.25rem)] font-bold leading-normal md:text-left">
          What&apos;s this?
        </span>

        <p className="text-center md:text-left md:text-xl">
          A marketing agency that specializes in{" "}
          <span className="font-bold">
            generating more sales leveraging copywriting
          </span>
          ... we&apos;ve four core tenets:
          <ul className="mt-6 grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] justify-items-center gap-4">
            {[
              "We have one definitive goal: make you boatloads of money by increasing your sales with our copy.",
              "We don’t advertise the way you want us to or the way we want to; we advertise the way your prospects want to be advertised to.",
              "We only work with serious clients aiming to do whatever it takes to prosper.",
              "We prioritize long-term relationships; sincerity and truthfulness are above everything.",
            ].map((tenet) => (
              <li
                className="grid w-fit justify-items-center gap-4 rounded border-2 border-solid border-secondary p-4 text-center shadow-lg"
                key={tenet}
              >
                <BsDropletHalf className="h-6 w-6 sm:h-8 sm:w-8" />
                {tenet}
              </li>
            ))}
          </ul>
        </p>
      </div>

      <div ref={secondRef}>
        <span className="mb-6 block text-center text-[clamp(1.875rem,5vw,2.25rem)] font-bold leading-normal md:text-left">
          What can I expect from just words?
        </span>

        <p className="text-center md:text-left md:text-xl">
          An impact like this:
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-4">
            <div className="relative before:absolute before:top-0 before:left-0 before:flex before:h-full before:w-full before:items-center before:justify-center before:bg-secondary/60 before:text-xl before:font-bold before:capitalize before:text-tertiary before:transition before:content-['before'] hover:before:opacity-0 md:before:text-2xl">
              <img
                alt="before"
                className="w-full rounded border-4 border-solid border-black"
                src="/img/before-copywriting-fundamentals.png"
              />
            </div>

            <div className="relative before:absolute before:top-0 before:left-0 before:flex before:h-full before:w-full before:items-center before:justify-center before:bg-secondary/60 before:text-xl before:font-bold before:capitalize before:text-tertiary before:transition before:content-['after'] hover:before:opacity-0 md:before:text-2xl">
              <img
                alt="after"
                className="w-full rounded border-4 border-solid border-black"
                src="/img/after-copywriting-fundamentals.png"
              />
            </div>
          </div>
        </p>
      </div>

      <div ref={thirdRef}>
        <span className="mb-6 block text-center text-[clamp(1.875rem,5vw,2.25rem)] font-bold leading-normal md:text-left">
          Why would I choose you over AI or other agencies?
        </span>

        <p className="text-center md:text-left md:text-xl">
          <span className="mb-1 block">
            Because <span className="font-bold">our goal is different</span>,
          </span>

          <span className="mb-1 block">
            You see, most “digital marketers” out there focus on shallow
            metrics—likes, comments, shares, etc…
          </span>

          <span className="mb-1 block">
            While these might be good metrics to have on the side, they’re not
            necessary at all when it comes to conversions and sales.
          </span>

          <span className="block">
            And AI is no better, its input directly comes from what’s on the
            internet, and if most things out there are low-quality, then the
            probability of it producing anything good is low to non-existent.
          </span>
        </p>
      </div>

      <div ref={fourthRef}>
        <span className="mb-6 block text-center text-[clamp(1.875rem,5vw,2.25rem)] font-bold leading-normal md:text-left">
          What do you offer?
        </span>

        <p className="text-center md:text-left md:text-xl">
          <span className="mb-4 block font-bold">Copy, just copy.</span>

          <span className="mb-1 block">
            We do one thing only because mastery demands focus.
          </span>

          <span className="mb-4 block">
            If you want an agency that offers a full-service solution to
            everything then we’re not for you, that won’t move the needle
            forward.
          </span>

          <span className="block">
            But if you want an agency where with a couple of clicks or taps you
            can supercharge parts of your funnels leveraging copy and get much
            more out of them such as:{" "}
            <span className="font-bold">landing pages</span> and{" "}
            <span className="font-bold">email campaigns</span>, then we&apos;re
            for you.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Body;
