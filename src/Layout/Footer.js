import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {

  return (
    <footer className="text-center fixed-bottom pb-4 -pt-2">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <AiFillFacebook/>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
          <AiFillInstagram/>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
          <AiFillGithub/>
          </a>
        </section>
      </div>
      <div className="text-center text-dark p-3">
        © 2022 Copyright: Mostafa Mohammedi
      </div>
    </footer>
  );
}

export default Footer;
