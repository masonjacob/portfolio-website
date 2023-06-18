'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SocialIcon from '../../components/SocialIcon';
import Card from '../../components/Card';

const socialIcons = [
  { name: 'Facebook', icon: '/facebook-icon.svg', info: 'Facebook Widget', direction: 1, size: 1 },
  { name: 'GitHub', icon: '/github-icon.svg', info: 'GitHub Widget', direction: 1, size: 1 },
  { name: 'LinkedIn', icon: '/linkedin-icon.svg', info: 'LinkedIn Widget', direction: 1, size: 1 },
  // Add more social icons as needed
];

const SocialIconsPage: React.FC = () => {
  return (
    <>
    <motion.div 
    className="justify-center"
    >
    {socialIcons.map((socialIcon, index) => (
        <motion.div
          drag
          key={socialIcon.name}
          //whileHover={{ scale: 1.1 }}
          className="col-span-3 flex"
        >
          <Card 
            key={socialIcon.name} 
            icon={socialIcon.icon} 
            name={socialIcon.name} 
            info={socialIcon.info} 
            direction={socialIcon.direction} 
          />
        </motion.div>
      ))}
    </motion.div>
    </>
  );
};

export default SocialIconsPage;
