import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const AppBenefits = ({
  className,
  children,
  icon,
  title,
  footText,
  ...restProps
}) => {
  return (
    <div {...restProps} className={classNames(className)}>
      <div className="flex items-center gap-4">
        <p>
          <FontAwesomeIcon
            icon={icon}
            className="text-4xl text-blue-secondary"
            style={{ width: "28px" }}
          />
        </p>
        <div>
          {" "}
          <p className="font-bold text-blue-primary text-xl">{title}</p>
          <p className="text-gray-main">{footText}</p>
        </div>
      </div>
    </div>
  );
};

export default AppBenefits;
