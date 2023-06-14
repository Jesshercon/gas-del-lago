const DaySelect = (label, className, dayTitle, ...restProps) => {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return (
    <div {...restProps}>
      <select className="w-full border border-gray-main rounded text-gray-main px-2 py-1">
        <option>{dayTitle}</option>
        {days.map((day) => {
          <option
            className="font-bold text-blue-primary "
            value={day}
            key={day}
          >
            {day}
          </option>;
        })}
      </select>
    </div>
  );
};

export default DaySelect;
