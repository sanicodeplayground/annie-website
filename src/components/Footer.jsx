import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-sm pt-20 pb-10 sm:p-6">
      <p>
        All artwork © Annie Brooker /{" "}
        <a
          className="md:w-1/4 underline hover:text-custom-hover"
          href="https://www.instagram.com/anniebookerart/"
          title="Annie's Instagram"
          target="_blank"
        >
          📸 @anniebookerart
        </a>
      </p>
    </footer>
  );
}

export default Footer;
