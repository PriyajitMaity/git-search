import { GoSearch } from "react-icons/go";


const Navbar = () => {
  return <div className="bg-blue-500 flex items-center justify-start p-4">
    <span className="text-2xl mx-2 font-bold text-zinc-50"><GoSearch /></span>
    <p className="text-2xl font-bold text-zinc-50">Finder</p>
  </div>;
};

export default Navbar;
