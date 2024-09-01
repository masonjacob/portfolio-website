'use client'
import './globals.css'
import VerticalNavbar from '@/components/VerticalNavbar'
import Dropdown from '@/components/Dropdown'
import { Inter } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'

const inter = Inter({ subsets: ['latin'] })
// export const metadata = {
//   title: 'Mason Jacob',
//   description: 'My Portfolio Website',
// }

const pages = [
  { route: '/', title: '' },
  { route: '/home', title: 'Home' },
  { route: '/about', title: 'About' },
  // Add more pages as needed
];

const options = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
      text: 'Light Mode',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
      text: 'Dark Mode',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
      text: 'System Mode',
    },
  ];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <VerticalNavbar pages={pages}/> */}
        <NavigationBar/>
        <Dropdown options={options}/>
        {children}
        </body>
    </html>
  )
}
