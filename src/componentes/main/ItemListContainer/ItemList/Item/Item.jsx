import React from 'react'
import Preguntas from './Preguntas';
import '../Item/Item.css'

const Item = ({ it }) => {
  return (
    <div className='div'>
            <h1>Cliente: {it.cliente}</h1>

            <video controls loop>
                  <source src={it.linkVideo} type='video/mp4' />
            </video>
          
          
            <h3>Tareas</h3> 
            <h5>Escenario: {it.escenario}</h5> 
            <hr/>
            <div className='div-preguntas'>
                <Preguntas key={it.id} it={it} />
            </div>
            
    
            <h5 className='titulo'>Transcripcion</h5>
        <div className='transcripcion'>   
                {it.transcripcion}
        </div>
    </div>
  )
}

export default Item;

