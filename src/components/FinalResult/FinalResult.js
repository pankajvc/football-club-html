import React from 'react'
import './finalResult.css'
import FootBallPlayer from "../../assets/images/man-playing-football.png"
export default function FinalResult() {
    return (
        <section className='final-result d-flex'>
            <div className='col-5'>
                <div className='position-relative'>
                    <div className='img-wrapper position-relative'>
                        <div className='position-relative info-box'>
                            <h5>Final Result</h5>
                            <h2>MATCH REVIEW    VS. <br />
                                TYRANTS</h2>
                        </div>
                    </div>
                    <div className='football-player'>
                        <img src={FootBallPlayer} alt='' className='w-100 h-100' />
                    </div>
                </div>
            </div>
            <div className='col-7 content-box'>
                <h5>29<sup>th</sup> April, 2023</h5>
                <span>&nbsp;</span>
                <h6>Conquerors North</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  when an unknown printer took a galley of type and scrambledit to make a type specimen book.</p>
                <button>View More</button>
            </div>
        </section>
    )
}
