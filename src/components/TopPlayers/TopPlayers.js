import React from 'react'
import './topPlayers.css'
import PlayersImg1 from "../../assets/images/player-1.png"
import PlayersImg2 from "../../assets/images/player-2.png"
import PlayersImg3 from "../../assets/images/player-3.png"
import PlayersImg4 from "../../assets/images/player-4.png"

export default function TopPlayers() {
    return (
        <section className='top-players'>
            <div className='container-xl'>
                <h3>Top</h3>
                <h4>Players</h4>
                <div className='players-list'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='img-box'>
                                <img src={PlayersImg1} alt='' />
                            </div>
                            <div className='description'>
                                <p>RICCARDO SCIREA</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='img-box'>
                                <img src={PlayersImg2} alt='' />
                            </div>
                            <div className='description'>
                                <p>DANI MARTINEZ</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='img-box'>
                                <img src={PlayersImg3} alt='' />
                            </div>
                            <div className='description'>
                                <p>TAKEHIRO KANEGI</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='img-box'>
                                <img src={PlayersImg4} alt='' />
                            </div>
                            <div className='description'>
                                <p>DREW FEIG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
