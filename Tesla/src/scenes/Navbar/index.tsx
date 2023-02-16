import TeslaLogo from "@/assets/TeslaLogo.svg";
import Link from "@/assets/shared";
import Menu from "@/scenes/Link";
import useMediaQuery from "@/assets/Hooks/useMediaQuery";
import { useState } from "react";
import { navItems, mobItems } from "@/assets/shared/navItems";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  //   isMenuToggled: boolean;
  //   setIsMenuToggled: (value: boolean) => void;
};

const Navbar = (prop: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className="fixed z-50">
      <div className="w-full fixed font-semimedium text-sm">
        <div className={`${flexBetween} mx-auto w-11/12 font-xs py-3 md:py-0`}>
          {/* LOGO  */}
          <div>
            <img alt="Tesla Logo" src={TeslaLogo} />
          </div>
          {/* MENU */}
          {isAboveMediumScreen ? (
            <div className={`${flexBetween} my-2 gap-0.5`}>
              {navItems.map((item) => {
                return <Link key={item} title={item} />; //generate the navMenu items
              })}
              <Menu
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled} //ToggleMenu
                title="Menu"
              />
            </div>
          ) : (
            <Menu
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled} //ToggleMenu
              title="Menu"
            />
          )}
        </div>
      </div>

      {/* MOBILE  */}
      {isMenuToggled && (
        <div className="fixed top-0 right-0 z-40 h-full overflow-y-scroll w-[300px] bg-white pb-3 border-l-2">
          <div className="flex justify-end p-5">
            <button
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <XMarkIcon className="h-8 w-8 p-1 hover:bg-gray-100 hover:rounded-md" />
            </button>
          </div>
          <div className="flex flex-col text-sm font-semimedium mx-5">
            {mobItems.map((item) => {
              return <Link key={item} title={item} />; //generate the navMenu items
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
