import Button from "@/src/components/ui/Button";
import JoinUsFormSection from "./JoinUsFormSection";

export default function JoinUsSection() {
  return (
    <div>
      <div className="relative w-full py-20">
        <div className="bg-blue-primary rounded opacity-80 text-center w-[585px] mx-auto py-5 px-10 ">
          <h1 className="text-yellow-warning font-bold text-4xl mb-5">
            ¡ÚNETE A GAS DEL LAGO!
          </h1>
          <p className="text-white-main">
            Envía tus datos y si tenemos una oportunidad que se ajuste a tu
            perfil, nuestro equipo de RH se pondrá en contacto contigo.
          </p>
        </div>
        <div
          style={{ backgroundImage: "url(/personal.jpg)" }}
          className="absolute -z-10 left-0 top-0 w-full h-full bg-no-repeat bg-cover bg-center blur-sm"
        />
      </div>
      <JoinUsFormSection />
    </div>
  );
}
