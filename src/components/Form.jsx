import { useState, React } from "react";

export default function Form({ notas, setNotas }) {
  const notaInicial = {
    id: "",
    titulo: "",
    descripcion: "",
  };

  const [nota, setNota] = useState(notaInicial);

  const agregarNota = (ev) => {
    ev.preventDefault();
    if (nota.titulo.trim() === "" || nota.descripcion.trim() === "") {
      return;
    }
    setNotas([
      ...notas,
      {
        ...nota,
        id: notas.length + 1,
      },
    ]);

    setNota(notaInicial);
  };

  return (
    <form className="card blue lighten-5" onSubmit={(ev) => agregarNota(ev)}>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="titulo"
            type="text"
            value={nota.titulo}
            onChange={(ev) => setNota({ ...nota, titulo: ev.target.value })}
          />
          <label htmlFor="titulo">Título</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            className="materialize-textarea"
            id="descripcion"
            cols="100"
            rows="3"
            value={nota.descripcion}
            onChange={(ev) =>
              setNota({ ...nota, descripcion: ev.target.value })
            }
          ></textarea>
          <label htmlFor="descripcion">Descripción</label>
        </div>
      </div>
      <div className="card-action">
        <button className="waves-effect waves-light btn">Agregar nota</button>
      </div>
    </form>
  );
}
