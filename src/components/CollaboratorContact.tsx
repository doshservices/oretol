import { Link } from "react-router-dom"
import { styles } from "../utils/styles"
import watermark from '../assets/pictures/oretol watermark.png'

export const CollaboratorContact = () => {
    return (
        <div className="py-10 text-light200 bg-Primary px-[9%] relative z-10">
            <img src={watermark} alt="" className="absolute top-1/2 -translate-y-1/2 h-[50%] sm:h-[85%] -z-[1] pointer-events-none max-h-[305px] right-[12%]" />
            <h3 className='font-medium text-2xl md:text-[2.8rem] leading-[1.3] mb-6 max-w-[535px]'>Ready to work together?</h3>
            <p className="max-w-[535px]">Whether you have a project in mind and you’re looking for a reliable construction partner or you’re looking to take the next step in your career, we want to hear from you!</p>
            <Link className={`${styles.primaryBtn} border-Secondary w-40 text-center mt-12`} to='/contact'>Contact us</Link>
        </div>
    )
}
