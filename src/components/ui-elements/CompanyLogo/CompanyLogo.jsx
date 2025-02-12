import { Link } from "react-router-dom";

export const CompanyLogo = () => {
  return (
    <Link to="/home" className="flex items-center">
      <div className="self-center text-xl font-bold text-gray-800 whitespace-nowrap dark:text-white hover:text-gray-200">
       <img src="/userimage/company_logo.png" className="w-[55vw] md:w-[29vw] lg:w-[22vw] -ml-[30px]" alt="company logo"></img>
      </div>
    </Link>
  );
};
