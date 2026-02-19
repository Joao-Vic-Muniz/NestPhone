import { useState } from 'react'
import { Menu, X } from 'lucide-react' 
import Logo from '../assets/NestPhone_Logo.png'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {name: 'Home', href: '#'},
        {name: 'História', href: '#'},
        {name: 'Evolução', href: '#'}

    ]

    return (
        <nav className="bg-emerald-950 w-full h-20 p-3 z-50 relative">
            <div className="flex flex-row justify-between items-center w-full">

                <div className='flex items-center gap-2 cursor-pointer ml-3'>
                <img src={Logo} alt="NestPhoneLogo" className='w-14 h-14 rounded-full max-md:w-12 max-md:h-12'/>
                <span className='font-title text-white text-xl'>NestPhone</span>
                </div>

                <div className='flex gap-6 text-emerald-300 text-xl font-text max-md:hidden'>
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className='relative group py-1'>
                            {link.name}
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                    ))}
                </div>

                    <button
                    className='hidden max-md:flex text-emerald-400 z-[60]'
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen? <X size={32}/> : <Menu size={32} />}
                    </button>
            </div>

            <div className={`
                fixed top-0 right-0 h-full w-64 bg-emerald-900 shadow-2xl z-50
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                md:hidden 
            `}>
                <div className='flex flex-col gap-8 mt-24 px-10'>
                    {links.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className='text-emerald-100 text-2xl font-text hover:text-emerald-400'
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div 
                    className='fixed inset-0 bg-black/60 z-40 md:hidden'
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    )
}