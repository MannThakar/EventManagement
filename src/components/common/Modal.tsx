import { iModalProps } from "@/interface/common";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  onSubmit,
  formClassName,
}: iModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[10px]"
        onClick={onClose}
      />

      <div
        className={clsx(
          className,
          "relative z-10 w-115 rounded-2xl bg-white shadow-[2px_8px_12px_3px_rgba(0,0,0,0.1)] ring-1 ring-black/10 outline-none overflow-hidden ",
        )}
      >
        {/*Note: Header */}
        <div className="flex items-center justify-between px-6 mt-6">
          <h2 className="text-lg font-bold text-(--primary-text-color)">
            {title}
          </h2>

          <Button
            onClick={onClose}
            className="px-2 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-red-100 transition"
          >
            <IoMdClose className="w-4 h-4 text-current" />
          </Button>
        </div>

        {/*Note: Body */}
        <form
          className={clsx(formClassName, "mt-6")}
          onSubmit={onSubmit}
          method="post"
        >
          <div className="px-10">{children}</div>

          {/* Note: Footer */}
          <div className="flex justify-end gap-2 my-10 px-10 ">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-2xl cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-[#4880ff] text-white rounded-2xl cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
