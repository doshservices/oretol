import { CollaboratorContact } from "../components/CollaboratorContact"
import { PagesContainer } from "../components/PagesContainer"
import { constructionGallery, dredgingGallery } from "../data/aboutUs"
import { watermark } from "../utils/constants"

const About = () => {
    return (
        <PagesContainer>
            <section className="px-[7%] py-12">
                <h2 className='line-heading text-sm uppercase mb-4 text-dark200'>ABOUT ORETOL</h2>
                <h3 className='font-medium text-2xl md:text-[2.8rem] max-w-[970px] leading-[1.35] text-Primary'>One of the leading providers of dredging services and Real Estate Development in Nigeria.</h3>
                <p className="text-grey100 mb-5 mt-8 text-justify">Oretol Nigeria Ltd is an established indigenous company, since 2005. Leading in the dredging, construction, and real estate development sectors. With its headquarters in Ikoyi, Lagos, and a branch office at Lagos – Ibadan Expressway, Isheri, Ogun State.
                </p>
                <p className="text-grey100 text-justify">
                    The company is strategically positioned to serve a diverse range of clients and operate in all sectors of the Nigerian market which includes Reclamation Schemes, Chanelisation, Specialist services to the Oil , Gas, Construction and Marine industry, thereby providing services and materials to the country’s flood protection, shoreline protection and providing affordable housing among others.</p>
            </section>
            <div className="px-4 grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 sm:gap-5">
                {dredgingGallery.map((gallery, index) =>
                    <figure key={index}>
                        <img src={gallery} alt="our work" className="w-full border border-Primary rounded-md overflow-hidden" />
                    </figure>
                )}
            </div>
            <section className="py-16 text-light200 bg-Primary px-4 sm:px-[7%] relative z-1 isolate">
                <img src={watermark} alt="" className="absolute top-1/2 -translate-y-1/2 h-[50%] sm:h-[75%] -z-[1] pointer-events-none max-h-[305px] right-0 opacity-55" />
                <h2 className='line-heading text-sm uppercase mb-4'>OUR MISSION</h2>
                <p className='font-medium text-2xl md:text-[2.8rem] leading-[1.35]'>
                    To exceed the expectations of our clients by providing the perfect service without violating our ethical standard, integrity, fairness and relationship with our clients, suppliers, subcontractors and associates.
                </p>
            </section>
            <section className="py-16 text-Primary px-4 sm:px-[7%]">
                <h2 className='line-heading text-sm uppercase mb-4'>OUR VISION & VALUES</h2>
                <div className="grid sm:grid-cols-[1fr,_.6fr] gap-x-12">
                    <p className='font-medium text-2xl md:text-[2.8rem] leading-[1.35]'>
                        To become the front runners in the dredging and construction industry across Africa and beyond
                    </p>
                    <p className="text-lg grow">The passion to make a positive impact and difference in the dredging and real estate sector.</p>
                </div>
            </section>
            <div className="grid grid-cols-2 sm:grid-cols-4 px-4 gap-3 sm:gap-5 mb-8">
                {constructionGallery.map((gallery, index) =>
                    <figure key={index}>
                        <img src={gallery} alt="construction" className="w-full border border-Primary rounded-md overflow-hidden" />
                    </figure>
                )}
            </div>
            <CollaboratorContact />
        </PagesContainer>
    )
}

export default About