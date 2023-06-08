const Select = ({ label, className, titleSelector, options, ...restProps }) => {
  return (
    <div className="space-y-2">
      <label className="font-bold text-blue-primary" htmlFor={restProps.id}>
        {label}
      </label>
      <select
        className="w-full border border-gray-main rounded text-gray-main px-2 py-1"
        {...restProps}
      >
        <option>{titleSelector}</option>
        <option>{options}</option>
        <option>{options}</option>
      </select>
    </div>
  );
};

export default Select;
