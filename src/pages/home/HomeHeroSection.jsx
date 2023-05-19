export default function HomeHeroSection() {
  return (
    <div className=" relative">
      <div
        style={{ backgroundImage: "url(/webcover_home.jpg)" }}
        className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover bg-center blur-sm"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black-secondary/30" />
      <div className="relative flex items-center w-9/12 mx-auto gap-10">
        <div className="w-1/2">
          <img src="/team.png" alt="Picture of the team" />
        </div>
        <div className="bg-blue-primary/60 w-8/12 rounded space-y-6 ">
          <h1 className="text-yellow-warning font-bold text-5xl monserrat pt-8 px-4">
            ¿QUÉ ES GAS DEL LAGO?
          </h1>
          <p className="text-white-main hind-madurai justify-center pb-8 px-6 tracking-wide text-justify">
            Somos una empresa gasera con prácticas honestas y profesionales, que
            gracias a tu confianza, podemos seguir llegando a diferentes
            municipios para llevar el gas de tú confianza.
            <br />
            <br />
            Gas del Lago te ofrece precio exacto. al ser una empresa
            certificada, aseguramos la calidad y cantidad en cada carga.
          </p>
        </div>
      </div>
    </div>
  );
}
