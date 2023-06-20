import { ArticleComponent } from "../blog/ArticleComponent";

const BlogPost = () => {
  return (
    <div className="">
      <div className="relative w-full py-20 bg-blue-primary opacity-80 text-center text-4xl font-bold ">
        <h1 className="text-white-main py-16">
          ¿POR QUÉ AUMENTA EL PRECIO DEL GAS?
        </h1>
        <div
          style={{ backgroundImage: "url(/gasto.jpg)" }}
          className="absolute w-full h-full bg-cover bg-center -z-10 blur-sm left-0 top-0 "
        />
      </div>
      <div className="flex text-gray-main gap-6 m-11 font-bold">
        <p>28/03/12</p>
        <p>15558 vistas</p>
      </div>

      <div className="flex flex-col space-y-11 m-11 justify-center">
        <p className="font-bold text-blue-primary text-2xl">
          ¿Notas que el precio del gas se eleva un poco a fin de año?
        </p>
        <p className="font-bold text-gray-main">
          Hay varias razones y en Gas del Lago te las compartimos.
        </p>
        <p>
          La principal razón es porque hay mayor demanda del combustible tanto
          en negocios como en hogares, puesto que muchas familias reciben
          visitas, lo que aumenta la preparación de alimentos y ya que comienza
          el frio, todos gozan de un baño calientito.
          <br /> Es importante señalar que desde que comenzó la pandemia en
          marzo del 2020, el consumo de combustible aumento debido a que muchas
          familias pasan todo el día en el hogar y muchos padres de familia han
          tenido que cocinar más para sus hijos dando como resultado mayor
          demanda en algunos meses. <br /> Otra de las razones es debido al
          aumento de la cotización internacional de  puesto que nuestro país
          importa la mayor cantidad de combustible refinado del extranjero.{" "}
          <br />
          También debemos considerar el constante cambio de precio del dólar.{" "}
          <br /> <br />
          Ahora ya sabes las principales razones del aumento de gas a fin de
          año.
        </p>
        <p className="pt-8">¡Comparte esta nota con tu familia y amigos!</p>
      </div>
      <div className="m-11">
        {" "}
        <p className="text-blue-primary font-bold">Otros posts</p>
        <div className="grid grid-cols-3 gap-8 py-11">
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
