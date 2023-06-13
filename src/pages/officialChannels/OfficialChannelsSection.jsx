"use client";
import { faDownload, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ChannelCard from "./ChannelCard";
import Button from "@/src/components/ui/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import CitySelect from "./CitySelect";

export const OfficialChannels = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-blue-primary text-center py-16 px-32">
        CONSULTA NUESTROS MEDIOS OFICIALES PARA REALIZAR TUS PEDIDOS
      </h1>

      <div className="flex justify-center space-x-24 w-8/12 mx-auto px-10">
        <ChannelCard
          title="Pedidos en línea"
          icon={faShoppingCart}
          action={<Button variant="action">Comprar</Button>}
        />
        <ChannelCard
          title="Whatsapp"
          icon={faWhatsapp}
          action={<Button variant="action">Solicitar pedido</Button>}
        />
        <ChannelCard
          title="Descarga nuestra App"
          icon={faDownload}
          action={<Button variant="action">Descargar App</Button>}
        />
      </div>

      <div className="text-center pt-24">
        <p className="font-bold text-blue-secondary text-2xl">
          Consulta nuestras líneas telefónicas
        </p>
        <p className="text-blue-primary text-sm">
          Selecciona la ciudad más cercana a tu domicilio:
        </p>
      </div>
      <div className="grid grid-cols-2 pt-16 mx-auto">
        <img src="/woman-squares.png" />
        <div className=" space-y-16  mx-auto">
          <CitySelect className=" " cityTitle="Selecciona una ciudad" />
          <div className="flex gap-2 ">
            <p className=" text-blue-primary">
              ¿Deseas realizar un pedido online?
            </p>
            <p className="font-bold text-green-secondary">¡Da click aquí!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
