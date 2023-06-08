import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const CoreValue = ({ className, children, icon, title, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={classNames(className, "flex flex-col text-center space-y-9")}
    >
      <p>
        <FontAwesomeIcon
          className="text-blue-secondary mx-auto"
          style={{ width: "53px" }}
          icon={icon}
        />
      </p>
      <p className="font-bold text-blue-primary text-3xl">{title}</p>

      <div>{children}</div>
    </div>
  );
};

export default CoreValue;
