import React from 'react'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import { Button } from '@/components/ui/button'

const menuOptions = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact-us" },
]

function Header() {
  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md">
    {/*logo*/}
    <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <h2 className="text-xl font-bold ml-2">AI Trip Planner</h2>
    </div>
    {/*Menu Options*/}
    <div className="flex gap-9 items-center">
        {menuOptions.map((menu, index) => (
            <Link href={menu.path}>
                <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">{menu.name}</h2>
            </Link>
        ))}
    </div>
    {/*Get started button*/}
    <Button className="ml-4">Get Started</Button>

    </div>
  )
}

export default Header