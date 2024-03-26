function ContactForm() {
  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="gap-16 items-center py-8 text-4xl font-extrabold">
          Contact me
        </h1>
        <p>
          Please feel free to contact me about work or oppourtunities via my
          email or telephone number.
        </p>
        <p>anniebookerillustration@gmail.com</p>
        <p>07383085096</p>
        <p>
          As always I am keen to be involved in conservation, rewildling work in
          any way.
        </p>
        <form action="#" className="space-y-6 mt-10">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
