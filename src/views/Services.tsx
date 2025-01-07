import { CollaboratorContact } from "../components/CollaboratorContact";
import { PagesContainer } from "../components/PagesContainer";
import { Navbar } from "../components/Navbar";
import { services } from "../data/services";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ErrorPage } from "./PageNotFound";
import oretolWatermark from '../assets/pictures/oretol watermark-2.png'

type ServiceProps =
  | {
    id: string;
    name: string;
    img: string;
    intro: string;
    description: string;
    assurance: string;
  }
  | undefined;

const Services = () => {
  const { id } = useParams();

  const [service, setService] = useState<ServiceProps>();
  console.log(service);

  const findSevice = () => {
    const service = services?.find((service) => id === service?.id);
    setService(service);
  };

  useEffect(() => {
    findSevice();
    window.addEventListener("popstate", findSevice);
    return () => {
      window.removeEventListener("popstate", findSevice);
    };
  }, [id]);

  return (
    <>
      <Navbar />
      <PagesContainer>
        {service ? (
          <>
            <section className="px-[7%] py-12">
              <h2 className="line-heading text-sm uppercase mb-4 text-dark200">
                {service?.name}
              </h2>
              <div className="flex flex-wrap justify-between gap-y-4 gap-x-16">
                <h3 className="font-medium text-2xl md:text-[2.8rem] max-w-[970px] leading-[1.35] text-Primary basis-[200px] grow">
                  {service?.intro}
                </h3>
                <p className="text-grey100 text-justify grow basis-[200px] flex justify-center items-center">
                  {service?.description}
                </p>
                <div className="w-[250px] h-[250px] absolute right-0 top-[100px]">
                  <img src={oretolWatermark} alt="" />
                </div>
              </div>
            </section>
            <img
              src={service?.img}
              alt="our service company"
              className="w-full"
            />
            <section className="py-16 text-Primary px-4 sm:px-[7%]">
              <h2 className="line-heading text-sm uppercase mb-4">
                BE REST ASSURED
              </h2>
              <p className="font-medium text-2xl md:text-[2.8rem] leading-[1.35]">
                {service?.assurance}
              </p>
            </section>
            <CollaboratorContact />
          </>
        ) : (
          <ErrorPage />
        )}
      </PagesContainer>
    </>
  );
};

export default Services;
