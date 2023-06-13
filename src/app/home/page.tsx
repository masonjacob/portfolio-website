'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const page = () => {
  return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <motion.img
            src="/vector-portrait.svg"
            alt="Vector Portrait"
            width={100}
            height={100}
            
            // priority
            />
            <Image
            src="/3000gt.png"
            alt="1992 3000GT VR-4"
            width={100}
            height={100}
            priority
            />
            <Image
            src="/tesla-coil.png"
            alt="OneTeslaTS DRSSTC"
            width={100}
            height={100}
            priority
            />
          </div>
        </main>
      )
}

export default page