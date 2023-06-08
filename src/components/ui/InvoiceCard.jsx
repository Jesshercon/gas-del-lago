import classNames from "classnames";

const InvoiceCard = ({ children, className, title, bullet, ...restProps }) => {
  const invoiceData = [
    "RFC",
    "Código Postal",
    "Número de folio",
    "Uso de factura",
    "Nombre/ Razón social",
    "Ciudad/Municipio",
    "Tipo de servicio",
    "Domicilio completo",
    "Teléfono",
    "Método de pago",
  ];
  return (
    <div
      className={classNames(
        className,
        " border border-gray-main rounded-sm h-auto shadow-2xl mx-auto mt-5 bg-white-main"
      )}
      {...restProps}
    >
      <p className="font-bold text-blue-secondary-two my-6 text-center">
        {title}
      </p>
      <ul className="font-bold text-blue-primary space-y-6 my-7 mx-6">
        {invoiceData.map((data) => (
          <li className="flex ">
            <img src={bullet} className="pr-5" />
            {data}
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
};

export default InvoiceCard;
