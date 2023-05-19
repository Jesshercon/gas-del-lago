const ServiceCard = ({ img, title, content, className }) => {
  return (
    <div className={className}>
      <img
        className="w-28 h-28 mx-auto object-contain object-center"
        src={img}
      />
      <p className="text-blue-primary font-bold my-4 text-2xl"> {title}</p>
      <p className="text-gray-main text-sm font-medium text-center">
        {content}
      </p>
    </div>
  );
};

export default ServiceCard;
