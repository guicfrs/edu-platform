import { useParams } from "react-router-dom";

export default function Reader() {
  const { id } = useParams(); // pega o parâmetro :id da URL

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h2 className="text-3xl font-semibold">Leitor do módulo {id}</h2>
    </div>
  );
}
