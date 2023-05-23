import Card from "@/src/components/ui/Card";

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
      <div className="relative items-center mx-auto my-16">
        <p className="text-blue-secondary font-bold text-5xl text-center">
          ¿POR QUÉ GAS DEL LAGO?
        </p>
        <div className="grid grid-cols-2 my-6 gap-16 mx-24">
          <Card
            className="w-4/12"
            headText="Servicio en"
            bodyText="centros de carburación"
          />
          <Card className=" " headText="Atención a" bodyText="municipios" />
        </div>
        {/* <div className="flex place-content-end w-11/12 ml-10"> */}

        {/* <img
            src="/truck-estacionario.jpg"
            className="rounded"
            width={800}
            height={800}
          /> */}
      </div>
      <div className="grid grid-cols-2 p-6 mt-16 shadow-md">
        <Card
          image="/calidadprestigio.jpg"
          bodyText="Ganadores del premio Águila C y P por 15 años consecutivos como la empresa más confiable en el ramo de Gas L.P. para uso doméstico."
        />
        <Card
          image="/iso2015.png"
          bodyText="Certificados en la norma ISO 9001:2015, Gestión y Aseguramiento de la Calidad."
        />
      </div>
    </div>
  );
}
