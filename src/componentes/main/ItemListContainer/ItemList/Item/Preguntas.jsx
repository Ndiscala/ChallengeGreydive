import React from 'react'

const Preguntas = ({ it }) => {
  return (
    <div>
        { it.preguntas.map( data => {
              return (
              
                <div className="card cards"  >
                  <div className="card-body">

                    <h5 className="card-title" style={{color:'white'}}>Tarea : {data.texto}</h5>
                  </div>  
                  <div className="card-footer text-muted">
                    <h5 style={{color:'red' }}>Tiempo: {data.tiempo}</h5>
                  </div>
                </div>
              
              )
            })
        }
        
    </div>
  )
}

export default Preguntas;

// style={{width: '40rem', margin: '1rem' }}