import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer className="py-2 mt-auto">
  <div className="container-fluid">
    <div className="row justify-content-center">
      {/* Enlaces centrados */}
      <div className="col-12 text-center">
        <ul className="navbar-nav mx-auto mb-2 list-unstyled d-flex justify-content-center gap-2">
          <li className="nav-item">
            <Link to={'personajes'} className="nav-link p-1 fw-bold" href="#">Personajes</Link>
          </li>
          <li className="nav-item">
            <Link to={'transformaciones'} className="nav-link p-1 fw-bold" href="#">Transformaciones</Link>
          </li>
        </ul>
      </div>
    </div>
    
    {/* Línea divisoria y copyright más compacto */}
    <hr className="my-2" />
    <div className="text-center">
      <p className="mb-0 text-muted small">&copy; 2026 Tu Empresa. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer