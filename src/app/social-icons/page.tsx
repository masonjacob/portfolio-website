'use client'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from 'framer-motion';

const socialIcons = [
  { name: 'Facebook', icon: '/Facebook_icon.svg', info: 'Facebook Widget' },
  { name: 'GitHub', icon: '/GitHub_icon.svg', info: 'GitHub Widget' },
  { name: 'Instagram', icon: '/Instagram_icon.svg', info: 'Instagram Widget' },
  // Add more social icons as needed
];

const SocialIconsPage: React.FC = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
    
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!isAnimationComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={handleAnimationComplete}
        >
            <Image 
              src="/vector-portrait.svg"
              alt="Headshot" 
              className="w-20 h-20 rounded-full" 
              fill
              />
        </motion.div>
      )}

      <div className="grid grid-cols-3 gap-4 mt-8">
        {socialIcons.map((socialIcon) => (
          <motion.div
            key={socialIcon.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden"
          >
            <Image 
              src={socialIcon.icon}
              alt={socialIcon.name} 
              className="w-16 h-16"
              fill
            />
            <div className="p-2">
              <p className="text-white font-bold">{socialIcon.name}</p>
              <p className="text-gray-300">{socialIcon.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialIconsPage;
