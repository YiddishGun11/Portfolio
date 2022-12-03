import React from 'react'
import './Footer.scss'

import {FaUser} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {BsPhone} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi'
import {AiOutlineInstagram, AiFillGithub} from 'react-icons/ai'

function Footer(){
    return(
        <div className='footer-section' id='FOOTER'>
            <div className='footer-items'>
                <div>
                    <FaUser size={25} />
                    <p>Maisin Edouard</p>
                </div>
                <div>
                    <HiLocationMarker size={25} />
                    <p>Belgium</p>
                </div>
                <div>
                    <BiMailSend size={30} />
                    <p>edouard.mais1@gmail.com</p>
                </div>
                <div>
                    <BsPhone size={22} />
                    <p>+32 0485 36 90 47</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/edouard_maisin/'><AiOutlineInstagram size={32}/></a>
                    <a href='https://github.com/YiddishGun11'><AiFillGithub size={32}/></a>
                </div>
            </div>
            <div className='copyright'>
                <p>Created by Maisin Edouard |  2022 All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;