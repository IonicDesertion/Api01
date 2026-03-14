import { useEffect, useState } from "react";

const API = "https://dragonball-api.com/api/characters?page=1&limit=100";

const Personajes = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setDatos(data.items);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-warning">
        <div className="spinner-grow" role="status"></div>
        <h5 className="mt-3">Cargando guerreros Z...</h5>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-danger">
        <h4>Error: {error}</h4>
      </div>
    );
  }

  return (
    <div className="bg-dark min-vh-100 text-light py-5">
      <div className="container text-center">
        {/*zona de renderizado*/}
        <h2 className="text-center py-5 fw-bold">
          {datos.length} Personajes de la serie de Dragon Ball
        </h2>

        <div className="row g-4">
          {datos.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 db-card border-0 position-relative">
                
                {/* CAPA DE FONDO (Este es el que se desenfoca con el CSS) */}
                <div className="card-bg"></div>

                {/* CONTENIDO (Esto se mantiene nítido) */}
                <div className="card-content d-flex flex-column h-100">
                  <div className="p-3 text-center card-img-container">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid db-char-img"
                    />
                  </div>

                  <div className="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="fw-bold mb-1 text-white">{item.name}</h4>
                      <p className="text-warning mb-0 small fw-bold">{item.ki} KI</p>
                      <span className="badge border border-info text-info rounded-pill px-3 mt-2">
                        {item.race}
                      </span>
                    </div>
                  </div>

                  <div className="card-footer border-0 bg-transparent pb-4 d-flex justify-content-center gap-2">
                    <button className="btn btn-sm btn-info px-3 fw-bold">Modal</button>
                    <button className="btn btn-sm btn-outline-danger px-3">Detalles</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Personajes;