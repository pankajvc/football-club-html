import React from 'react'
import './footer.css'
import Logo from "./../../branding-logo.svg"

export default function Footer() {
    return (
        <footer className='footer-main'>
            <div className='container-xl'>
                <div className='d-flex align-items-center justify-content-center'>
                    <div>
                        <h3>address</h3>
                        <p>47 W 13th St, New York, NY 10011, USA</p>
                    </div>
                    <div>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <a href='mailto:realsoccerFootball@gmail.com' className='d-block' >realsoccerFootball@gmail.com</a>
                        <a href='tel:+1 880 18414 12141' >+1 880 18414 12141 </a>
                    </div>
                </div>
                <div className='copyright'>
                    <p className='text-center' >FOOTball© 2023. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
