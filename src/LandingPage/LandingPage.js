import React from "react";

import FindMatch from "../components/FindMatch";
import Header from "../components/Header";
import "./landingPage.css";
import { About, ScheduleAndResult } from "../components";

export default function LandingPage() {
  return (
    <>
      <div className="landing-main d-flex align-items-center">
        <div className="container-xl">
          <Header />
          <div className="banner text-center">
            <h1>WELCOME TO THE real soccer Football club</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <FindMatch />
      <About />
      <ScheduleAndResult />
    </>
  );
}
