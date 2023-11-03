import React from 'react'
import Blog from '../components/Blog'
import FinalResult from '../components/FinalResult'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OurTeam from '../components/OurTeam'
import Subscribe from '../components/Subscribe'
import TopPlayers from '../components/TopPlayers'
import TopVideo from '../components/TopVideo'
import { About, ScheduleAndResult } from "../components"
import FindMatch from "../components/FindMatch"
import "./landingPage.css"

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
      <Blog />
      <FinalResult />
      <TopPlayers />
      <TopVideo />
      <OurTeam />
      <Subscribe />
      <Footer />
    </>
  );
}
