import React from 'react'
import Image from '../utilities/Image'

import logo from '../../assets/home/logo.png'
import Paragraph from '../utilities/Paragraph'
import HeadingFive from '../utilities/HeadingFive'
import Span from '../utilities/Span'
import HeadingTwo from '../utilities/HeadingTwo'
import HyperLink from '../utilities/HyperLink'

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {

    let text = 'We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.'

  return (
    <> 
        <footer className='bg-tint-blue pt-24'>
            <div className="max-w-container mx-auto">
                <div className='flex gap-x-142'>
                    <div>
                        <picture>
                            <Image src={logo} alt='logo' />
                        </picture>
                        <Paragraph classname='paragraph font-medium opacity-80 mt-22px w-399px' text='We are always open to discuss your project and improve your online presence.' />
                        <div className='flex gap-x-29 w-517px bg-yellow pt-18px pb-4 pl-37px mt-86px'>
                            <div>
                                <HeadingFive classname='text-dark-blue text-lg font-poppins font-medium leading-8' text='email me at' /> 
                                <Span className='paragraph text-dark-blue opacity-80' text='contact@website.com'/>
                            </div>
                            <div>
                                <HeadingFive classname='text-dark-blue text-lg font-poppins font-medium leading-8' text='call us' /> 
                                <Span className='paragraph text-dark-blue opacity-80' text='0927 6277 28525'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <HeadingTwo classname='subHeading text-white capitalize' text='lets talk' />
                        <Paragraph classname='paragraph opacity-80 mt-14px' text={text} />
                        <div className='flex items-center gap-x-26 mt-7 text-white text-3xl'>
                            <HyperLink href='#' text={ <FaFacebook />} />
                            <HyperLink href='#' text={ <FaTwitter />} />
                            <HyperLink href='#' text={ <FaInstagram />} />
                            <HyperLink href='#' text={ <FaLinkedin />} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <section className='bg-white py-8'>
            <div className="max-w-container mx-auto">
                <div className='flex items-center justify-between'>
                    <HeadingFive classname='paragraph text-dark-blue font-medium opacity-100' text='Copyright 2022, Finsweet.com' />
                    <ul className='flex gap-x-8 items-center'>
                        <li>
                            <HyperLink href='#' className='nav-link text-dark-blue' text='home' />
                        </li>
                        <li>
                            <HyperLink href='#' className='nav-link text-dark-blue' text='about us' />
                        </li>
                        <li>
                            <HyperLink href='#' className='nav-link text-dark-blue' text='feature' />
                        </li>
                        <li>
                            <HyperLink href='#' className='nav-link text-dark-blue' text='pricing' />
                        </li>
                        <li>
                            <HyperLink href='#' className='nav-link text-dark-blue uppercase' text='faq' />
                        </li>
                        <li>
                            <HyperLink href='#' className='nav-link text-dark-blue' text='blog' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer