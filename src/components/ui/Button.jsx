import classNames from "classnames";

const Button = ({ children, variant, className, inverse, ...restProps }) => {
  const classes = classNames(className, "rounded", {
    "bg-blue-secondary-two text-white": variant == "primary" && !inverse,
    "bg-blue-secondary-two text-blue-secondary border border-blue-secondary-two":
      variant == "secondary" && inverse,
    "bg-yellow-warning text-blue-primary": variant == "action" && !inverse,
    "bg-yellow-warning border border-yellow-warning":
      variant == "action" && inverse,
    "bg-green-primary text-white": variant == "confirm" && !inverse,
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
