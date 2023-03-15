/*!
nt
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { useEffect, useRef } from "react";

import config from "../../config";

const Contact = () => {
  const firstRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    (async () => {
      const sr = (await import("scrollreveal")).default();

      firstRef.current && sr.reveal(firstRef.current, config.srConfig());
    })();
  }, []);

  return (
    <section className="my-24" id="contact">
      <div className="mx-auto md:w-2/3" ref={firstRef}>
        <p className="mb-6 text-center text-lg md:text-xl">
          <span className="mb-1 block font-bold">
            Ready to skyrocket your revenue and capitalize on new opportunities?
          </span>
          Schedule a meeting with us by clicking or tapping the button below.
        </p>

        <a
          className="mx-auto block w-fit rounded border-2 border-solid border-secondary bg-tertiary py-1 px-2 font-bold uppercase transition hover:bg-tertiary/60 md:text-lg"
          href={`mailto:${config.email}`}
        >
          i&apos;m ready
        </a>
      </div>
    </section>
  );
};

export default Contact;
