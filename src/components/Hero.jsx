function Hero() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl">
            Annie is an illustrator based in Bristol
          </h2>
          <p className="mb-8 text-lg max-w-md">
            I spend most of my time creating cute and colorful art that will hopefully make you smile!
          </p>
          <div className="flex sm:space-y-0 gap-3 md:gap-3 flex-1">
            
            <a
              href="#"
              target="_blank"
              aria-labelledby="LinkedInLogo"
              title="LinkIn profile"
              className="inline-flex items-center justify-center px-4 py-4 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-orange-500"
            >
              <svg
                className="w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.37614 5.51405C6.37614 6.90252 5.17265 8.0281 3.68807 8.0281C2.20349 8.0281 1 6.90252 1 5.51405C1 4.12558 2.20349 3 3.68807 3C5.17265 3 6.37614 4.12558 6.37614 5.51405Z" />
                <path d="M1.3676 9.87604H5.96259V23.8H1.3676V9.87604Z" />
                <path d="M13.3605 9.87604H8.76554V23.8H13.3605C13.3605 23.8 13.3605 19.4165 13.3605 16.6758C13.3605 15.0308 13.9222 13.3785 16.1635 13.3785C18.6964 13.3785 18.6811 15.5313 18.6693 17.1991C18.6539 19.3792 18.6907 21.6039 18.6907 23.8H23.2857V16.4512C23.2468 11.7588 22.0241 9.5967 18.0015 9.5967C15.6126 9.5967 14.1318 10.6812 13.3605 11.6624V9.87604Z" />
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
