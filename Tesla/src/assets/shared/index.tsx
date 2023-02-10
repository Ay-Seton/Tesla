import React from "react";

type Props = {
  title: string;
};

const Link = ({ title }: Props) => {
  return (
    <div className="py-2 px-2 z-30">
      <a className=" hover:bg-gray-100 hover:rounded-md py-2 px-3">{title}</a>
    </div>
  );
};

export default Link;
