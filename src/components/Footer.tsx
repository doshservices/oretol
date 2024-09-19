import { Link } from "react-router-dom"
import { appLogo } from "../utils/constants"

export const Footer = () => {
    return (
        <footer className="bg-[#F9F9F9] px-4 sm:px-[7%] py-10 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="grow">
                <img src={appLogo} className="h-10 lg:h-12 block mx-auto sm:mx-0" alt="app logo" />
                <div className="flex justify-center sm:justify-start flex-wrap gap-x-4 sm:gap-x-8 lg:gap-x-[8%] gap-y-4 mt-6 text-sm sm:text-base font-medium text-dark200">
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/contact'>What We Do</Link>
                    <Link to='/contact'>Our Work</Link>
                    <Link to='/contact'>Insights</Link>
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
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.7337 3.10249C24.5937 2.58449 24.3216 2.11199 23.9418 1.73311C23.563 1.35336 23.0905 1.08036 22.5725 0.941238C20.665 0.424988 13 0.424988 13 0.424988C13 0.424988 5.33496 0.424988 3.42746 0.941238C2.90946 1.08124 2.43696 1.35336 2.05809 1.73311C1.67834 2.11199 1.40534 2.58449 1.26621 3.10249C0.910086 5.04761 0.736836 7.02249 0.749961 8.99999C0.736836 10.9775 0.910086 12.9524 1.26621 14.8975C1.40621 15.4155 1.67834 15.888 2.05809 16.2669C2.43696 16.6466 2.90946 16.9196 3.42746 17.0587C5.33496 17.575 13 17.575 13 17.575C13 17.575 20.665 17.575 22.5725 17.0587C23.0905 16.9187 23.563 16.6466 23.9418 16.2669C24.3216 15.888 24.5946 15.4155 24.7337 14.8975C25.0898 12.9524 25.2631 10.9775 25.25 8.99999C25.2631 7.02249 25.0898 5.04761 24.7337 3.10249ZM10.55 12.675V5.32499L16.9112 8.99999L10.55 12.675Z" fill="#1B1F38" />
                        </svg>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6845 0.530611H1.81698C1.41011 0.527986 1.01811 0.685486 0.724982 0.968111C0.432732 1.25074 0.262107 1.63749 0.250732 2.04436V19.9556C0.259482 20.3634 0.429232 20.751 0.723232 21.0345C1.01636 21.318 1.40923 21.4737 1.81698 21.4694H19.6845C20.0922 21.4737 20.4851 21.318 20.7782 21.0345C21.0722 20.751 21.242 20.3634 21.2507 19.9556V2.04436C21.2394 1.63749 21.0687 1.25074 20.7765 0.968111C20.4834 0.685486 20.0914 0.527986 19.6845 0.530611ZM6.47198 18.3894H3.39198V8.40561H6.47198V18.3894ZM4.96698 7.01436C4.49448 7.01436 4.03948 6.82973 3.70173 6.49986C3.36311 6.16911 3.16798 5.71936 3.15573 5.24686C3.14698 5.00711 3.18811 4.76736 3.27648 4.54336C3.36398 4.32024 3.49698 4.11724 3.66761 3.94749C3.83736 3.77686 4.04036 3.64386 4.26348 3.55636C4.48748 3.46886 4.72723 3.42686 4.96698 3.43561C5.42461 3.46711 5.85248 3.67186 6.16573 4.00699C6.47811 4.34211 6.65223 4.78399 6.65223 5.24249C6.65223 5.70099 6.47811 6.14286 6.16573 6.47799C5.85248 6.81311 5.42461 7.01786 4.96698 7.04936V7.01436ZM18.1707 18.3281H15.1257V13.4456C15.1257 12.2819 15.1257 10.7681 13.4982 10.7681C11.8707 10.7681 11.6257 12.0456 11.6257 13.3319V18.2756H8.51073V8.40561H11.4157V9.71811H11.477C11.7745 9.20099 12.2094 8.77574 12.7317 8.48874C13.255 8.20174 13.8474 8.06349 14.4432 8.09061C17.5845 8.09061 18.1707 10.1906 18.1707 12.8594V18.3281Z" fill="#1B1F38" />
                        </svg>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2507 11.0639C21.2507 5.26528 16.5494 0.563904 10.7507 0.563904C4.95211 0.563904 0.250732 5.26528 0.250732 11.0639C0.250732 16.3052 4.09023 20.6487 9.11011 21.4362V14.1002H6.44398V11.0639H9.11011V8.7504C9.11011 6.11928 10.6781 4.6659 13.0765 4.6659C14.2254 4.6659 15.4267 4.87065 15.4267 4.87065V7.45453H14.102C12.7974 7.45453 12.3905 8.2639 12.3905 9.09428V11.0639H15.3025L14.837 14.0993H12.3905V21.4362C17.4112 20.6487 21.2507 16.3052 21.2507 11.0639Z" fill="#1B1F38" />
                        </svg>
                    </a>
                </div>
                <p className="text-dark200 text-sm text-center sm:text-right"><span>Copyright © 2024 Oretol Nig LTD</span> <span className="sm:ml-6 block sm:inline">All rights reserved</span></p>
            </div>
        </footer>
    )
}