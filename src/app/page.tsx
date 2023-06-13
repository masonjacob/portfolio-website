import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/social-icons" className="text-blue-500">Go to Social Icons Page</Link>
    </div>
  );
};

export default HomePage;
