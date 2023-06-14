import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import Select from "@/src/components/ui/Select";
import DaySelect from "./DaySelect";

const OrderForm = () => {
  return (
    <form>
      <div className="flex gap-10 mx-auto mb-5">
        {" "}
        <Input label="Nombre" placeholder="Nombre" id="name" />
        <Input label="Teléfono" placeholder="Teléfono" id="phone" />
        <Input label="Ciudad" placeholder="Ciudad" id="city" />
      </div>

      <div className="flex flex-col">
        <Input
          label="Dirección"
          placeholder="Dirección"
          id="address"
          className="mb-5"
        />
        <label className="font-bold text-blue-primary">
          Referencias para llegar hasta tu hogar
        </label>
        <textarea
          className="border border-gray-main rounded p-2"
          placeholder="Ejemplo: 2 cilindros de 30kg, casa con porton azul entre las calles.."
        />
      </div>
      <Button variant="confirm" className="mt-11 p-3.5">
        Confirmar
      </Button>

      <div>
        <p className="font-bold text-blue-primary">
          Horario en el que nos puedes recibir
        </p>
        <DaySelect dayTitle="Selecciona un día"></DaySelect>
      </div>
    </form>
  );
};

export default OrderForm;
