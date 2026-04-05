import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="mt-10 mb-6 font-semibold text-black text-3xl">{text}</h1>
  );
};

export default Heading;
