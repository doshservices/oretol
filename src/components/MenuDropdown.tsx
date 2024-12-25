import { Link } from "react-router-dom";

export const MenuDropDown = ({
  styles,
  handleClick,
}: {
  styles: string;
  handleClick?: () => void;
}) => {
  return (
    <div
      className={`${styles} bg-[#FFFCF5] lg:bg-white flex-col gap-2 lg:absolute top-[100%] text-sm px-4 lg:py-4 rounded-sm lg:shadow-shawdowCart text-Primary`}
      aria-labelledby="navbarDropdown"
    >
      <Link onClick={handleClick} className="block" to="/services/dredging">
        DREDGING
      </Link>
      <Link onClick={handleClick} className="block" to="/services/real-estate">
        REAL ESTATE
      </Link>
      <Link onClick={handleClick} className="block" to="/services/construction">
        CONSTRUCTION
      </Link>
    </div>
  );
};
