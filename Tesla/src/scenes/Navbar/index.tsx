import TeslaLogo from "@/assets/TeslaLogo.svg";
import Link from "@/assets/shared";
import Menu from "@/scenes/Link";
import useMediaQuery from "@/assets/Hooks/useMediaQuery";
import { useState } from "react";
import { navItems } from "@/assets/shared/navItems";

type Props = {
  //   isMenuToggled: boolean;
  //   setIsMenuToggled: (value: boolean) => void;
};

const Navbar = (prop: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className="fixed z-40">
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
    </nav>
  );
};

export default Navbar;
