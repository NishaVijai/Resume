import React, { Component } from "react";
import ResumeLeftLang from "./ResumeLeftLang";

import langData from "./langData";

import "./resumeLeft.css";

export default class ResumeLeft extends Component {
  render() {
    const languageComponent = langData.map((data) => (
      <ResumeLeftLang
        key={data.id}
        langTitle={data.langTitle}
        languages={data.languages}
      >
        {" "}
        <hr />{" "}
      </ResumeLeftLang>
    ));
    return (
      <section className="resume-left">
        <article className="personal">
          <h2 tabIndex="0">personal</h2>
          <p tabIndex="0">
            A self-motivated, creative, and ambitious individual with Masters
            degree in Computer Applications, as well as knowledge and
            proficiency in JavaScript, Typescript, React, Vue, Semantic HTML,
            CSS, and mobile responsive website development.
          </p>
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="noorun-nisha-319976105"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://dk.linkedin.com/in/noorun-nisha-319976105?trk=profile-badge"
            >
              Noorun Nisha
            </a>
          </div>
        </article>

        <hr />

        {languageComponent}
      </section>
    );
  }
}
