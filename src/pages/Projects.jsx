import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// constants
import { Cta } from "../components";

// constants
import { PROJECTS, SITE_NAME } from "../constants";

// icons
import { arrow } from "../assets/icons";

// projects
const Projects = () => {
  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Projects</title>
      </Helmet>

      {/* projects section */}
      <section className="max-container">
        {/* projects head */}
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>

        {/* projects text */}
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          Since 2023, I have engineered and shipped AI powered products that deliver measurable business impact. My work includes building systems that improved research throughput by 15%, increased customer repeat visits by 70%, boosted conversion rates by 9%, reduced API response times by 35%, and generated over $40K in incremental revenue. I have supported infrastructure serving 1,500+ users with 99.8% uptime, architected platforms handling 10K+ monthly interactions, and helped secure $10M+ in investor commitments through rapid prototyping and product validation. The projects featured here represent work across enterprise AI systems,  high performance ecommerce platforms, scalable edtech infrastructure and AI research collaboration. I believe in collaborative innovation, and each of these solutions continues to evolve through shared ideas and real world application.
          </p>
        </div>

        {/* projects list */}
        <div className="flex flex-wrap my-20 gap-16">
          {/* map over projects */}
          {PROJECTS.map((project) => (
            <div
              key={`Project_${project.name}`}
              className="lg:w-[400px] w-full"
            >
              {/* project */}
              <div className="block-container w-12 h-12">
                {/* project icon bg */}
                <div className={`btn-back rounded-xl ${project.theme}`} />

                {/* project icon */}
                <div
                  className="btn-front rounded-xl flex justify-center items-center"
                  title={project.name}
                >
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              {/* project info */}
              <div className="mt-5 flex flex-col">
                {/* project name */}
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>

                {/* project description */}
                <p className="mt-2 text-slate-500">{project.description}</p>

                {/* project link */}
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  {/* live link */}
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                    title="Live Site Link"
                  >
                    Live Link
                  </Link>

                  {/* right arrow */}
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* horizontal separator */}
        <hr className="border-slate-200" />

        {/* call-to-action */}
        <Cta />
      </section>
    </>
  );
};

export default Projects;
