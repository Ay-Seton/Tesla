type Props = {
  text: string;
  primaryVisible:string;
};


const PrimaryActionButton = ({primaryVisible, text}: Props) => {
  return (
    <div className={`rounded-md bg-white opacity-70 ${primaryVisible}`}>
      <div className="flex justify-center ">
        <button className="py-2 px-20 text-black font-semimedium">
          {text}
        </button>
      </div>
    </div>
  );
};


export default PrimaryActionButton;
