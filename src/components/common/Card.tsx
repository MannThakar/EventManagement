import React from "react";
import Image from "next/image";
import { MdDelete, MdEdit, MdVisibility } from "react-icons/md";
import { iCardProps } from "@/interface/common";
import { dateTimeFormatter } from "@/utils/helper";
import { EVENT_TYPE_ALIAS } from "@/utils/constant";

const Card: React.FC<iCardProps> = ({
  item,
  onEditClick,
  onReadClick,
  onDeleteClick,
}) => {
  if (!item || Object.keys(item).length === 0) return null;

  return (
    <section className="card relative group w-84 h-94 bg-white rounded-2xl overflow-hidden shadow-md">
      <Image
        src={item?.image || ""}
        alt={item?.title ?? ""}
        className="w-35 h-35 object-cover rounded-full mx-auto mt-8"
        width={200}
        height={200}
      />

      <div className="mt-6 flex flex-col gap-2 items-center text-center px-4">
        <h2 className="md:text-md text-base font-bold text-(--primary-text-color)">
          {item?.title || "-"}
        </h2>

        <p className="text-sm text-gray-500">{item?.category || "-"}</p>

        <p className="text-xs text-gray-500">
          {dateTimeFormatter(item?.startDateTime)} →{" "}
          {dateTimeFormatter(item?.endDateTime)}
        </p>

        <p className="text-sm text-gray-500">
          {EVENT_TYPE_ALIAS[item?.eventType as keyof typeof EVENT_TYPE_ALIAS]}
        </p>

        <p className="text-xs text-gray-400 mt-3">
          By: {item?.organizer || "Unknown"}
        </p>
      </div>

      <div className="absolute top-22 right-0 -translate-y-1/2 flex flex-col gap-3 pr-3">
        <button
          onClick={() => onReadClick?.(item)}
          className="p-3 bg-gray-100 rounded-full shadow-md 
          translate-x-16 opacity-0 
          group-hover:translate-x-0 group-hover:opacity-100 
          transition-all duration-300 delay-75 cursor-pointer"
        >
          <MdVisibility size={15} className="text-gray-500" />
        </button>

        <button
          onClick={() => onEditClick?.(item)}
          className="p-3 bg-blue-100 text-white rounded-full shadow-md 
          translate-x-16 opacity-0 
          group-hover:translate-x-0 group-hover:opacity-100 
          transition-all duration-300 delay-150 cursor-pointer"
        >
          <MdEdit size={15} className="text-blue-500" />
        </button>

        <button
          onClick={() => onDeleteClick?.(item?.id as string)}
          className="p-3 bg-red-100 text-white rounded-full shadow-md 
          translate-x-16 opacity-0 
          group-hover:translate-x-0 group-hover:opacity-100 
          transition-all duration-300 delay-200 cursor-pointer"
        >
          <MdDelete size={15} className="text-red-500" />
        </button>
      </div>
    </section>
  );
};

export default React.memo(Card);
