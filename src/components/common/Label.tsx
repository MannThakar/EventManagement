import clsx from "clsx";
import { FaStarOfLife } from "react-icons/fa";

export default function Label({
  label,
  labelClass,
  isRequiredField,
}: {
  label?: string;
  labelClass?: string;
  isRequiredField?: boolean;
}) {
  if (!label) return null;

  return (
    <label
      htmlFor=""
      className={clsx(
        labelClass ||
          "pb-1.5 inline-block text-sm text-(--primary-text-color) font-normal lg:text-base xl:text-lg",
      )}
    >
      <span className="flex gap-1">
        <span>{label}</span>
        {isRequiredField && <FaStarOfLife className="w-1.5 text-red-700" />}
      </span>
    </label>
  );
}
