import { CollaboratorContact } from "../components/CollaboratorContact"
import { Navbar } from "../components/Navbar"
import { PagesContainer } from "../components/PagesContainer"
import { constructionGallery, dredgingGallery } from "../data/aboutUs"
import { watermark } from "../utils/constants"

const About = () => {
    return (
        <>
              <Navbar />
        <PagesContainer>
            <section className="px-[7%] py-12">
                <h2 className='line-heading text-sm uppercase mb-4 text-dark200'>ABOUT ORETOL</h2>
                <h3 className='font-medium text-2xl md:text-[2.8rem] max-w-[970px] leading-[1.35] text-Primary'>One of the leading providers of dredging services and Real Estate Development in Nigeria.</h3>
                <p className="text-grey100 mb-5 mt-8 text-justify">Oretol Nigeria Limited is a wholly indigenous dredging and infrastructure company incorporated in Nigeria to provide first class, quality and excellent service to companies and government agencies in Nigeria and Africa. Since its incorporation in 2005, Oretol has  been engaged in several dredging and port infrastructure related projects in Nigeria and Africa.</p>
                <p className="text-grey100 mb-5 mt-8 text-justify">Oretol comprises of an integrated group of highly skilled and tested Nigerian and other foreign professionals, having a common goal of providing efficient service delivery in infrastructure development. With technical back-up from our associates/partners both at home and abroad, Oretol offers a wide range of technical services in the highly specialised fields of dredging, land reclamation, marine infrastructure, offshore energy,  channelization, infrastructure development and projects, logistics, engineering services, equipment supply and handling, management, scientific, and technical consulting services.</p>
                <p className="text-grey100 mb-5 mt-8 text-justify">Oretol has in place, a prudent Management Board and Technical Staff of seasoned Managers, as well as Consultants, who through various delivery networks, ensures its clients get technical competence, reliability, promptness and efficiency.</p>
                <p className="text-grey100 text-justify">Oretol also has an excellent working relationship with the Lagos State Government, the Nigerian Inland Waterways Authority and other regulatory agencies which translates into a smooth and hitch free execution of projects without regulatory bottlenecks.</p>
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
                    <figure className="h-[200px] border border-Primary rounded-md overflow-hidden" key={index}>
                        <img src={gallery} alt="construction" className="w-full min-h-full object-cover" />
                    </figure>
                )}
            </div>
            <CollaboratorContact />
        </PagesContainer>
        </>
    )
}

export default About