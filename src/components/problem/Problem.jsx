import React from 'react'
import HeadingFive from '../utilities/HeadingFive'
import HeadingOne from '../utilities/HeadingOne'
import Paragraph from '../utilities/Paragraph'
import Image from '../utilities/Image'
import bannerImg from '../../assets/about/banner-img.png'

const Problem = () => {

    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'

  return (
    <section className='bg-white py-128px'>
        <div className="max-w-container mx-auto">
            <div className='flex justify-between'>
            <div>
                <HeadingFive classname='text-dark-blue text-lg font-poppins font-normal capitalize leading-8' text='about us' />
                <HeadingOne className='bannerHeading w-595px text-dark-blue normal-case mt-2' text='Our designs solve problems' />
                <Paragraph classname='paragraph text-dark-blue mt-31px w-484px' text={text} />
            </div>
            <div className='w-547px h-336px overflow-hidden'>
                <Image src={bannerImg} alt='not found' className='w-full h-full object-cover' />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Problem