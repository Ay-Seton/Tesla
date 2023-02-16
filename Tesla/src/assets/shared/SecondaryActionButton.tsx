type Props = {
  text: string;
};

const SecondaryActionButton = ({ text }: Props) => {
  return (
    <div className={`rounded-md bg-black opacity-70`}>
      <div className="flex justify-center ">
        <button className="py-2 px-20 text-white font-semimedium">
          {text}
        </button>
      </div>
    </div>
  );
};

export default SecondaryActionButton;