import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="my-0 sm:p-6">
      <div className="py-8 px-4  mx-auto max-w-screen-xl pt-10">
        <div className="sm:flex sm:items-center sm:justify-center text-custom-grey">
          <span className="text-sm sm:text-center">
            © 2024
            <a
              href="https://github.com/sanicodeplayground/portfolio2024"
              className="hover:underline"
              target="_blank"
            >
              Annie Brooker Illustration
            </a>
            . All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
