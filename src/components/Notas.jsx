import React from 'react'
import Nota from './Nota'

export default function Notas({ notas, setNotas }) {

    const borrarNota = (id) => {
        const auxNotas = notas.filter(nota => id !== nota.id);
        setNotas(auxNotas);
    }

    const actualizarNota = (auxNota) => {
        setNotas(
            notas.map(nota => nota.id === auxNota.id ? auxNota : nota)
        );
    }

    return (
        <div className="columns is-multiline">
            {
                notas.map(nota => {
                    return <Nota key={nota.id} actualizarNota={actualizarNota} nota={nota} borrarNota={borrarNota} />
                })
            }
        </div>
    )
}
