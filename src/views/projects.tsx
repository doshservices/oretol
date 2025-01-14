import { useParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { PagesContainer } from "../components/PagesContainer";
import { ourProjects } from "../data/projects";
import { CollaboratorContact } from "../components/CollaboratorContact";
import { ErrorPage } from "./PageNotFound";

const Projects = () => {
  const { id } = useParams();

  const project = ourProjects?.find((project) => project?.id === id);


  return (
    <>
      <Navbar />
      <PagesContainer>
        {project?.heroImg ? (
          <>
            <div className="bg-[#F8F8F8] pt-12">
              <img
                src={project?.heroImg}
                alt={project?.assurance}
                className="w-full min-h-96 object-cover"
              />
              <section className="py-16 text-Primary px-4 sm:px-[7%]">
                <h2 className="line-heading text-sm uppercase mb-4">
                  project details
                </h2>
                <p className="font-medium text-2xl md:text-[2.8rem] leading-[1.35]">
                  {project?.projectDetails}
                </p>
              </section>
              <div className="flex uppercase px-4 sm:px-[7%] justify-between flex-wrap gap-3">
                <div>
                  <p className="text-grey100 text-sm">LOCATION</p>
                  <p className="text-xl font-semibold text-Primary mt-2">
                    {project?.location}
                  </p>
                </div>
                <div>
                  <p className="text-grey100 text-sm">SECTOR</p>
                  <p className="text-xl font-semibold text-Primary mt-2">
                    {project?.sector}
                  </p>
                </div>
                <div>
                  <p className="text-grey100 text-sm">SERVICE PROVIDED</p>
                  <p className="text-xl font-semibold text-Primary mt-2">
                    {project?.serviceProvided}
                  </p>
                </div>
                <div>
                  <p className="text-grey100 text-sm">START DATE</p>
                  <p className="text-xl font-semibold text-Primary mt-2">
                    {project?.startDate}
                  </p>
                </div>
                {project?.status && (
                  <div>
                    <p className="text-grey100 text-sm">STATUS</p>
                    <p className="text-xl font-semibold text-Primary mt-2">
                      {project?.status}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-grey100 text-sm">COMPLETION DATE</p>
                  <p className="text-xl font-semibold text-Primary mt-2">
                    {project?.completionDate}
                  </p>
                </div>
              </div>
              <p className="text-grey100 px-4 sm:px-[7%] my-12 text-justify leading-[2]">
                {project?.details}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 px-4 gap-3 sm:gap-5">
                {project?.gallery?.map((gallery, index) => (
                  <figure
                    className="h-[200px] border border-Primary rounded-md overflow-hidden"
                    key={index}
                  >
                    <img
                      src={gallery}
                      alt="construction"
                      className="w-full min-h-full object-cover"
                    />
                  </figure>
                ))}
              </div>
              <section className="py-16 text-Primary px-4 sm:px-[7%]">
                <h2 className="line-heading text-sm uppercase mb-4">
                  BE REST ASSURED
                </h2>
                <p className="font-medium text-2xl md:text-[2.8rem] leading-[1.35]">
                  {project?.assurance}
                </p>
              </section>
              <div className="grid grid-cols-2 sm:grid-cols-4 px-4 gap-3 sm:gap-5 mb-10">
                {project?.otherGallery?.map((gallery, index) => (
                  <figure
                    className="h-[200px] border border-Primary rounded-md overflow-hidden"
                    key={index}
                  >
                    <img
                      src={gallery}
                      alt="construction"
                      className="w-full min-h-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
            <div>
              <CollaboratorContact />
            </div>
          </>
        ) : (
          <ErrorPage />
        )}
      </PagesContainer>
    </>
  );
};

export default Projects;
