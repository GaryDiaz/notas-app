import { useState, React, useEffect } from "react";
import Form from "./components/Form";
import Notas from "./components/Notas";
import axios from "axios";

export default function Dashboard() {
  useEffect(() => {
    axios
      .get("http://localhost/notas-api/api/notas")
      .then((payload) => {
        setNotas(payload.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [notas, setNotas] = useState([]);

  return (
    <div className="container">
      <h1 className="center-align">Lista de Notas</h1>
      <Notas notas={notas} setNotas={setNotas} />
      <Form notas={notas} setNotas={setNotas} />
    </div>
  );
}
