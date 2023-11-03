import React from 'react'
import './ourTeam.css'
import Team1Img from "../../assets/images/team-1.png"
import Team2Img from "../../assets/images/team-2.png"
import Team3Img from "../../assets/images/team-3.png"
import Team4Img from "../../assets/images/team-4.png"
import Team5Img from "../../assets/images/team-5.png"
import Team6Img from "../../assets/images/team-6.png"
export default function OurTeam() {
  return (
    <section className='our-team common-section-spacing'>
      <div className='container-xl'>
        <h3>OUR Team</h3>
        <h4>match Gallery</h4>
        <div className='team-img'>
          <div className='row row-gap-5'>
            <div className='col-4'>
              <img src={Team1Img} alt='' />
            </div>
            <div className='col-4'>
              <img src={Team2Img} alt='' />
            </div>
            <div className='col-4'>
              <img src={Team3Img} alt='' />
            </div>
            <div className='col-4 column-gap-4'>
              <img src={Team4Img} alt='' />
            </div>
            <div className='col-4'>
              <img src={Team5Img} alt='' />
            </div>
            <div className='col-4'>
              <img src={Team6Img} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
