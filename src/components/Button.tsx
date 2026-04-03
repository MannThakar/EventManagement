import clsx from "clsx";

const Button = ({
  type = "button",
  children,
  className,
  disabled = false,
  onClick,
  ...args
}: any) => {
  return (
    <button
      type={type}
      className={clsx(
        clsx(
          "disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer",
          className,
        ),
      )}
      disabled={disabled}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
