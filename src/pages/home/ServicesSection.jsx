import Button from "@/src/components/ui/Button";
import ServiceCard from "@/src/pages/aboutUs/ServiceCard";
import React from "react";

export default function ServicesSection() {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center mb-14">
        <p className="font-bold text-blue-secondary text-3xl mb-3">
          NUESTROS SERVICIOS
        </p>
        <p className="text-gray-main ">
          Tenemos varios servicios a tu disposición, además aceptamos tarjetas
          de crédito o débito, ya sea Visa o MasterCard
        </p>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-8 text-center ">
        <ServiceCard
          className="w-5/6"
          img="/cilinder.png"
          title="Cilindro"
          content="Ofrecemos la venta de cilindros de 20 y 30 kg para consumo doméstico
            o comercial"
        />

        <ServiceCard
          className="w-5/6 "
          img="/estacionario.png"
          title="Estacionario"
          content="Surtimos hasta tu hogar litros completos para tu tanque estacionario. "
        />

        <ServiceCard
          className="w-5/6 "
          img="/carburacion.png"
          title="Carburación"
          content="Con nuestro servicio de carburación, puedes recargar en cualquier punto de venta."
        />

        <ServiceCard
          className="w-5/6 "
          img="/car.png"
          title="Vehicular"
          content="Cambia tu vehículo a gas L.P."
        />
      </div>
      <Button
        variant="action"
        className="px-4 py-3 flex mx-auto mt-20 font-bold"
      >
        Realizar pedido
      </Button>
    </div>
  );
}
