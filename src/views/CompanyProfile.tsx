import { Fragment } from "react/jsx-runtime";
import { PagesContainer } from "../components/PagesContainer";
import { Navbar } from "../components/Navbar";
import { styles } from "../utils/styles";
import { BottomWatermark, TopWatermark } from "../components/watermark";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import companyImage from "../assets/pictures/company-profile/image 1.png"
import companyImage2 from "../assets/pictures/company-profile/image 2.png"
import { watermark } from "../utils/constants";
import oretolWatermark from "../assets/pictures/oretol watermark-2.png"
import historicalImage from "../assets/pictures/historia-de-acciona-01.png"

import companyLogo from "../assets/pictures/company-profile/companiesLogo/Picture1 1.png"
import companyLogo2 from "../assets/pictures/company-profile/companiesLogo/Picture2 1 (2).png"
import companyLogo3 from "../assets/pictures/company-profile/companiesLogo/Picture4 1.png"
import companyLogo4 from "../assets/pictures/company-profile/companiesLogo/Picture5 1.png"
import companyLogo5 from "../assets/pictures/company-profile/companiesLogo/Picture6 1.png"
import companyLogo6 from "../assets/pictures/company-profile/companiesLogo/Picture7 1.png"
import companyLogo7 from "../assets/pictures/company-profile/companiesLogo/Picture8 1.png"
import { CollaboratorContact } from "../components/CollaboratorContact";
import { useState } from "react";


const data = [
    {
        headingText: "1. Channelization and drainage services ",
        paragraphText: "Oretol Nigeria Limited is a fully indigenous dredging and infrastructure company in Nigeria, delivering top-quality services to businesses and government agencies across Nigeria and Africa.",
    },
    {
        headingText: "2.	Port of San Pedro, Cote D’Ivoire ",
        paragraphText: "Dredging access channel and land reclamation works for a new terminal. Ongoing (2019 – to date)",
    },
    {
        headingText: "3. Port of Nouadhibou, Mauritania ",
        paragraphText: "Dredging access channel and land reclamation works for a new terminal. Ongoing (2019 – to date)",
    },
    {
        headingText: "4. Mozambique LNG export project ",
        paragraphText: "Provided technical services and information in conjunction with IHC for the supply of dredging equipment used for the  design and construction of a marine offloading jetty at the Mozambique LNG export project.",
    },
    {
        headingText: "5. Container terminal at Majidun, Ikorodu, Lagos State",
        paragraphText: " Land reclamation and infrastructure development of about 8 hectares of land to be used as a container terminal. Ongoing (2022 – to date)",
    },
    {
        headingText: "6. Land reclamation",
        listDetails: [
            "Land reclamation of 10.4 hectares of land at  Ojomu Royal Family, Chevron Alternative road, Lekki, Lagos on behalf of Asset Management Corporation of Nigeria (AMCON).",
            "Land reclamation of 30 hectares of land for the Elegushi Royal Family to be used for residential and commercial purposes. at Imperial International Business City (IIBC) Lekki, Lagos.",
            "Land reclamation of 9.2 hectares reclamation for Akinsateru Farms Limited on Chevron Alternative road, Lekki, Lagos."
        ]
    },
    {
        headingText: "7. Estate and Infrastructure Development",
        listDetails: [
            "Reclamation of land and infrastructure development of a residential estate covering 8.4 hectares at Hampton Bay Estate, Spar Road, behind NICON Town Estate, Lekki, Lagos. The infrastructure includes: Roads and drainages, Shoreline protection, Electrical installation/Street lighting, Water supply, Sewage systems, Land establishment settlement, Landscaping and horticultural works, Recreational facilities etc.",
            "Reclamation of land and infrastructure development of a residential estate measuring 3.541 hectares at Hampton Lake, Chevron  Alternative Road, Lekki, Lagos. The infrastructure includes: Roads and drainages, Shoreline protection, Electrical installation/Street lighting, Water supply, Sewage systems, Land establishment settlement, Landscaping and horticultural works, Recreational facilities etc.",
            "Reclamation of land and infrastructure development of a residential estate measuring 10 hectares at Hampton Lake, Chevron  Alternative Road, Lekki, Lagos on 38 hectares of land. The infrastructure includes: Roads and drainages, Shoreline protection, Electrical installation/Street lighting, Water supply, Sewage systems, Land establishment settlement, Landscaping and horticultural works, Recreational facilities etc."
        ]
    },
]

