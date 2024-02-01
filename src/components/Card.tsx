import Image from 'next/image'
import { useState } from "react";
import { motion } from "framer-motion";

interface SocialIconProps {
  icon: string;
  name: string;
  info: string;
  direction: number;
  
}

const cardVariants = {
  open: { width: "auto" },
  closed: { width: "auto" },
};

const textVariants = {
  open: { opacity: 1, width: "auto" },
  closed: { opacity: 0, width: 0 },
};

const transition = {
  duration: 0.3,
  delay: 0.2,
};

const CardComponent: React.FC<SocialIconProps> = ({ icon, name, info, direction }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-lg bg-slate-900 p-4 cursor-pointer"
      onHoverStart={() => setIsOpen((isOpen) => !isOpen)}
      onHoverEnd={() => setIsOpen((isOpen) => !isOpen)}
      animate={isOpen ? "open" : "closed"}
      variants={cardVariants}
    >
      <div className="flex items-center justify-between mb-2">
        <Image 
            src={icon} 
            alt={name} 
            width={64} 
            height={64} 
        />
        <motion.div
          className="ml-4"
          initial="hidden"
          animate={isOpen ? "open" : "closed"}
          variants={textVariants}
          transition={transition}
          style={{ overflow: "hidden" }}
        >
          <p className="text-white font-bold">{name}</p>
          <p className="text-gray-300">{info}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardComponent;
