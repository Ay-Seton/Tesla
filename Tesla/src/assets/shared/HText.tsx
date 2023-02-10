type Props = {
  title: string;
};

const HText = ({ title }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-4xl"> {title}</h1>
    </div>
  );
};

export default HText;