export default function CompanyProfile() {
    const [selectedIndex, setSeletedIndex] = useState(0)
    return (
        <Fragment>
            <Navbar />
            <PagesContainer>
                <section className="px-4 sm:px-[7%] py-12">
                    <section>
                        <TopWatermark />
                        <BottomWatermark />
                        <h2 className="line-heading text-sm uppercase mb-4 text-dark200">
                            COMPANY’S PROFILE
                        </h2>
                        <h3 className="font-medium text-2xl md:text-[2.8rem] leading-[1.3]">
                            A fully indigenous dredging and infrastructure company in Nigeria, delivering top-quality services to businesses and government agencies across Nigeria and Africa.
                        </h3>
                        <p className="mt-5 leading-[2] text-[#6A6A6A]">Oretol Nigeria Limited is a wholly indigenous dredging and infrastructure company incorporated in Nigeria to provide first class, quality and excellent service to companies and government agencies in Nigeria and Africa. Since its incorporation in 2005, Oretol has  been engaged in several dredging and port infrastructure related projects in Nigeria and Africa.
                            Oretol comprises of an integrated group of <b>highly skilled and tested Nigerian and other foreign professionals,</b> having a common goal of providing efficient service delivery in infrastructure development. With technical back-up from our associates/partners both at home and abroad, Oretol offers a wide range of technical services in the highly specialised fields of dredging, land reclamation, marine infrastructure, offshore energy,  channelization, infrastructure development and projects, logistics, engineering services, equipment supply and handling, management, scientific, and technical consulting services.
                            Oretol has in place, a prudent Management Board and Technical Staff of seasoned Managers, as well as Consultants, who through various delivery networks, ensures its clients get technical competence, reliability, promptness and efficiency.
                            Oretol also has an excellent working relationship with the Lagos State Government, the Nigerian Inland Waterways Authority and other regulatory agencies which translates into a smooth and hitch free execution of projects without regulatory bottlenecks. </p>
                    </section>
                </section>
                <section className="pb-12">
                    <img src={companyImage} alt="" className="h-[500px] max-md:h-[400px] w-full object-cover" />
                </section>
                <section className="py-16 text-light200 bg-Primary px-4 sm:px-[7%] relative z-1 isolate">
                    <img src={watermark} alt="" className="absolute top-1/2 -translate-y-1/2 h-[50%] sm:h-[75%] -z-[1] pointer-events-none max-h-[305px] right-0 opacity-55" />
                    <h2 className='line-heading text-sm uppercase mb-4'>OUR MISSION</h2>
                    <p className='font-medium text-2xl md:text-[2.8rem] leading-[1.35]'>
                        To exceed the expectations of our clients by providing the perfect service without violating our ethical standard, integrity, fairness and relationship with our clients, suppliers, subcontractors and associates.
                    </p>
                </section>
                <section className="py-16 text-Primary px-4 sm:px-[7%] relative">
                    <h2 className='line-heading text-sm uppercase mb-4'>OUR VISION & VALUES</h2>
                    <div className="grid sm:grid-cols-[1fr,_.6fr] gap-x-12">
                        <p className='font-medium text-2xl md:text-[2.8rem] leading-[1.35]'>
                            To become the front runners in the dredging and construction industry across Africa and beyond
                        </p>
                        <p className="text-lg grow flex justify-center items-center">The passion to make a positive impact and difference in the dredging and real estate sector.</p>
                        <div className="w-[250px] h-[250px] absolute right-0">
                            <img src={oretolWatermark} alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <img src={companyImage2} alt="" className="h-[500px] max-md:h-[400px] w-full object-cover" />
                </section>
                <section className="py-16 text-light200 bg-Primary px-4 sm:px-[7%] relative z-1 isolate">
                    <img src={watermark} alt="" className="absolute top-1/2 -translate-y-1/2 h-[50%] sm:h-[75%] -z-[1] pointer-events-none max-h-[305px] right-0 opacity-55" />
                    <h2 className='line-heading text-sm uppercase mb-4'>SOME RELEVANT PROJECTS UNDERTAKEN</h2>
                    <p className='font-medium text-2xl md:text-[2.8rem] leading-[1.35]'>
                        Our goal is to become a more efficient and impactful tool for the nation each day.
                    </p>

                    <div className="mt-20 grid grid-cols-2 gap-10 max-md:grid-cols-1">
                        <div className="flex flex-col gap-10">
                            {data.map((text, textIndex) => (
                                <div key={text.headingText} onClick={() => setSeletedIndex(textIndex)} className="cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-medium">{text.headingText}</h3>
                                    </div>
                                    <AnimatePresence>
                                        {selectedIndex === textIndex && (
                                            <motion.div initial={{ height: 0, marginTop: 0 }} animate={{ height: "auto", marginTop: 24 }} exit={{ height: 0, marginTop: 0 }} className="overflow-hidden">
                                                {text.paragraphText && <p className="text-white/50">{text.paragraphText}</p>}
                                                {text.listDetails && <div className="grid gap-4 list-decimal">
                                                    {text.listDetails.map((list, index) => (
                                                        <li className="text-white/50" key={index}>{list}</li>
                                                    ))}
                                                </div>}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            <img src={historicalImage} alt="" />
                        </div>
                    </div>
                </section>
                <section className="py-16 text-Primary px-4 sm:px-[7%] relative">
                    <h2 className='line-heading text-sm uppercase mb-4'>OUR VISION & VALUES</h2>
                    <div className="grid grid-cols-4 gap-10 mt-10 max-md:grid-cols-2">
                        <img src={companyLogo} alt="" className="max-md:w-[80%]" />
                        <img src={companyLogo2} alt="" className="max-md:w-[80%]" />
                        <img src={companyLogo3} alt="" className="max-md:w-[80%]" />
                        <img src={companyLogo4} alt="" className="max-md:w-[80%]" />
                        <img src={companyLogo5} alt="" className="max-md:w-[80%]" />
                        <img src={companyLogo6} alt="" className="max-md:w-[80%]" />
                        <img src={companyLogo7} alt="" className="max-md:w-[80%]" />
                    </div>
                </section>
                <CollaboratorContact />
            </PagesContainer>
        </Fragment>
    )
}
