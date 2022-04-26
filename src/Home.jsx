import { useState, React } from "react";
import Form from "./components/Form";
import Notas from "./components/Notas";

export default function Dashboard() {
  const [notas, setNotas] = useState([
    { id: 1, titulo: "nota1", descripcion: "Algo..." },
    { id: 2, titulo: "nota2", descripcion: "Algo..." },
    { id: 3, titulo: "nota3", descripcion: "Algo..." },
    { id: 4, titulo: "nota4", descripcion: "Algo..." },
    { id: 5, titulo: "nota5", descripcion: "Algo..." },
  ]);

  return (
    <div className="container">
      <h1 className="title has-text-centered mt-5">Lista de Notas</h1>
      <Notas notas={notas} setNotas={setNotas} />
      <Form notas={notas} setNotas={setNotas} />
    </div>
  );
}
