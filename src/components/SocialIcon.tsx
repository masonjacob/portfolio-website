import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface SocialIconProps {
  icon: string;
  name: string;
  info: string;
  direction: 'right' | 'left';
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, name, info, direction }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <motion.div
      className={`flex items-center bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden ${
        isExpanded ? (direction === 'right' ? 'expand-right' : 'expand-left') : ''
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleExpand}
      transition={{ duration: 1, ease: 'easeInOut' }}
      style={{ width: isExpanded ? '300px' : '64px' }}
    >
      <Image src={icon} alt={name} width={64} height={64} />

      {isExpanded && (
        <div className={`p-4 ${direction === 'right' ? 'ml-2' : 'mr-2'}`}>
          <p className="text-white font-bold">{name}</p>
          <p className="text-gray-300">{info}</p>
        </div>
      )}
    </motion.div>
  );
};

export default SocialIcon;
