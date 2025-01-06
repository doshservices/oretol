import { Link } from "react-router-dom"
import { appLogo } from "../utils/constants"

export const Footer = () => {
    return (
        <footer className="bg-[#F9F9F9] px-4 sm:px-[7%] py-10 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="grow">
                <img src={appLogo} className="h-10 lg:h-12 block mx-auto sm:mx-0" alt="app logo" />
                <div className="flex justify-center sm:justify-start flex-wrap gap-x-4 sm:gap-x-8 lg:gap-x-[8%] gap-y-4 mt-6 text-sm sm:text-base font-medium text-dark200">
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/about'>What We Do</Link>
                    <Link to='/work'>Our Work</Link>
                    <Link to='/insight'>Insights</Link>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-6 justify-center sm:justify-end mb-10">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="21" height="21" fill="none" stroke="#1B1F38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <path d="M17.5 6.5h.01"></path>
                        </svg>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2462 9.3927L21.0648 0.505127H19.2114L12.4233 8.22119L7.00159 0.505127H0.749268L8.94727 12.1741L0.749268 21.4949H2.60266L9.77014 13.3456L15.4969 21.4949H21.7493L13.2462 9.3927ZM10.7084 12.2766L9.87781 11.1154L3.26917 1.8689H6.11462L11.4492 9.33118L12.2798 10.4924L19.214 20.1926H16.3685L10.7084 12.2766Z" fill="#1B1F38" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@oretoldomain3174" target="_blank" rel="noopener noreferrer">
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.7337 3.10249C24.5937 2.58449 24.3216 2.11199 23.9418 1.73311C23.563 1.35336 23.0905 1.08036 22.5725 0.941238C20.665 0.424988 13 0.424988 13 0.424988C13 0.424988 5.33496 0.424988 3.42746 0.941238C2.90946 1.08124 2.43696 1.35336 2.05809 1.73311C1.67834 2.11199 1.40534 2.58449 1.26621 3.10249C0.910086 5.04761 0.736836 7.02249 0.749961 8.99999C0.736836 10.9775 0.910086 12.9524 1.26621 14.8975C1.40621 15.4155 1.67834 15.888 2.05809 16.2669C2.43696 16.6466 2.90946 16.9196 3.42746 17.0587C5.33496 17.575 13 17.575 13 17.575C13 17.575 20.665 17.575 22.5725 17.0587C23.0905 16.9187 23.563 16.6466 23.9418 16.2669C24.3216 15.888 24.5946 15.4155 24.7337 14.8975C25.0898 12.9524 25.2631 10.9775 25.25 8.99999C25.2631 7.02249 25.0898 5.04761 24.7337 3.10249ZM10.55 12.675V5.32499L16.9112 8.99999L10.55 12.675Z" fill="#1B1F38" />
                        </svg>
                    </a>
                </div>
                <p className="text-dark200 text-sm text-center sm:text-right"><span>Copyright © 2025 Oretol Nig LTD</span> <span className="sm:ml-6 block sm:inline">All rights reserved</span></p>
            </div>
        </footer>
    )
}