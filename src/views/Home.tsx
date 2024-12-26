import homeHero from "../assets/pictures/homeHero.png";
import yearsOfEx from "../assets/pictures/years-of-experience.png";
import partners from "../assets/pictures/partners.png";
import projectsDone from "../assets/pictures/project.png";
import { BottomWatermark, TopWatermark } from "../components/watermark";
import { styles } from "../utils/styles";
import officeImg from "../assets/pictures/oretol-office-home.png";
import { useState } from "react";
import { whatWeDo } from "../data/whatWeDo";
import { ourProjects } from "../data/projects";
import { insights } from "../data/blog/insights";
import { InsightCard } from "../components/Blog/InsightsCard";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CollaboratorContact } from "../components/CollaboratorContact";
import ReactPlayer from "react-player";
import { HomeNav } from "../components/HomeNav";
import { Link } from "react-router-dom";

const Home = () => {
  const [officeLocation, setOfficeLocation] = useState<string>("lagos");
  const [visionType, setVisionType] = useState<string>("dredging");
  const [project, setProject] = useState<string>("hampton-bay");

  const currentVision = whatWeDo.find((service) => service.id === visionType);
  const currentProject = ourProjects.find(
    (projects) => projects.id === project
  );
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <>
      <HomeNav />
      <div className="relative h-screen max-h-[600px] lg:max-h-[750px] flex items-end px-4 sm:px-[7%] py-12 overflow-hidden">
        <ReactPlayer
          muted
          loop={true}
          controls={false}
          className="home-hero-video scale-[3.8] sm:scale-[2] lg:scale-[1.5] 3xl:scale-[2] -z-[1] pointer-events-none"
          playing={true}
          url="https://res.cloudinary.com/dbz1rgohb/video/upload/v1727284583/oretol/IMG_29324_ej4a29.mp4"
        />
        <img
          src={homeHero}
          alt=""
          className="w-full absolute inset-0 min-h-full object-cover -z-[2]"
        />
        <section className="grow text-white">
          <h1 className="line-heading text-sm uppercase mb-4">
            Sustainability and Innovation
          </h1>
          <h2 className="text-3xl md:text-[3rem] font-bold max-w-[600px] leading-[1.4]">
            Some Little Note About Land Reclamation Services
          </h2>
          <ul className="flex text-xs sm:text-sm font-medium gap-x-8 lg:gap-x-16 mt-24">
            <li>
              <a>LAND RECLAMATION</a>
            </li>
            <li>
              <a>REAL ESTATE</a>
            </li>
            <li>
              <a>CONSTRUCTION</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="px-4 sm:px-[7%] py-16 relative text-Primary grid gap-y-8 sm:grid-cols-[1fr,_.8fr] md:grid-cols-[1fr,_.5fr] gap-x-12 lg:gap-x-[12%]">
        <section>
          <TopWatermark />
          <BottomWatermark />
          <h2 className="line-heading text-sm uppercase mb-4 text-dark200">
            WHO WE ARE
          </h2>
          <h3 className="font-medium text-2xl md:text-[2.8rem] max-w-[500px] leading-[1.3]">
            Building a sustainable future in Nigeria.
          </h3>
          <p className="text-grey100 my-6 text-justify max-w-[577px]">
            Oretol Nigeria Limited is one of the leading providers of dredging
            services and Real Estate Development in Nigeria.
          </p>
          <p className="text-grey100 text-justify max-w-[577px]">
            We operate in all sectors of the Nigerian market which includes
            Reclamation Schemes, Chanelisation, Specialist services to the Oil ,
            Gas, Construction and Marine industry, thereby providing services
            and materials to the country’s flood protection, shoreline
            protection and providing affordable housing among others.
          </p>
          <div className="flex flex-wrap gap-4 max-w-[577px] mt-12">
            <button
              className={`${styles.primaryBtn} sm:grow  sm:basis-[150px] shrink-0 max-w-52`}
            >
              Company’s Profile
            </button>
            <button
              className={`${styles.primaryBtn} sm:grow  sm:basis-[150px] shrink-0 max-w-52`}
            >
              CSR Policy
            </button>
            <button
              className={`${styles.primaryBtn} sm:grow  sm:basis-[150px] shrink-0 max-w-52`}
            >
              HSE Policy
            </button>
          </div>
        </section>
        <div className="grid gap-12">
          <div className="border-l-[3px] border-l-Primary px-4 py-3 flex items-center gap-3">
            <img
              src={yearsOfEx}
              alt="years-of-experience"
              className="h-16 sm:h-[90px]"
            />
            <div>
              <p className="text-3xl sm:text-[2.8rem] font-medium">16</p>
              <p className="text-xl">Years of experience</p>
            </div>
          </div>
          <div className="border-l-[3px] border-l-Primary px-4 py-3 flex items-center gap-3">
            <img src={partners} alt="partners" className="h-16 sm:h-[90px]" />
            <div>
              <p className="text-3xl sm:text-[2.8rem] font-medium">20</p>
              <p className="text-xl">Trusted partners</p>
            </div>
          </div>
          <div className="border-l-[3px] border-l-Primary px-4 py-3 flex items-center gap-3">
            <img
              src={projectsDone}
              alt="projects"
              className="h-16 sm:h-[90px]"
            />
            <div>
              <p className="text-3xl sm:text-[2.8rem] font-medium">100</p>
              <p className="text-xl">Projects done</p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-Primary text-white px-4 sm:px-[7%] py-16">
        <h2 className="line-heading text-sm uppercase mb-4">WHERE WE ARE</h2>
        <h3 className="font-medium text-2xl md:text-[2.8rem] leading-[1.3] mb-8">
          Helping you transform communities across the globe.
        </h3>
        <button
          onClick={() => setOfficeLocation("lagos")}
          className={`py-1 text-Secondary mr-12 ${officeLocation === "lagos"
            ? "border-b-2 border-b-Secondary"
            : "border-b-2 border-b-transparent !text-white"
            }`}
        >
          Lagos
        </button>
        <button
          onClick={() => setOfficeLocation("ogun")}
          className={`py-1 text-Secondary ${officeLocation === "ogun"
            ? "border-b-2 border-b-Secondary"
            : "border-b-2 border-b-transparent !text-white"
            }`}
        >
          Ogun
        </button>
        <figure className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12 mt-4">
          <div>
            <img src={officeImg} alt="our reception office desk" />
          </div>
          <figcaption>
            <span className="text-base uppercase">
              {officeLocation === "lagos"
                ? "OUR HEADQUARTER"
                : "OUR BRANCH OFFICE"}
            </span>
            {officeLocation === "lagos" ? (
              <span className="block text-2xl md:text-[2.35rem] leading-[1.3] mt-4 smmt-8">
                49, Glover Road, <br /> Ikoyi, Lagos State.
              </span>
            ) : (
              <span className="block text-2xl md:text-[2.35rem] leading-[1.3] mt-4 smmt-8">
                Lagos - Ibadan Expressway, <br /> Isheri, Ogun state.
              </span>
            )}
          </figcaption>
        </figure>
      </section>
      <section className="py-16 relative text-Primary bg-[#FFFCF5]">
        <TopWatermark />
        <BottomWatermark />
        <div className="px-4 sm:px-[7%]">
          <h2 className="line-heading text-sm uppercase mb-4 text-dark-200">
            WHAT WE DO
          </h2>
          <h3 className="font-medium text-2xl md:text-[2.8rem] leading-[1.3] mb-8">
            {" "}
            We have a vision for the future of construction.
          </h3>
          <div className="flex items-center justify-between flex-wrap lg:max-w-[50%] gap-4 mb-7">
            <button
              className={`text-base py-1 ssm:text-lg ${visionType === "dredging"
                ? "border-b-2 border-b-Secondary text-Secondary"
                : "border-b-2 border-b-transparent text-dark200"
                }`}
              onClick={() => setVisionType("dredging")}
            >
              Dredging
            </button>
            <button
              className={`text-base py-1 ssm:text-lg ${visionType === "real-estate"
                ? "border-b-2 border-b-Secondary text-Secondary"
                : "border-b-2 border-b-transparent text-dark200"
                }`}
              onClick={() => setVisionType("real-estate")}
            >
              Real estate
            </button>
            <button
              className={`text-base py-1 ssm:text-lg ${visionType === "construction"
                ? "border-b-2 border-b-Secondary text-Secondary"
                : "border-b-2 border-b-transparent text-dark200"
                }`}
              onClick={() => setVisionType("construction")}
            >
              Construction
            </button>
            <button
              className={`text-base py-1 ssm:text-lg ${visionType === "land-reclaim"
                ? "border-b-2 border-b-Secondary text-Secondary"
                : "border-b-2 border-b-transparent text-dark200"
                }`}
              onClick={() => setVisionType("land-reclaim")}
            >
              Land reclamation
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          <figure className="grow basis-80 px-4 sm:px-0">
            <img
              className="min-h-full object-cover"
              src={currentVision?.img}
              alt={currentVision?.title}
            />
          </figure>
          <section className="grow basis-80 px-4 sm:px-[7%] py-[3%] flex flex-col justify-between gap-6 text-justify">
            <div className="grow">
              <h3 className="text-2xl font-medium mb-4">
                {currentVision?.title}
              </h3>
              <p className="text-grey100 leading-[1.7]">
                {currentVision?.description}
              </p>
            </div>
            <Link
              to={`${currentVision?.url}`}
              className={`${styles.primaryBtn} w-fit`}
            >
              Learn more
            </Link>
          </section>
        </div>
      </section>
      <section className="py-16 relative text-Primary bg-light200 z-10 px-4 sm:px-0 sm:pl-[7%]">
        <TopWatermark />
        <h2 className="line-heading text-sm uppercase mb-4 text-dark-200">
          WHAT WE HAVE BUILT
        </h2>
        <h3 className="font-medium text-2xl md:text-[2.8rem] leading-[1.3] mb-14">
          Explore an unparalleled living experience <br /> through our ongoing
          projects.
        </h3>
        <div className="grid sm:grid-cols-[.6fr,_1fr] gap-8 md:gap-x-16">
          <section className="md:py-8 flex flex-col justify-between gap-8 xl:max-h-[450px]">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4">
                <button
                  className={`text-sm py-1 ${project === "hampton-bay"
                    ? "border-b-2 border-b-Secondary text-Secondary"
                    : "border-b-2 border-b-transparent text-dark200"
                    }`}
                  onClick={() => setProject("hampton-bay")}
                >
                  Hampton Bay
                </button>
                <button
                  className={`text-sm py-1 ${project === "hampton-island"
                    ? "border-b-2 border-b-Secondary text-Secondary"
                    : "border-b-2 border-b-transparent text-dark200"
                    }`}
                  onClick={() => setProject("hampton-island")}
                >
                  Hampton Island
                </button>
                <button
                  className={`text-sm py-1 ${project === "hampton-lake"
                    ? "border-b-2 border-b-Secondary text-Secondary"
                    : "border-b-2 border-b-transparent text-dark200"
                    }`}
                  onClick={() => setProject("hampton-lake")}
                >
                  Hampton Lake
                </button>
                <button
                  className={`text-sm py-1 ${project === "land-reclaim"
                    ? "border-b-2 border-b-Secondary text-Secondary"
                    : "border-b-2 border-b-transparent text-dark200"
                    }`}
                  onClick={() => setProject("land-reclaim")}
                >
                  Land Reclamation
                </button>
              </div>
              <h3 className="text-2xl font-medium my-4 md:my-8">
                {currentProject?.title}
              </h3>
              <p className="text-grey100 leading-[1.7] text-justify">
                {currentProject?.description}
              </p>
              <p className="text-grey100 text-sm mt-5">
                Location:{" "}
                <span className="font-medium">{currentProject?.location}</span>
              </p>
            </div>
            <Link
              to={`project/${currentProject?.id}`}
              className={`${styles.primaryBtn} w-fit`}
            >
              View gallery
            </Link>
          </section>
          <figure>
            <img
              className="w-full min-h-full object-cover rounded-bl-md"
              src={currentProject?.img}
              alt={currentProject?.description}
            />
          </figure>
        </div>
      </section>
      <section className="pl-4 sm:pl-[7%] py-16 relative">
        <TopWatermark />
        <h3 className="font-medium text-2xl text-Primary">Featured Insights</h3>
        <div className="relative">
          <button onClick={() => swiperRef?.slidePrev()} className="absolute top-1/2 z-10 p-1.5 bg-Primary rounded-full">
            <svg width="25" height="25" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button onClick={() => swiperRef?.slideNext()} className="absolute top-1/2 z-10 p-1.5 right-0 bg-Primary rounded-full">
            <svg width="25" height="25" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
          <Swiper
            onSwiper={setSwiperRef}
            breakpoints={{
              250: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              350: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              420: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mt-8 pr-4 sm:pr-[7%] insight-swiper"
          >
            {insights.map((insight, index: number) => (
              <SwiperSlide key={index}>
                <InsightCard insight={insight} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <CollaboratorContact />
    </>
  );
};

export default Home;
