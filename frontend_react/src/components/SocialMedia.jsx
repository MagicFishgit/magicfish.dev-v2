import React from 'react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <BsTwitter />
        </div>

    </div>
  )
}

export default SocialMedia