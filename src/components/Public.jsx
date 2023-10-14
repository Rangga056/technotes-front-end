import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Eclipse Repair</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Jakarta City, Eclipse Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Eclipse Repairs
          <br />
          599 Foo Drive
          <br />
          Jakarta City, CA 13110
          <br />
          <a href="tel:+625555555555">(021) 555-5555</a>
        </address>
        <br />
        <p>Owner: Muhammad Rangga</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );

  return content;
};

export default Public;
