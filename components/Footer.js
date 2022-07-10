import React from 'react'
export default function Footer()
{
    return(
        <footer className='absolute bottom-7 left-[50%] translate-x-[-50%] whitespace-nowrap text-sm'>
            <p>Copyrights &copy; {new Date().getFullYear()} Swedha</p>
        </footer>
    )
}