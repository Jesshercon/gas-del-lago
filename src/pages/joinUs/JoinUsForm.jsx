import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import Select from "@/src/components/ui/Select";

const JoinUsForm = () => {
  return (
    <div className="pr-16">
      <div className="flex space-x-16 ">
        <Input label="Nombre" id="name" placeholder="Nombre" />
        <Input label="Teléfono" id="phone" placeholder="Teléfono" />
        <Input label="Ciudad" id="city" placeholder="Ciudad" />
      </div>
      <div className="">
        <div className="my-9">
          <Select label="Selecciona el puesto de tú interés" />
        </div>

        <textarea
          className="w-full border border-gray-main p-2 rounded"
          style={{ resize: "none" }}
          label="Cuéntanos de tu experiencia"
          id="tell-us"
          placeholder="Cuéntanos
        de tu experiencia"
        ></textarea>
      </div>
      <div className="flex justify-end ">
        {" "}
        <Button variant="primary" className="px-4 py-2.5 mt-6 ">
          Enviar mis datos
        </Button>
      </div>
    </div>
  );
};

export default JoinUsForm;
