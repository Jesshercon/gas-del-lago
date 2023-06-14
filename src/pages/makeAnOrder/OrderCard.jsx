import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const OrderCard = ({ className, icon, description, image, ...restProps }) => {
  return (
    <div
      className={classNames(
        (className =
          " flex flex-col rounded border border-gray-main text-center w-full p-4")
      )}
      {...restProps}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: "60px" }}
          className="text-blue-secondary mx-auto pt-6"
        />
      )}
      {image && (
        <div className="h-24 px-9">
          <img
            src={image}
            className="h-full w-full object-contain object-center"
          />
        </div>
      )}
      <p className="text-blue-primary mt-4">{description}</p>
    </div>
  );
};

export default OrderCard;
