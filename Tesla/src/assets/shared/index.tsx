import React from "react";

type Props = {
  title: string;
};

const Link = ({ title }: Props) => {
  return (
    <div className="py-2 px-2 hover:bg-gray-100 hover:rounded-md">
      <a className="  w-full mt-2 py-2 px-3">{title}</a>
    </div>
  );
};

export default Link;
