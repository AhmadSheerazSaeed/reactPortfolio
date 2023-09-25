import React from "react";
import contactCSS from "./contact.module.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLinkedinFill, RiGithubLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className={contactCSS.contactWrapper}>
      <aside className={contactCSS.leftSide}></aside>
      <aside className={contactCSS.rightSide}>
        <h1 className={contactCSS.headingOne}>Contact</h1>
        <section className={contactCSS.emailId}>
          <MdAlternateEmail />
          <a href="mailto:khera724@gmail.com">email</a>
        </section>

        <section className={contactCSS.linkedInId}>
          <RiLinkedinFill />
          <a
            href="https://www.linkedin.com/in/ahmadsheerazsaeed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </section>

        <section className={contactCSS.githubId}>
          <RiGithubLine />
          <a
            href="https://github.com/AhmadSheerazSaeed"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </section>
      </aside>
    </div>
  );
};

export default Contact;
