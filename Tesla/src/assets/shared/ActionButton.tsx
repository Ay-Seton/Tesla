type Props = {
  text: string;
  backgroundColor: string;
};

const ActionButton = ({ text, backgroundColor }: Props) => {
  return (
    <div className={`rounded-md ${backgroundColor} border-2`}>
      <div className="flex justify-center ">
        <button className="py-2 px-12 font-semimedium">{text}</button>
      </div>
    </div>
  );
};

export default ActionButton;
