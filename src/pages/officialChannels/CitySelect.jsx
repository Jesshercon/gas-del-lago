const CitySelect = ({
  label,
  className,
  cityTitle,
  cityOptions,
  ...restProps
}) => {
  const cities = [
    "Acámbaro",
    "Ario de Rosales",
    "Cuitzeo",
    "Morelia",
    "Moroleón/Uriangato",
    "Pátzcuaro",
    "Salvatierra",
    "Uruapan",
    "Valle de Santiago",
    "Zacapu",
  ];
  return (
    <div>
      <label className="font-bold text-blue-primary" htmlFor={restProps.id}>
        {label}
      </label>
      <select
        className="w-full border border-gray-main rounded text-gray-main px-2 py-1"
        {...restProps}
      >
        <option disabled>{cityTitle}</option>

        {cities.map((city) => (
          <option
            className="font-bold text-blue-primary"
            value={city}
            key={city}
          >
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelect;
