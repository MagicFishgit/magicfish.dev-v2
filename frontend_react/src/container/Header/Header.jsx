import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0 , 1] }} transition={{ duration: 2}} className="app__header-info">
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Rudi Visagie</h1>
            </div>
          </div>
          <div className='tag__cmp app__flex'>
            <p className='p-text'>Frontend / Backend Developer</p>
            <p className='p-text'>magical fish</p>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0 , 1] }} transition={{ duration: 2, delayChildren: 0.5 }} className="app__header-img">
        <img src={images.profile} alt='Profile Backend' />
        <motion.img whileInView={{ scale: [0 , 1] }} transition={{ duration: 1.5, ease: 'easeInOut' }} src={images.circle} alt="Profile framing circle" className='overlay_circle' />
      </motion.div>

      <motion.div variant={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
          {[images.javascript, images.react, images.sass].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt="circles" />
            </div>
          ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')

//1:15