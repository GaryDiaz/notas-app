import { useState, React } from 'react'

export default function Form({ notas, setNotas }) {
    const notaInicial = {
        id: '',
        titulo: '',
        descripcion: ''
    }

    const [nota, setNota] = useState(notaInicial);

    const agregarNota = (ev) => {
        ev.preventDefault();
        if (nota.titulo.trim() === '' || nota.descripcion.trim() === '') {
            return;
        }
        setNotas([
            ...notas,
            {
                ...nota,
                id: notas.length + 1
            }
        ]);

        setNota(notaInicial);
    }

    return (
        <div className='has-background-success-light p-3'>
            <form onSubmit={(ev) => agregarNota(ev)}>
                <div className="field">
                    <label htmlFor="titulo" className="label">Título</label>
                    <div className="control">
                        <input className='input' id='titulo' type='text' value={nota.titulo} onChange={(ev) => setNota({ ...nota, titulo: ev.target.value })} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="descripcion" className="label">Descripción</label>
                    <div className="control">
                    <input className='textarea' id='descripcion' type='text' value={nota.descripcion} onChange={(ev) => setNota({ ...nota, descripcion: ev.target.value })} />
                    </div>
                </div>
                <button className='button is-primary'>Agregar nota</button>
            </form>
        </div>
    )
}
