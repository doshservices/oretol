import { CollaboratorContact } from "../components/CollaboratorContact"
import { PagesContainer } from "../components/PagesContainer"
import serviceBanner from '../assets/pictures/service-banner.png'

const Services = () => {
    return (
        <PagesContainer>
            <section className="px-[7%] py-12">
                <h2 className='line-heading text-sm uppercase mb-4 text-dark200'>DREDGING SERVICES</h2>
                <div className="flex flex-wrap justify-between gap-y-4 gap-x-16">
                    <h3 className='font-medium text-2xl md:text-[2.8rem] max-w-[970px] leading-[1.35] text-Primary basis-[200px] grow'>Delivering dredging solution to ensure efficient navigation.</h3>
                    <p className="text-grey100 text-justify grow basis-[300px]">Oretol Nig. Ltd offers both mechanical and hydraulic dredging solutions to maintain optimal depths for efficient navigation. From mass removal to precise dredging, we can tailor our operations to meet your specific project needs, including rapid dewatering and offsite disposal when required.
                    </p>
                </div>
            </section>
            <img src={serviceBanner} alt="our service company" className="w-full" />
            <section className="py-16 text-Primary px-4 sm:px-[7%]">
                <h2 className='line-heading text-sm uppercase mb-4'>BE REST ASSURED</h2>
                <p className='font-medium text-2xl md:text-[2.8rem] leading-[1.35]'>
                    Our dredges are outfitted with state-of-the-art navigational and dredge monitoring equipment, so we know exactly how much material we are digging at any given point.
                </p>
            </section>
            <CollaboratorContact />
        </PagesContainer>
    )
}

export default Services