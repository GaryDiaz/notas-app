import React, { useState } from 'react'

export default function Nota({ nota, borrarNota, actualizarNota }) {

  const [modoEdicion, setModoEdicion] = useState(false);
  const [item, setItem] = useState(nota);
  const toggle = () => {
    setModoEdicion(!modoEdicion);
    setItem(nota)
  }
  const editar = () => {
    actualizarNota(item);
    setModoEdicion(false);
  }

  return (
    <div className='column is-one-quarter'>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Id: {nota.id}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {
              modoEdicion ?
                <div className="field">
                  <label htmlFor="titulo" className="label">Título</label>
                  <div className="control">
                    <input className='input' type="text" value={item.titulo} onChange={(ev) => setItem({ ...item, titulo: ev.target.value })} />
                  </div>
                </div>
                : <div> Título: {nota.titulo}</div>
            }
            {
              modoEdicion ?
                <div className="field">
                  <label htmlFor="descripcion" className="label">Descripción</label>
                  <div className="control">
                    <input className='textarea' type="text" value={item.descripcion} onChange={(ev) => setItem({ ...item, descripcion: ev.target.value })} />
                  </div>
                </div>
                : <div> Descripción: {nota.descripcion}</div>
            }
          </div>

        </div>
        <footer className="card-footer">
          <button className='card-footer-item' onClick={toggle}>{modoEdicion ? 'Cancelar' : 'Editar'}</button>
          {
            !modoEdicion ?
              <button className='card-footer-item' onClick={() => borrarNota(nota.id)}>x</button>
              : <button className='card-footer-item' onClick={() => editar()}>Guardar</button>
          }
        </footer>
        
      </div>


    </div>
  )
}
