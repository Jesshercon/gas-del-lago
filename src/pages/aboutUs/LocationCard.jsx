const LocationCard = ({ headerText, centerText, footerText, className }) => {
  return (
    <div className={className}>
      <p className="text-blue-primary font-bold text-2xl">{headerText}</p>
      <p className="text-yellow-warning text-3xl font-bold">{centerText}</p>
      <p className="text-blue-primary font-bold text-2xl">{footerText}</p>
    </div>
  );
};

export default LocationCard;
