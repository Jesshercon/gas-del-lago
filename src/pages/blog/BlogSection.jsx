import Button from "@/src/components/ui/Button";
import { ArticleComponent } from "./ArticleComponent";
import Pagination from "@/src/components/ui/Pagination";
const articlesMockData = [
  {
    title: "¿Quiénes somos?",
    image: "/quienessomos.jpg",
    slug: "quienes-somos",
  },
  {
    title: "¿Cuándo cambiar mi tanque de gas?",
    image: "/cuandocambiar.jpg",
    slug: "cuando-cambiar-tanque",
  },
  {
    title: "¡Aléjalo de las altas temperaturas o lluvias!",
    image: "/alejalo.jpg",
    slug: "alejalo-altas-temperaturas",
  },
  {
    title: "¿Sabes cómo detectar una fuga de gas?",
    image: "/fugagas.jpg",
    slug: "detectar-fuga-gas",
  },
  {
    title: "¡Descubre cómo ahorrar gas!",
    image: "/ahorrargas.jpg",
    slug: "ahorrar-gas",
  },
  {
    title: "¿Sabías que el gas L.P. tiene múltiples usos?",
    image: "/multiplesusos.jpg",
    slug: "multiples-usos-gas",
  },
];
export default function BlogSection() {
  return (
    <div className="text-center pt-16">
      {" "}
      <h1 className="text-blue-primary font-bold text-5xl">BLOG</h1>
      <p className="text-gray-main pt-2">
        Descubre nuestro blog y mantente al día con las últimas noticias,
        consejos y promociones relacionadas con el mundo del gas.
        <br /> ¡Visítanos ahora! #BlogGasera
      </p>
      <div className="pt-12 flex justify-center gap-6">
        <p className="text-blue-primary font-bold">Explorar categoría</p>
        <Button variant="inactive" className="rounded-xl py-1 px-4">
          Economía
        </Button>
        <Button variant="inactive" className="rounded-xl py-1 px-4">
          Fugas
        </Button>
        <Button variant="inactive" className="rounded-xl py-1 px-4">
          Gas
        </Button>
      </div>
      <div className="w-10/12 space-x-10 mx-auto pt-16">
        <div className="grid grid-cols-3 gap-14">
          {articlesMockData.map((article) => (
            <ArticleComponent
              articleTitle={article.title}
              image={article.image}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
}
