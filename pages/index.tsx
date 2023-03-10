/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import type { NextPage } from "next";

import { Body, Contact, Hero } from "../components";

const HomePage: NextPage = () => {
  return (
    <div>
      <Hero />

      <main className="px-5 md:px-28 lg:px-40">
        <Body />

        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
