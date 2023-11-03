import React from "react";
import { Search } from "../../Icons";
import Button from "../Button";
import "./FindMatch.css";
import Soccer from "../../assets/images/soccer.webp";
import SoccerChamp from "../../assets/images/soccer-champion.webp";
function FindMatch() {
  return (
    <section className="position-relative find-section d-flex align-items-center">
      <div className="left-box d-flex align-items-center justify-content-center">
        <div className="w-50">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search match here..."
              aria-label="search"
              aria-describedby="basic-addon2"
            />
            <span className="search-button">
              <Search />
            </span>
            <span className="p-0" id="basic-addon2">
              <Button name="Find event" />
            </span>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="right-inner-box">
          <div className="content-block ">
            <div className="img-wrapper">
              <img src={SoccerChamp} alt="soccer-champ" className="w-100" />
            </div>
            <div className="">
              <p className="match-font  mx-4 mt-1">01 - 02</p>
            </div>
            <div className="img-wrapper">
              <img className="w-100" src={Soccer} alt="soccer" />
            </div>
          </div>
          <p className="text-center text-white par-14 mb-0">
            24th April , 2023
          </p>
          <p className="text-center text-white par-14 mb-0">
            Santiago Bernabéu Stadium
          </p>
        </div>
      </div>
    </section>
  );
}

export default FindMatch;
