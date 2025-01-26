import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-13" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Your trusted platform for seamless doctor appointment management.
            Find experienced doctors, book appointments easily, and manage your
            healthcare online. Simplify your medical journey with DoctorHub
            today!
          </p>
        </div>

        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-123-456-7890</li>
            <li>support@doctorhub.com</li>
          </ul>
        </div>
      </div>

      {/* copyright section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; {new Date().getFullYear()} DoctorHub - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
