import React from 'react'
import './blog.css'
import SliderIcon from "../../assets/images/slider-icons-img.png"
import SliderImgOne from "../../assets/images/soccer-players-action-professional-stadium-1.png"
import RoleImgOne from "../../assets/images/hp3-slider-1.png"
import RoleImgTwo from "../../assets/images/hp3-slider-2.png"
import RoleImgThree from "../../assets/images/hp3-slider-3.png"
import RoleImgFour from "../../assets/images/hp3-slider-4.png"

export default function Blog() {
    return (
        <>
            <section className='blog-section common-section-spacing'>
                <div className='container-xl'>
                    <h3>Blog</h3>
                    <div className='sub-title d-flex justify-content-between align-items-center'>
                        <h4>CONQUERORS News</h4>
                        <img src={SliderIcon} alt='' />
                    </div>
                    <div className='slider-items'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='img-box'>
                                    <img src={SliderImgOne} alt='' />
                                </div>
                                <div className='description'>
                                    <p>National Leagues 2017 Season Begins</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='img-box'>
                                    <img src={SliderImgOne} alt='' />
                                </div>
                                <div className='description'>
                                    <p>National Leagues 2017 Season Begins</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='img-box'>
                                    <img src={SliderImgOne} alt='' />
                                </div>
                                <div className='description'>
                                    <p>National Leagues 2017 Season Begins</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className='role-section common-section-spacing'>
                <div className='d-flex role-items'>
                    <div className='position-relative role-img-box'>
                        <img src={RoleImgOne} alt='' />
                        <h5 className='position-absolute'>Junior</h5>
                    </div>
                    <div className='position-relative role-img-box second-img-box'>
                        <img src={RoleImgTwo} alt='' />
                        <h5 className='position-absolute'>senior</h5>
                    </div>
                </div>
                <div className='d-flex role-items second-items-row'>
                    <div className='position-relative role-img-box second-img-box'>
                        <img src={RoleImgThree} alt='' />
                        <h5 className='position-absolute'>Coach</h5>
                    </div>
                    <div className='position-relative role-img-box'>
                        <img src={RoleImgFour} alt='' />
                        <h5 className='position-absolute'>Staff</h5>
                    </div>
                </div>
            </section>
        </>
    )
}
