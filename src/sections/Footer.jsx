import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="bg-s2 text-p5 font-poppins">
      <div className="container py-10 flex flex-col md:flex-row">
        <div className="hidden md:flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/3">
          <ul className="space-y-3">
            <li className="hover:text-p1 cursor-pointer">Features</li>
            <li className="hover:text-p1 cursor-pointer">Pricing</li>
            <li className="hover:text-p1 cursor-pointer">FAQ</li>
            <li className="hover:text-p1 cursor-pointer">Download</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:w-1/3 text-center">
          <div className="flex items-center justify-center w-50 h-50 mb-4">
            <img
              src="/images/xora.svg"
              alt="Logo"
              className="object-contain h-full w-full"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-p5">Subscribe</h2>
          <p className="opacity-70 text-sm mb-4">
            Sign up to our newsletter for feature updates and our undying love.
          </p>
          <form className="flex w-full max-w-md items-center border border-p5 rounded-20 bg-s3">
            <input
              type="email"
              placeholder="youremail@domain.com"
              className="flex-1 bg-transparent px-4 py-2 text-white placeholder-opacity-50 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-p1 text-s2 rounded-r-20 hover:bg-p2 transition duration-300"
            >
              →
            </button>
          </form>
        </div>
        <div className="flex flex-1 flex-col items-center md:items-end mt-8 md:mt-0">
          <ul className="flex space-x-4">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  className="transition duration-300 hover:opacity-70"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="h-8 w-8 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container py-10 border-t border-opacity-20 border-p5 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="opacity-70">Copyright, Arslanr369</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p className="legal-after relative text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Terms of Use
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
