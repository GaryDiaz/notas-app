import React, { useState } from "react";

export default function Nota({ nota, borrarNota, actualizarNota }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [item, setItem] = useState(nota);
  const toggle = () => {
    setModoEdicion(!modoEdicion);
    setItem(nota);
  };
  const editar = () => {
    actualizarNota(item);
    setModoEdicion(false);
  };

  return (
    <div className="col s12 m6 l4 xl3">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Id: {nota.id}</span>
          <div>
            {modoEdicion ? (
              <div className="field">
                <label htmlFor="titulo" className="label">
                  Título
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={item.titulo}
                    onChange={(ev) =>
                      setItem({ ...item, titulo: ev.target.value })
                    }
                  />
                </div>
              </div>
            ) : (
              <div> Título: {nota.titulo}</div>
            )}
            {modoEdicion ? (
              <div className="field">
                <label htmlFor="descripcion" className="label">
                  Descripción
                </label>
                <div className="control">
                  <input
                    className="textarea"
                    type="text"
                    value={item.descripcion}
                    onChange={(ev) =>
                      setItem({ ...item, descripcion: ev.target.value })
                    }
                  />
                </div>
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
