import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const topics = [
  {title: 'Frontend', description: 'My frontend focus is React coming with experience in Bootstrap', imgUrl: images.about01},
  {title: 'Backend', description: 'Backend programming is my most enjoyed aspect of programing.', imgUrl: images.about02},
  {title: 'Automation', description: 'Automation is a major interest for me... or am I just lazy?', imgUrl: images.about03},
  {title: 'Learning', description: 'Most of what I know is self taught and I will continue learning as long as I live.', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I don't just want to <span>code.</span><br />
        I want to <span>Eat. Live. Breathe.</span> code
      </h2>

      <div className='app__profiles'>
        {topics.map((topic, index) => (
          <motion.div whileInView={{ opacity: 1}} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }} className='app__profile-item' key={ topic.title + index }>
            <img src={topic.imgUrl} alt='topic title' />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{topic.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{topic.description}</p>
          </motion.div>
        ))}
        
      </div>

    </>
  )
}

export default About