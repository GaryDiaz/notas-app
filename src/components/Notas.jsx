import axios from "axios";
import React, { useState } from "react";
import Nota from "./Nota";

export default function Notas({ notas, setNotas }) {
  const [error, setError] = useState({ titulo: "", descripcion: "" });

  const borrarNota = (id) => {
    axios
      .delete(`http://localhost/notas-api/api/notas/${id}`)
      .then((payload) => {
        alert(payload.data.message);
        setNotas(notas.filter((nota) => id !== nota.id));
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const actualizarNota = (auxNota) => {
    let respuesta = axios
      .put(`http://localhost/notas-api/api/notas/${auxNota.id}`, auxNota)
      .then((payload) => {
        let { id } = payload.data.data;
        setNotas(
          notas.map((nota) =>
            nota.id === auxNota.id ? payload.data.data : nota
          )
        );
        return true;
      })
      .catch((errors) => {
        setError(errors.response.data.messages);
        return false;
      });
    return respuesta;
  };

  return notas.length > 0 ? (
    <div className="row">
      {notas.map((nota) => {
        return (
          <Nota
            key={nota.id}
            actualizarNota={actualizarNota}
            nota={nota}
            borrarNota={borrarNota}
            error={error}
            setError={setError}
          />
        );
      })}
    </div>
  ) : (
    <p className="center-align title">No existen notas</p>
  );
}
