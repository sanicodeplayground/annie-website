function Hero() {
  return (

    <section className="bg-[url('/images/annie1.jpg')] w-full bg-right bg-cover relative">
    {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div> */}
    <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>

    <div className="flex justify-end mx-auto max-w-screen-xl py-20 sm:py-40 px-4 relative z-20">
        <div className="max-w-md">
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl text-custom-light">
            Annie is an illustrator based in Bristol
          </h2>
          <p className="mb-8 text-lg max-w-md">
            I spend most of my time creating illustrations that tell the stories of the natural world.
          </p>
        </div>
    </div>

      
    </section>
  );
}

export default Hero;
