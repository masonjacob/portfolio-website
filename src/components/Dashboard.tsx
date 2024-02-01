import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const cardsData = [
    { "title": "Card 1", "info": "Information 1" },
    { "title": "Card 2", "info": "Information 2" },
    { "title": "Card 3", "info": "Information 3" },
    { "title": "Card 4", "info": "Information 4" }
];

interface CardData {
  title: string;
  info: string;
}

const cardVariants: Variants = {
    expanded: {
      width: '100%',
      height: '100%'
    },
    collapsed: {
      width: '4rem',
      height: '4rem'
    }
  }; 
  
  const Card: React.FC<CardData> = ({ title, info }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleCardClick = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <motion.div
        className={`flex items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer`}
        onClick={handleCardClick}
        initial={isExpanded ? 'expanded' : 'collapsed'}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        layout
        variants={cardVariants}
        transition={{ duration: 0.2 }}
      >
        {isExpanded ? (
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p>{info}</p>
          </div>
        ) : (
          <div className="rounded-full bg-blue-500 w-16 h-16" />
        )}
      </motion.div>
    );
  };
  
  const Dashboard: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [cards, setCards] = useState<CardData[]>([]);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      setCards(cardsData);
    }, []);
  
    return (
      <div className="flex flex-col lg:flex-row min-h-screen">
        {!isMobile ? (
          <>
            <div className="bg-gray-900 text-white w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
              <p>This is the left half of the page with big bold text.</p>
            </div>
            <div className="bg-gray-100 w-1/2 p-8 grid grid-cols-2 grid-rows-2 gap-4">
              {cards.map((card, index) => (
                <Card key={index} title={card.title} info={card.info} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-100 w-full p-8">
              <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
              <p>This is the top of the page with big bold text.</p>
            </div>
            <div className="bg-gray-100 w-full p-8 grid grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <Card key={index} title={card.title} info={card.info} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Dashboard;