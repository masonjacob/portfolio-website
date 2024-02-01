'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SocialIcon from '../../components/SocialIcon';
import Card from '../../components/Card';
import Dashboard from '../../components/Dashboard';

const socialIcons = [
  { name: 'Facebook', icon: '/facebook-icon.svg', info: 'Facebook Widget', direction: 1, size: 1 },
  { name: 'GitHub', icon: '/github-icon.svg', info: 'GitHub Widget', direction: 1, size: 1 },
  { name: 'LinkedIn', icon: '/linkedin-icon.svg', info: 'LinkedIn Widget', direction: 1, size: 1 },
  // Add more social icons as needed
];

const SocialIconsPage: React.FC = () => {
  return (
    <>
              <div className="bg-gray-900 text-white w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
              <p>This is the left half of the page with big bold text.</p>
            </div>
            <div className="bg-gray-100 w-1/2 p-8 grid grid-cols-2 grid-rows-2 gap-4">
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
            </div>

    
    </>
  );
};

export default SocialIconsPage;
