/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { useEffect, useRef } from "react";

import config from "../../config";

const Contact = () => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    (async () => {
      const sr = (await import("scrollreveal")).default();

      for (const ref of [paragraphRef, linkRef])
        ref.current && sr.reveal(ref.current, config.srConfig());
      stackRefs.current.forEach(
        (r, i) =>
          r &&
          sr.reveal(r, config.srConfig(((i + 1) * config.delays.reveal) / 2))
      );
    })();
  }, []);

  return (
    <section className="py-20" id="contact">
      <div className="mx-auto md:w-2/3">
        <p className="mb-6 text-center text-lg md:text-xl" ref={paragraphRef}>
          <span className="block font-bold">
            Ready to rewrite your revenue and capitalize on new opportunities?
          </span>
          Schedule a meeting with us by clicking or tapping the button below (or
          if you got here by an outreach reply to that email).
        </p>

        <a
          className="mx-auto block w-fit rounded border-2 border-solid border-secondary bg-tertiary py-1 px-2 font-bold uppercase transition hover:bg-tertiary/60 md:text-lg"
          href={`mailto:${config.email}`}
          ref={linkRef}
        >
          i&apos;m ready
        </a>
      </div>
    </section>
  );
};

export default Contact;
