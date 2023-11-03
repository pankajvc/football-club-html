import React from "react";
import Button from "../Button";
import Player from "../../assets/images/player.webp";
import "./ScheduleAndResult.css";
import MatchBox from "./MatchBox";
function ScheduleAndResult() {
  return (
    <section className="schedule-section">
      <div className="container-xl">
        <div className="wrapper-box align-items-start">
          <div className="left-box box">
            <h3 className="sub-title">MATCHES</h3>
            <p className="title">SCHEDULE & RESULTS </p>
            <ul className="d-flex justify-content-between main-list ps-0">
              <li className="list-element active text-center d-inline-flex flex-column justify-content-center align-items-center">
                <p className="dark-red-text par-18">2023</p>
                <div className="square-block active position-relative"></div>
              </li>
              <li className="list-element text-center d-inline-flex flex-column justify-content-center align-items-center">
                <p className="grey-text par-18">2022</p>
                <div className="square-block position-relative"></div>
              </li>
              <li className="list-element text-center d-inline-flex flex-column justify-content-center align-items-center">
                <p className="grey-text par-18">2021</p>
                <div className="square-block position-relative"></div>
              </li>
              <li className="list-element text-center d-inline-flex flex-column justify-content-center align-items-center">
                <p className="grey-text par-18">2020</p>
                <div className="square-block position-relative"></div>
              </li>
              <li className="list-element text-center d-inline-flex flex-column justify-content-center align-items-center">
                <p className="grey-text par-18">2019</p>
                <div className="square-block position-relative"></div>
              </li>
            </ul>
            <MatchBox />
            <div className="d-flex align-items-center button-block">
              <p className="par-16 dark-grey">
                Latest football results. We offer the most comprehensive
                information of results for all football leagues and
                competitions.
              </p>
              <Button name="view more" />
            </div>
          </div>
          <div className="box">
            <ul className="d-flex justify-content-end">
              <li className="link-element">
                <p className="match-links mb-0 active">First Team</p>
              </li>
              <li className="link-element">
                <p className="match-links mb-0">Women's Team</p>
              </li>
              <li className="link-element">
                <p className="match-links mb-0">Under 21</p>
              </li>
              <li className="link-element">
                <p className="match-links mb-0">Under 17</p>
              </li>
            </ul>
            <div className=" position-relative player-block d-flex align-items-center">
              <img className="w-100" src={Player} alt="player" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleAndResult;
