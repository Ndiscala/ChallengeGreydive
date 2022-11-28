import React from 'react'
import '../footer/Footer.css'

const Footer = () => {
  return (
    <footer className=" text-center text-white">
            
        <div className="container p-4 pb-0">


             {/* <!-- SU EMPRESA --> */}

                <a
                className="btn btn-primary btn-floating m-3 enlace"
                // style={{backgroundColor: '#263574'}}
                href="https://www.greydive.com/"
                role="button"
                ><i className="bi bi-globe2 fs-3 foot"></i>
                </a>


             {/* <!-- PORTFOLIO --> */}

                <a
                className="btn btn-primary btn-floating m-3 enlace"
                // style={{backgroundColor: '#263574'}}
                href="https://ndiscala.github.io/"
                role="button"
                ><i className="bi bi-person-workspace fs-3 foot"></i>
                </a>


            {/* <!-- Linkedin --> */}
                <a
                className="btn btn-primary btn-floating m-3 enlace"
                // style={{backgroundColor: '#263574'}}
                href="https://www.linkedin.com/in/ndiscala/"
                role="button"
                ><i className="bi bi-linkedin fs-3 foot"></i>
                </a>
            {/* <!-- Github --> */}
                <a
                className="btn btn-primary btn-floating m-3 enlace"
                // style={{backgroundColor: '#263574'}}               
                href="https://github.com/Ndiscala"
                role="button"

                ><i className="bi bi-github fs-3 foot"></i>
                </a>
            
    
        </div>
        <div>
              <p className='parrafo'>
                  Desarrollado y diseñado por Nicolas Di Scala. © Año 2022. Todos los derechos reservados. 
              </p>
        </div>
    </footer>
  )
}

export default Footer;