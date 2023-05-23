import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className=" bg-blue-primary grid grid-cols-5 mt-6 py-14 text-white-main ">
      <div className="flex items-center justify-center">
        <img
          className="p-2 pl-4 "
          width={160}
          height={160}
          alt="Logo of Gas del Lago"
          src="/button-gl.png"
        />
      </div>
      <div className="space-y-2">
        <p className="font-bold mb-8">Acerca de</p>
        <p className="text-sm">¿Qué es Gas del Lago?</p>
        <p className="text-sm">Realizar un pedido</p>
        <p className="text-sm">Estación de carburación</p>
        <p className="text-sm">Consejos y tips</p>
        <p className="text-sm">Aviso de privacidad</p>
      </div>
      <div className="space-y-2 ">
        <p className="font-bold mb-8">Contacto</p>
        <p className="text-sm">Trabaja en Gas del Lago</p>
        <p className="text-sm">Descarga nuestra app</p>
        <p className="text-sm">Oficinas</p>
        <p className="text-sm">Facturación</p>
      </div>
      <div className="space-y-2 ">
        <p className="font-bold mb-8">Atención al cliente</p>
        <p className="text-sm ">
          Juan de Alvarado 7-1 <br /> Colonia Nueva Valladolid, <br /> C.P.
          58190, Morelia, Michoacán
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-bold mb-8">Redes sociales</p>
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faInstagram} style={{ width: "18px" }} />
          <FontAwesomeIcon icon={faFacebook} style={{ width: "18px" }} />
          <FontAwesomeIcon icon={faWhatsapp} style={{ width: "18px" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ width: "18px" }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ width: "18px" }} />
          <FontAwesomeIcon icon={faYoutube} style={{ width: "18px" }} />
        </div>
      </div>
    </div>
  );
}
