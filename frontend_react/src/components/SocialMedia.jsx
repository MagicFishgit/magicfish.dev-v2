import React from 'react';
import { BsGithub, BsMailbox, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://github.com/MagicFishgit' target='_blank' rel='noreferrer'><BsGithub /></a>
        </div>
        <div>
            <a href='https://twitter.com/magicfeesh' target='_blank' rel='noreferrer'><BsTwitter /></a>
        </div>
        <div>
            <a href='mailto:rudivisagiex@gmail.com'><BsMailbox/></a>
        </div>

    </div>
  )
}

export default SocialMedia