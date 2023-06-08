import classNames from "classnames";

const Input = ({ label, className, ...restProps }) => {
  return (
    <div>
      <label className="font-bold text-blue-primary" htmlFor={restProps?.id}>
        {label}
      </label>
      <input
        className={classNames(
          className,
          " flex w-full rounded border border-gray-main px-2 py-1 placeholder:text-gray-main"
        )}
        {...restProps}
      />
    </div>
  );
};

export default Input;
