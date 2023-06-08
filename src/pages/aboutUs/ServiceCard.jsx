const ServiceCard = ({
  img,
  title,
  content,
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={className} {...restProps}>
      <img
        className="w-28 h-28 mx-auto object-contain object-center"
        src={img}
      />
      <p className="text-blue-primary font-bold my-4 text-2xl"> {title}</p>
      <p className="text-gray-main text-sm font-medium text-center">
        {content}
      </p>
      {children}
    </div>
  );
};

export default ServiceCard;
