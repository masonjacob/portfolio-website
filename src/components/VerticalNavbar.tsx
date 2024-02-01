// components/VerticalNavbar.tsx

import { useRouter, usePathname} from 'next/navigation';
import path from 'path';
import { useState } from 'react';

interface Page {
  route: string;
  title: string;
}

interface VerticalNavbarProps {
  pages: Page[];
}

const VerticalNavbar: React.FC<VerticalNavbarProps> = ({ pages }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center">
      <div className="border-r border-gray-300 h-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
      {pages.map((page) => (
        <button
          key={page.route}
          className={`relative w-8 h-8 rounded-full mt-4 focus:outline-none ${
            pathname === page.route ?'' : 'bg-gray-300'
          }`}
          onClick={() => router.push(page.route)}
        >
        </button>
      ))}
    </div>
  );
};

export default VerticalNavbar;
