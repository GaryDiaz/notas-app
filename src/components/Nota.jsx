import React, { useState } from "react";
import M from "materialize-css";

export default function Nota({
  nota,
  borrarNota,
  actualizarNota,
  error,
  setError,
}) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [item, setItem] = useState(nota);
  const toggle = () => {
    setModoEdicion(!modoEdicion);
    setItem(nota);
    setError({ titulo: "", descripcion: "" });
  };
  const editar = async () => {
    if (await actualizarNota(item)) {
      setModoEdicion(false);
      setError({ titulo: "", descripcion: "" });
    }
  };

  return (
    <div className="col s12 m6 l4 xl3">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Id: {nota.id}</span>
          <div>
            {modoEdicion ? (
              <div className="input-field">
                <i className="material-icons prefix">title</i>
                <input
                  id="titulo"
                  className="input"
                  type="text"
                  value={item.titulo}
                  onChange={(ev) =>
                    setItem({ ...item, titulo: ev.target.value })
                  }
                />
                <span className="helper-text red-text">{error.titulo}</span>
              </div>
            ) : (
              <div> Título: {nota.titulo}</div>
            )}
            {modoEdicion ? (
              <div className="input-field">
                <i className="material-icons prefix">description</i>
                <input
                  id="descripcion"
                  className="textarea"
                  type="text"
                  value={item.descripcion}
                  onChange={(ev) =>
                    setItem({ ...item, descripcion: ev.target.value })
                  }
                />
                <span className="helper-text red-text">
                  {error.descripcion}
                </span>
              </div>
            ) : (
              <div> Descripción: {nota.descripcion}</div>
            )}
          </div>
        </div>
        <div className="card-action">
          <button className="waves-effect waves-light btn" onClick={toggle}>
            {modoEdicion ? "Cancelar" : "Editar"}
          </button>
          {!modoEdicion ? (
            <button
              className="waves-effect waves-light btn red lighten-1"
              onClick={() => borrarNota(nota.id)}
            >
              x
            </button>
          ) : (
            <button
              className="waves-effect waves-light btn"
              onClick={() => editar()}
            >
              Guardar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
