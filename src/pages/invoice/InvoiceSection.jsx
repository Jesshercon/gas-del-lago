import InvoiceCard from "@/src/components/ui/InvoiceCard";

export default function InvoiceSection() {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-yellow-warning text-4xl pb-12 ">
          FACTURACIÓN
        </h1>
        <p className="text-blue-primary">
          Para facturar cualquiera de nuestros servicios puedes enviarnos un
          correo <b>gl@glmm.com</b> <br />
          Te solicitaremos la siguiente información:
        </p>
      </div>
      <div className="relative w-3/12 mx-auto ">
        {" "}
        <InvoiceCard
          title=" Verifica que tu correo incluya los siguientes datos"
          bullet="flame-icon-bg.png"
        />
        <img
          src="/tanquesito.png"
          className="absolute bg-contain bg-no-repeat -z-10 -bottom-10 mr-2 translate-x-1/3 right-full w-72"
        />
      </div>
    </div>
  );
}
