import AppBenefits from "@/src/components/ui/AppBenefits";

import {
  faBell,
  faEye,
  faFile,
  faGem,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBan,
  faCheck,
  faFireFlameCurved,
  faLocationDot,
  faMagnifyingGlass,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppDownloadSection() {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-yellow-warning text-5xl font-bold">
          ¡DESCARGA NUESTRA APP!
        </p>
        <p className="text-blue-secondary pt-7">
          Con nuestra app podás realizar tus pedidos de manera fácil y rápida.
        </p>
      </div>
      <div className="flex pt-14 items-center space-x-9">
        <div className="space-y-16">
          <AppBenefits
            icon={faLocationDot}
            title="REGISTRA"
            footText="las ubicaciones para recibir tus pedidos"
          />
          <AppBenefits
            icon={faCheck}
            title="CONSULTA"
            footText="el estado de tus pedidos"
          />
          <AppBenefits
            icon={faMagnifyingGlass}
            title="RASTREA"
            footText="de forma fácil con tu número de folio"
          />
        </div>

        {/* ajustar orden de elementos para mobile */}
        <div>
          <img src="/cellphone-yellow.png" />
        </div>
        <div className="space-y-16">
          <AppBenefits
            icon={faFile}
            title="MANTÉN"
            footText="un registro de cada pedido que realices"
          />
          <AppBenefits
            icon={faBell}
            title="RECIBE"
            footText="notificaciones sobre el estado de tus pedidos"
          />
          <AppBenefits
            icon={faBan}
            title="CANCELA"
            footText="el envío de tu pedido"
          />
        </div>
      </div>
      <div className="flex py-11 space-x-14 justify-center mx-auto">
        <img src="/appstore-download.jpg" className="w-52" />
        <img src="/playstore-download.jpg" className="w-52" />
      </div>
      <div className="flex space-x-2 mx-auto justify-center">
        <p className=" text-blue-primary">
          ¿Quieres realizar tu pedido de otra manera?
        </p>
        <p className="font-bold text-blue-primary">
          Consulta nuestros medios oficiales
        </p>
      </div>
    </div>
  );
}
