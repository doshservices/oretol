import { CollaboratorContact } from "../components/CollaboratorContact"
import { ContactAddress } from "../components/contact/Location"
import { PagesContainer } from "../components/PagesContainer"
import watermark from '../assets/pictures/oretol watermark-half.png'
import { ContactForm } from "../components/contact/ContactForm"
import { Navbar } from "../components/Navbar"

const Contact = () => {
    return (
      <>
        <Navbar />
        <PagesContainer>
          <section className="px-[7%] py-12">
            <h2 className="line-heading text-sm uppercase mb-4 text-dark200">
              LETS TALK
            </h2>
            <div className="flex flex-wrap justify-between gap-y-4 gap-x-16">
              <h3 className="font-medium text-2xl md:text-[2.8rem] max-w-[970px] leading-[1.35] text-Primary basis-[200px] grow">
                Contact Us
              </h3>
              <p className="text-dark200 text-2xl text-justify grow basis-[300px]">
                Thanks for your interest in Oretol. Whether you are looking to
                start a project, get support, or just have a general question,
                we want to hear from you.
              </p>
            </div>
          </section>
          <div className="grid sm:grid-cols-2 md:grid-cols-[.6fr,_1fr]">
            <div className="bg-Primary px-4 sm:px-[16%] py-10 relative z-10">
              <img
                src={watermark}
                className="absolute right-0 top-1/2 -translate-y-1/2 opacity-75 -z-[1]"
                alt=""
              />
              <div className="border-b border-b-[#F8F8F866] mb-6 pb-5">
                <ContactAddress
                  heading="Our Headquarters"
                  address="49, Glover Road, Ikoyi, Lagos State."
                  email="info@oretol.com"
                  number="+234 704 700 4770"
                />
              </div>
              <ContactAddress
                heading="Our Nearest Branch"
                address="Lagos – Ibadan Expressway, Isheri, Ogun State."
                email="info@oretol.com"
                number="+234 704 700 4771"
              />
            </div>
            <ContactForm />
          </div>
          <CollaboratorContact />
        </PagesContainer>
      </>
    );
}

export default Contact