import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div>
      <div className='bg-zinc-200 flex flex-row justify-between'>
        <div className='pl-8 pt-2 pb-2'>
        <Image src='/logo/favicon-32x32.png' height={20} width={20} alt='logo'/>
        </div>
        <div>
        <div className='flex flex-row gap-2 text-gray-500 text-sm pt-2 pr-4'>
        <Link href="/" className="border-r border">Virtual Experience</Link>
        <Link href="/" className="border-r border-gray-500">Free Design</Link>
        <Link href="/" className="border-r border-gray-500">Free Sample</Link>
        <Link href="/" className="border-r border-gray-500">Join Ayatrio Family</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
