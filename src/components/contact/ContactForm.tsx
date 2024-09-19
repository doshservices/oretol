import { styles } from "../../utils/styles"


export const ContactForm = () => {
    return (
        <form className="bg-white px-4 sm:px-[14%] py-10">
            <label htmlFor="fullName" className={`${styles.labelStyle}`}>Full Name</label>
            <input
                name='fullName' id='fullName'
                type="text"
                className={`${styles.contactInput} mb-6`}
                placeholder="Enter your full name here" />
            <label htmlFor="email" className={`${styles.labelStyle}`}>Email Address</label>
            <input
                name='email' id='email'
                type="email"
                className={`${styles.contactInput} mb-6`}
                placeholder="Enter your email address here" />
            <label htmlFor="phone" className={`${styles.labelStyle}`}>Phone Number</label>
            <input
                name='phone' id='phone'
                type="tel"
                className={`${styles.contactInput} mb-6`}
                placeholder="Enter your phone number here" />
            <label htmlFor="message" className={`${styles.labelStyle}`}>Message</label>
            <textarea
                name='message' id='message'
                className={`${styles.contactInput} resize-none h-36 py-4 mb-6`}
                placeholder="How can we help you?"></textarea>
            <button className="block w-full border border-Primary py-3 text-sm font-medium">Send message</button>
        </form>
    )
}