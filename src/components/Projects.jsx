function Projects() {
  return (
    <section>
      <h2 className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mb-4 text-4xl font-extrabold text-custom-grey">
        Recent Projects
      </h2>

      {/* projects grid */}
      <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] px-4 grid-cols-1 sm:grid-cols-2  mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:px-8 lg:max-w-6xl pb-20">
        
        <li className="">
            <a href="/" target="_blank" title="The Great Bear">
              <img
                src="./images/portfolio/04.jpeg"
                alt="Portfolio"
                className="rounded-xl"
              />
              <h3 className="text-sm leading-6 text-slate-900  font-semibold  md:text-xl mb-4 mt-6 "> The Great Bear </h3>
            </a>
        </li>

        <li className="">
            <a href="/" target="_blank" title="The Great Bear">
              <img
                src="./images/portfolio/05.jpg"
                alt="Portfolio"
                className="rounded-xl"
              />
              <h3 className="text-sm leading-6 text-slate-900  font-semibold  md:text-xl mb-4 mt-6 ">Tales From The North</h3>
            </a>
        </li>

        <li className="">
            <a href="/" target="_blank" title="The Nature of Ringing">
              <img
                src="./images/portfolio/01.jpeg"
                alt="Portfolio"
                className="rounded-xl"
              />
              <h3 className="text-sm leading-6 text-slate-900  font-semibold  md:text-xl mb-4 mt-6 "> The Nature of Ringing </h3>
            </a>
        </li>

        <li className="">
            <a href="/" target="_blank" title="Finding The Wild">
              <img
                src="./images/portfolio/06.jpg"
                alt="Portfolio"
                className="rounded-xl"
              />
              <h3 className="text-sm leading-6 text-slate-900  font-semibold  md:text-xl mb-4 mt-6 "> Finding The Wild</h3>
            </a>
        </li>

      </ul>
    </section>
  );
}

export default Projects;
