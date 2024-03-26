import { Link } from "react-router-dom";
import projects from "./ProjectsData";

function Projects() {
  return (
    <section>
      <h2 className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mb-4 text-4xl font-extrabold text-custom-primary">
        Recent Projects
      </h2>

      {/* projects grid */}
      <ul className="grid sm:max-w-[52.5rem] px-4 grid-cols-1 sm:grid-cols-2  mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:px-8 lg:max-w-6xl pb-20">
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`} title={project.title}>
              <div className="w-full overflow-hidden">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="mb-2 transition ease-in-out duration-1000 object-cover hover:scale-105"
                />
              </div>
              <h3 className="text-custom-primary font-semibold md:text-xl">
                {project.description}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
