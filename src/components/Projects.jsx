function Projects() {
  // Define an array of projects
  const projects = [
    {
      href: "/",
      target: "_blank",
      title: "The Great Bear",
      src: "./images/portfolio/03.jpeg",
      alt: "The Great Bear",
      description: "The Great Bear",
    },
    {
      href: "/",
      target: "_blank",
      title: "Tales From The North",
      src: "./images/portfolio/05.jpg",
      alt: "Tales From The North",
      description: "Tales From The North",
    },
    {
      href: "/",
      target: "_blank",
      title: "The Nature of Ringing",
      src: "./images/portfolio/02.jpeg",
      alt: "The Nature of Ringing",
      description: "The Nature of Ringing",
    },
    {
      href: "/",
      target: "_blank",
      title: "Finding The Wild",
      src: "./images/portfolio/06.jpg",
      alt: "Finding The Wild",
      description: "Finding The Wild",
    },
  ]
  return (
    <section>
      <h2 className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mb-4 text-4xl font-extrabold text-custom-grey">
        Recent Projects
      </h2>

      {/* projects grid */}
      <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] px-4 grid-cols-1 sm:grid-cols-2  mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:px-8 lg:max-w-6xl pb-20">
        {projects.map((project, index) => (
          <li key={index} >
            <a href={project.href} target={project.target} title={project.title} >
              <img
              src={project.src}
              alt={project.alt}
              className="rounded-xl"
              />
              <h3 className="leading-6 text-custom-grey font-semibold md:text-xl mb-4 mt-6" >
                {project.description}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
