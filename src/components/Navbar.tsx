import { Link, NavLink, useLocation } from "react-router-dom"
import { appLogo, appLogoWhite } from "../utils/constants"
import { useRef, useState } from "react"
import useClickOutside from "../utils/useClickOutside"
import { navStyles } from "../utils/styles"

export const Navbar = () => {

    const location = useLocation()
    const navRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLHeadingElement>(null)
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [backgroundColor, setBackgroundColor] = useState<boolean>(false)

    const changeColor = () => {
        if (window.scrollY >= 70) {
            setBackgroundColor(true)
        } else {
            setBackgroundColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const showMenu = () => {
        navRef?.current?.classList.toggle('!left-0')
        setIsMenuActive((prevState) => !prevState);
    }

    useClickOutside(headerRef, () => {
        navRef?.current?.classList.remove('!left-0')
        setIsMenuActive(false);
    })

    return (
        <header ref={headerRef} className={`${navStyles.header} ${location.pathname === '/' && !isMenuActive && !backgroundColor ? 'bg-transparent text-white' : 'bg-white text-Primary'}`}>
            <Link className="lg:hidden" to='/'>
                {location.pathname === '/' && !isMenuActive && !backgroundColor ?
                    <img className="h-10" src={appLogoWhite} alt="" /> :
                    <img className="h-10" src={appLogo} alt="" />
                }
            </Link>
            <button className="lg:hidden" onClick={showMenu}>
                {isMenuActive ?
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.152 5.152a1.2 1.2 0 0 1 1.696 0L12 10.303l5.152-5.151a1.2 1.2 0 1 1 1.696 1.696L13.697 12l5.151 5.152a1.2 1.2 0 0 1-1.696 1.696L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.696L10.303 12 5.152 6.848a1.2 1.2 0 0 1 0-1.696Z" clipRule="evenodd"></path>
                    </svg>
                    :
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm7.2 6a1.2 1.2 0 0 1 1.2-1.2h7.2a1.2 1.2 0 1 1 0 2.4H12a1.2 1.2 0 0 1-1.2-1.2Z" clipRule="evenodd"></path>
                    </svg>
                }
            </button>
            <nav ref={navRef} className={navStyles.nav}>
                <Link className="hidden lg:block" to='/'>
                    {location.pathname === '/' && !backgroundColor ?
                        <img className="h-12" src={appLogoWhite} alt="" /> :
                        <img className="h-12" src={appLogo} alt="" />
                    }
                </Link>
                <div className="flex flex-col lg:flex-row lg:items-center gap-y-7 gap-x-[5%] lg:grow justify-center">
                    <NavLink className='w-fit' onClick={showMenu} to='/about'>Who we are</NavLink>
                    <NavLink className='relative flex items-center gap-1 w-fit' to='/'>
                        <span>Services</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.707 9.29299C7.317 8.90299 6.683 8.90299 6.293 9.29299C5.903 9.68299 5.903 10.317 6.293 10.707L11.243 15.657C11.437 15.851 11.691 15.949 11.946 15.95C12.206 15.953 12.466 15.855 12.664 15.657L17.614 10.707C18.004 10.317 18.004 9.68299 17.614 9.29299C17.223 8.90299 16.59 8.90299 16.199 9.29299L11.953 13.539L7.707 9.29299Z" fill={location.pathname === '/' ? "#F8F8F8" : '#1b1f38'} />
                        </svg>
                    </NavLink>
                    <NavLink onClick={showMenu} to='/'>Our work</NavLink>
                    <NavLink className='w-fit' onClick={showMenu} to='/'>Insights</NavLink>
                    <NavLink className='relative flex items-center gap-1 w-fit' to='/'>
                        <span>Resources</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.707 9.29299C7.317 8.90299 6.683 8.90299 6.293 9.29299C5.903 9.68299 5.903 10.317 6.293 10.707L11.243 15.657C11.437 15.851 11.691 15.949 11.946 15.95C12.206 15.953 12.466 15.855 12.664 15.657L17.614 10.707C18.004 10.317 18.004 9.68299 17.614 9.29299C17.223 8.90299 16.59 8.90299 16.199 9.29299L11.953 13.539L7.707 9.29299Z" fill={location.pathname === '/' ? "#F8F8F8" : '#1b1f38'} />
                        </svg>
                    </NavLink>
                </div>
                <NavLink onClick={showMenu} className={`ease-in-out border-[2px] text-center rounded-lg py-3 px-6 border-Primary max-w-[250px] ${location.pathname === '/' && !backgroundColor ? 'lg:border-white' : 'lg:border-Primary'}`} to='/'>Contact Us</NavLink>
            </nav>
        </header>
    )
}