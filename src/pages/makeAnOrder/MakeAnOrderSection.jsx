import { faClock } from "@fortawesome/free-regular-svg-icons";
import OrderCard from "./OrderCard";
import {
  faHomeUser,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderForm from "./OrderForm";

export const MakeAnOrderSection = () => {
  return (
    <div className="w-6/12 mx-auto">
      <div className="text-center pt-16">
        {" "}
        <p className="font-bold text-4xl text-blue-primary">
          REALIZA TU PEDIDO
        </p>
        <p className="text-gray-main pt-3">
          Realiza o programa tu pedido, solo compártenos los siguientes datos:
        </p>
      </div>

      <div className=" ">
        <p className="font-bold text-blue-primary py-8">
          Indícanos si requieres el servico para el día de hoy u otro día
        </p>{" "}
        <div className="flex gap-11">
          <OrderCard description="Servicio para hoy" icon={faHomeUser} />
          <OrderCard description="Programar mi servicio" icon={faClock} />
        </div>
        <div className="flex space-x-2 pt-3.5 ">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-gray-secondary "
          />
          <p className="text-gray-secondary">
            {" "}
            De lunes a viernes después de las 6:30 pm se tomará como servicio
            programado
          </p>
        </div>
      </div>
      <div className="pt-7 mx-auto">
        <p className="font-bold text-blue-primary py-8">Tipo de servicio</p>
        <div className="flex mx-auto gap-11">
          <OrderCard description="Cilindro de 20 kg" image="/cilinder.png" />
          <OrderCard description="Cilindro de 30 kg" image="/cilinder.png" />
          <OrderCard description="Estacionario" image="/estacionario.png" />
        </div>
      </div>
      <p className="text-blue-primary font-bold py-10">Información personal</p>
      <OrderForm />
    </div>
  );
};

export default MakeAnOrderSection;
