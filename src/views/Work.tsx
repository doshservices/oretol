import { PagesContainer } from "../components/PagesContainer";
import { CollaboratorContact } from "../components/CollaboratorContact";
import { galleryItems } from "../data/blog/work";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <Navbar />
      <PagesContainer>
        <section className="px-4 sm:px-[7%] py-12">
          <h2 className="line-heading text-sm uppercase mb-4 text-dark200">
            WHAT WE HAVE BUILT
          </h2>
          <h3 className="font-medium text-2xl md:text-[2.8rem] max-w-[710px] leading-[1.35] text-Primary">
            Building a sustainable future of the construction industry, one
            project at a time
          </h3>
        </section>
        <div className="grid ssm:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-12 px-4 sm:px-[7%] pb-12">
          {galleryItems.map((item, index) => (
            <figure key={index} className="work-blog-card group">
              <img src={item.src} alt={item.caption} className="w-full" />
              <Link
                to={`/project/${item?.id}`}
                className="relative py-3 sm:py-5 overflow-hidden work-detail block"
              >
                <figcaption className="text-base sm:text-xl font-medium text-Primary group-hover:text-light200">
                  {item.caption}
                </figcaption>
                <p className="text-grey100 text-sm transition-all duration-200 ease-in-out">
                  Location: <span className="font-medium">{item.location}</span>
                </p>
                <svg
                  className="absolute top-1/2 -translate-y-1/2 -right-24 group-hover:right-4 transition-all duration-500 ease-in-out"
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 24L17.2 21.1L24.3 14H0V10H24.3L17.2 2.9L20 0L32 12L20 24Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Link>
            </figure>
          ))}
        </div>
        <CollaboratorContact />
      </PagesContainer>
    </>
  );
};

export default Work;
