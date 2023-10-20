import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import UseName from "../user/UseName";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link className="tracking-widest" to={"/"}>
        Fast Kal piazza Co.
      </Link>
      <SearchOrder />
      <UseName />
    </header>
  );
}

export default Header;
