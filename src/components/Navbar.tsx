import Logo from '../assets/NestPhone_Logo.png'

export default function Navbar() {

    const links = [
        {name: 'Home', href: '#'},
        {name: 'História', href: '#'},
        {name: 'Evolução', href: '#'}

    ]

    return (
        <div className="bg-emerald-950 w-full h-20 p-3 items-center">
            <div className="flex flex-row justify-between items-center w-full">

                <div className='flex items-center gap-2 cursor-pointer'>
                <img src={Logo} alt="NestPhoneLogo" className='w-14 h-14 rounded-4xl'/>
                <span className='font-title text-white text-xl'>NestPhone</span>
                </div>

                <div className='flex gap-6 text-emerald-300 text-xl font-text mr-6'>
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className='relative group py-1'>
                            {link.name}
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                    ))}
                </div>


            </div>
        </div>
    )
}