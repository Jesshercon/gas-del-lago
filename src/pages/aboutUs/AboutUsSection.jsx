import CoreValue from "@/src/pages/aboutUs/CoreValue";
import LocationCard from "@/src/pages/aboutUs/LocationCard";
import ServiceCard from "@/src/pages/aboutUs/ServiceCard";
import { faEye, faGem } from "@fortawesome/free-regular-svg-icons";
import { faFireFlameCurved, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CORE_VALUES = [
  "Honestidad",
  "Confianza",
  "Lealtad",
  "Calidad",
  "Actitud de servicio",
  "Responsabilidad",
];

export default function AboutUsSection() {
  return (
    <div className="">
      <p className="text-blue-secondary font-bold text-5xl text-center mb-16">
        SOBRE NOSOTROS
      </p>

      <div className="grid grid-cols-2 gap-3 items-center justify-center mx-16">
        <img className="rounded w-5/6 mx-auto" src="/repartidor-back.jpg" />
        <p className="text-black-secondary text-justify  monserrat text-lg">
          Gas del Lago inicia accidentalmente en 1950 cuando su fundador vende
          la primera estufa de gas en su ferretería y mueblería en Ario de
          Rosales, Michoacán. <br /> <br />
          Las ventas de las estufas de gas se incrementaron mucho con el paso
          del tiempo y fue entonces cuando surge la necesidad de garantizar
          mediante una pequeña planta de almacenamiento, la demanda de Gas L.P.
          en aquella zona de Michoacán. <br /> <br />
          Desde entonces, hemos sido el gas de confianza de muchas personas que
          nos han permitido llegar a su hogar.
        </p>
      </div>
      <div className="relative items-center mx-auto  pt-16">
        <p className="text-blue-secondary font-bold text-5xl text-center pb-14">
          ¿POR QUÉ GAS DEL LAGO?
        </p>
        <div className="grid grid-cols-[repeat(15,_minmax(0,_1fr))] grid-rows-[70px_auto_70px] my-32 p-8 w-10/12 mx-auto">
          <div className="row-start-2 row-end-3 col-start-1 col-end-9 relative z-10">
            <div className="flex space-x-20">
              <LocationCard
                className="shadow-md p-10 space-y-5 w-full text-center bg-white-main"
                headerText="Servicio en"
                centerText="X"
                footerText="centros de carburación"
              />
              <LocationCard
                className="shadow-md p-10 space-y-5  w-full text-center bg-white-main"
                headerText="Atención a"
                centerText="X"
                footerText="municipios"
              />
            </div>
          </div>

          <div
            className="col-start-8 col-end-[16] row-span-full bg-cover bg-center blur-sm"
            style={{
              backgroundImage: "url(/truck-estacionario.jpg)",
            }}
          >
            <div className="bg-blue-secondary/70 absolute top-0 left-0 w-full h-full" />
          </div>

          <div className="row-start-2 row-end-3 col-start-10 col-end-[15] relative z-10">
            <p className="text-white-main font-bold text-3xl mb-16 text-center">
              Política de calidad
            </p>
            <p className="text-white-main text-justify">
              Estamos comprometidos a llevar a cabo de forma segura, oportuna y
              competente la venta y distribución de Gas L.P., buscando la
              satisfacción del cliente y la mejora continua, cumpliendo con las
              normas legales y nuestro Sistema de Gestión de Calidad ISO.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 py-20  w-10/12 mx-auto gap-24 text-center">
          <ServiceCard
            className="flex flex-col w-full mx-auto shadow-lg py-6 px-10 space-y-2"
            img="/calidadprestigio.jpg"
            content="Ganadores del premio Águila C y P por 15 años consecutivos como la empresa más confiable en el ramo de Gas L.P. para uso doméstico."
          />
          <ServiceCard
            className="w-full mx-auto shadow-lg "
            img="/iso2015.png"
            title="ISO 9001:2015"
            content="Certificados en la norma ISO 9001:2015, Gestión y Aseguramiento de la Calidad."
          />
        </div>
      </div>

      <div className="flex  gap-16 justify-evenly">
        <CoreValue className="w-3/12" icon={faEye} title="VISIÓN">
          En Gas del Lago somos un equipo de trabajo dedicado a satisfacer las
          necesidades de Gas L.P. de nuestros clientes, ofreciendo un servicio
          de calidad.
        </CoreValue>
        <CoreValue className="w-3/12" icon={faRocket} title="MISIÓN">
          Mantener el liderazgo y crecimiento en la distribución de Gas L.P.,
          siendo una empresa sólida, comprometida con nuestro personal, la
          sociedad y el medio ambiente.
        </CoreValue>
      </div>
      <div className="pt-20 w-7/12 mx-auto">
        <CoreValue icon={faGem} title="VALORES">
          <div className="flex gap-x-28 gap-y-14 flex-wrap justify-center">
            {CORE_VALUES.map((coreValue) => (
              <div className="flex gap-4">
                <FontAwesomeIcon
                  className="text-yellow-warning "
                  icon={faFireFlameCurved}
                  style={{ width: "20px" }}
                />
                <div className="font-bold text-blue-primary text-xl">
                  {coreValue}
                </div>
              </div>
            ))}
          </div>
        </CoreValue>
      </div>
    </div>
  );
}
