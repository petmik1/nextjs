import Link from 'next/link'
import React from 'react'

export default function navbar() {
    return (
        <nav className='flex flex-row justify-evenly bg-primary' >
        <Link href={"/"} className='mx-4'><h1>Navbar</h1></Link>
            <div className='flex mx-5'>
                <Link href={"/contact"} className='mx-4'>contact</Link>
                <Link href={"/portfolio"} className='mx-4'>Portfolio</Link>
            </div>
        </nav>

    )
}
