import { appleImg } from "../utils";
import { navLists } from "../constants";
import { FaBagShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="fixed z-40 flex w-full items-center justify-between bg-black p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <a href="/">
          <img src={appleImg} alt="Apple" width={100} height={21.76} />
        </a>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <a
              href={nav.url}
              key={i}
              className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
            >
              {nav.name}
            </a>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <FiSearch width={18} height={18} />
          <FaBagShopping width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
