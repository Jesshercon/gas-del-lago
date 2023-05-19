import Button from "../ui/Button";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-blue-primary text-white-main  ">
      <div>
        <img
          className="p-2 pl-4"
          src="/button-gl.png"
          width={80}
          height={80}
          alt="Picture of the author"
        />
      </div>
      <div className="flex  gap-6 pr-8 bg-blue-secondary">
        <Button>Nosotros</Button>
        <Button>Descarga la app</Button>
        <Button>Bolsa de trabajo</Button>
        <Button>Facturación</Button>
        <Button>Blog</Button>
        <Button variant="action" className="p-3">
          Realiza tu pedido
        </Button>
      </div>
    </div>
  );
}
