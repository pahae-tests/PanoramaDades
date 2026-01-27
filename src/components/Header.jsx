import React from 'react'
import Link from 'next/link'

const Header = () => {
  const navItems = [
    {
      title: 'Home',
      href: '/home',
    },
    {
      title: 'Teams',
      href: '/home',
    },
    {
      title: 'Matches',
      href: '/home',
    },
    {
      title: 'Community',
      href: '/home',
    },
    {
      title: 'Maps',
      href: '/home',
    },
    {
      title: 'Profile',
      href: '/home',
    },
  ]
  return (
    <div className='w-full h-16 bg-red-800 flex items-center justify-between px-6 gap-2'>
      <div className='h-full aspect-square overflow-hidden flex justify-center items-center'>
        <img
          src='https://www.cafonline.com/media/sa4cpure/afcon2025_logo_land_color-v1.png'
          className='w-full'
        />
      </div>
      <div className='h-full w-fit flex flex-row gap-2 items-center justify-around gap-12'>
        {navItems.map((nav, idx) => (
          <Link
            key={idx}
            href={nav.href}
            className='h-full w-fit flex justify-center items-center text-white font-bold'
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header