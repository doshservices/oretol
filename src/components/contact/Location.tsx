import { IContactLocation } from "../../utils/interface"

const adressStyle = 'flex items-center gap-2 mb-5 block'

export const ContactAddress = ({ heading, address, number, email }: IContactLocation) => {
    return (
        <section className="text-light200 font-medium px-4">
            <h3 className="text-sm mb-6">{heading}</h3>
            <h4 className="font-base mb-4">Oretol Nigeria Limited</h4>
            <p className={`${adressStyle}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16.475C13.65 15.1417 14.8958 13.8583 15.7375 12.625C16.5792 11.3917 17 10.2333 17 9.15C17 7.65 16.5333 6.41667 15.6 5.45C14.6667 4.48333 13.4667 4 12 4C10.5333 4 9.33333 4.48333 8.4 5.45C7.46667 6.41667 7 7.65 7 9.15C7 10.2333 7.42083 11.3917 8.2625 12.625C9.10417 13.8583 10.35 15.1417 12 16.475ZM12 19C9.65 17.2667 7.89583 15.5833 6.7375 13.95C5.57917 12.3167 5 10.7167 5 9.15C5 7.06667 5.65 5.35417 6.95 4.0125C8.25 2.67083 9.93333 2 12 2C14.0667 2 15.75 2.67083 17.05 4.0125C18.35 5.35417 19 7.06667 19 9.15C19 10.7167 18.4208 12.3167 17.2625 13.95C16.1042 15.5833 14.35 17.2667 12 19ZM12 11C12.55 11 13.0208 10.8042 13.4125 10.4125C13.8042 10.0208 14 9.55 14 9C14 8.45 13.8042 7.97917 13.4125 7.5875C13.0208 7.19583 12.55 7 12 7C11.45 7 10.9792 7.19583 10.5875 7.5875C10.1958 7.97917 10 8.45 10 9C10 9.55 10.1958 10.0208 10.5875 10.4125C10.9792 10.8042 11.45 11 12 11ZM5 22V20H19V22H5Z" fill="#E8EAED" />
                </svg>
                {address}
            </p>
            <a className={`${adressStyle} text-Secondary`} href={`mailto:${email}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="#E8EAED" />
                </svg>
                {email}
            </a>
            <a className={`${adressStyle}`} href={`tel:${number}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z" fill="#E8EAED" />
                </svg>
                {number}
            </a>
            <p className={`${adressStyle} mb-0`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 21L9 18.9L4.35 20.7C4.01667 20.8333 3.70833 20.7958 3.425 20.5875C3.14167 20.3792 3 20.1 3 19.75V5.75C3 5.53333 3.0625 5.34167 3.1875 5.175C3.3125 5.00833 3.48333 4.88333 3.7 4.8L9 3L15 5.1L19.65 3.3C19.9833 3.16667 20.2917 3.20417 20.575 3.4125C20.8583 3.62083 21 3.9 21 4.25V18.25C21 18.4667 20.9375 18.6583 20.8125 18.825C20.6875 18.9917 20.5167 19.1167 20.3 19.2L15 21ZM14 18.55V6.85L10 5.45V17.15L14 18.55ZM16 18.55L19 17.55V5.7L16 6.85V18.55ZM5 18.3L8 17.15V5.45L5 6.45V18.3Z" fill="#E8EAED" />
                </svg>
                Map
            </p>
        </section>
    )
}