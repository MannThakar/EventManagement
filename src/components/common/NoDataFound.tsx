import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { iNoDataFound } from "@/interface/common";

const NoDataFound: React.FC<iNoDataFound> = ({
  text = "",
  className,

  textClassName,
}) => {
  return (
    <div
      className={clsx("flex flex-col justify-center items-center", className)}
    >
      <Image
        src="/svg/03_NO_DATA_FOUND.svg"
        alt="No Data Found"
        width={300}
        height={300}
      />
      <h2
        className={clsx("font-semibold  text-3xl text-gray-600", textClassName)}
      >
        {text}
      </h2>
    </div>
  );
};

export default NoDataFound;
