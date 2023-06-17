'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SocialIcon from '../../components/SocialIcon';

const socialIcons = [
  { name: 'Facebook', icon: '/facebook-icon.svg', info: 'Facebook Widget', direction: 'right', size: 1 },
  { name: 'GitHub', icon: '/github-icon.svg', info: 'GitHub Widget', direction: 'right', size: 1 },
  { name: 'LinkedIn', icon: '/linkedin-icon.svg', info: 'LinkedIn Widget', direction: 'right', size: 1 },
  // Add more social icons as needed
];

const SocialIconsPage: React.FC = () => {
  return (
    <>
      {socialIcons.map((socialIcon, index) => (
        <motion.div
          key={socialIcon.name}
          whileHover={{ scale: 1.1 }}
          className="col-span-3 flex justify-center items-center"
        >
          <SocialIcon key={socialIcon.name} icon={socialIcon.icon} name={socialIcon.name} info={socialIcon.info} direction={socialIcon.direction} />
        </motion.div>
      ))}
    </>
  );
};

export default SocialIconsPage;
