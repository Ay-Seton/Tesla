type Props = {
  title: string;
  setIsMenuToggled: (value: boolean) => void;
  isMenuToggled: boolean;
};

const Menu = ({ title, setIsMenuToggled, isMenuToggled }: Props) => {
  console.log("MenuYoggled", isMenuToggled);
  return (
    <div className="hover:bg-gray-100 hover:rounded-md py-2 px-2">
      <a className="py-2 px-3" onClick={() => { setIsMenuToggled(!isMenuToggled)} }>
        {title}
      </a>
    </div>
  );
};

export default Menu;
