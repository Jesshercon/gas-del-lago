import classNames from "classnames";

const Button = ({
  children,
  variant,
  className = "px-3.5 py-2",
  inverse,
  ...restProps
}) => {
  const classes = classNames(className, "rounded", {
    "bg-blue-secondary-two text-white-main": variant == "primary" && !inverse,
    "bg-blue-secondary-two text-blue-secondary border border-blue-secondary-two":
      variant == "secondary" && inverse,
    "bg-yellow-warning text-blue-primary": variant == "action" && !inverse,
    "bg-yellow-warning border border-yellow-warning":
      variant == "action" && inverse,
    "bg-green-primary text-white-main": variant == "confirm" && !inverse,
    "bg-green-primary text-green-primary border border-green-primary":
      variant == "confirm" && inverse,
    "text-white-main border border-white-neutral":
      variant == "neutral" && !inverse,
    "text-white-main": variant == "neutral" && inverse,
  });
  return (
    <button {...restProps} className={classes}>
      {children}
    </button>
  );
};
export default Button;
