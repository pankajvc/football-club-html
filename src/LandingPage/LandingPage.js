import React from 'react'
import Header from '../components/Header'
import './landingPage.css'
import BlueBox from "../assets/images/blue-box.svg"
import RedBox from "../assets/images/red-box.svg"
import AboutImg from "../assets/images/about-img.png"

export default function LandingPage() {
  return (
    <>
      <div className='landing-main d-flex align-items-center'>
        <div className='container-xl'>
          <Header />
          <div className='banner text-center'>
            <h1>WELCOME TO THE real soccer Football club</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
      <section className='position-relative find-section'>
        <div className='left-box'>
          <img src={BlueBox} alt='' />
        </div>
        <div className='right-box'>
          <img src={RedBox} alt='' />
        </div>
      </section>

      <section className='about-section'>
        <div className='container-xl'>
          <div className='image-box'>
            <img src={AboutImg} alt='' />
          </div>

        </div>

      </section>
    </>
  )
}
