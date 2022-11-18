import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import BasicMenu from './BasicMenu'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Image
                    height={50}
                    width={100}
                    alt="Netflix Logo"
                    src="/logo.png"
                    className="cursor-pointer object-contain"
                />

                <BasicMenu />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink cursor-default font-semibold text-white hover:text-white">
                        Home
                    </li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href="/account">
                    <Image
                        width={35}
                        height={35}
                        alt="profile_avatar"
                        src="/avatar.png"
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header
