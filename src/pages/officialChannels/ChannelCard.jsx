import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
export default function ChannelCard({
  className,
  title,
  icon,
  action,
  ...restProps
}) {
  return (
    <div
      {...restProps}
      className="rounded bg-white-main shadow-xl flex flex-col text-center w-full mx-auto p-4"
    >
      <p className="font-bold text-blue-primary text-xl h-14 flex justify-center items-end">
        {title}
      </p>
      <div className="flex items-center justify-center h-28">
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: "60px" }}
          className="text-blue-secondary mx-auto"
        />
      </div>
      <div>{action}</div>
    </div>
  );
}
