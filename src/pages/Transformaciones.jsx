import { useEffect, useState } from "react";

const API = "https://dragonball-api.com/api/transformations?page=1&limit=100";

const Transformaciones = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setDatos(data);
      console.log(data);
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
    <div className="container">
      <h2 className="text-center py-4">Transformaciones</h2>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Ki</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.ki}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={40}
                    title={item.name}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={`#${item.id}`}
                  >
                    Modal
                  </button>
                </td>
              </tr>

              <div>
                <div
                  className="modal fade"
                  id={item.id}
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              src={item.image}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-md-6">
                            <h3>{item.name}</h3>
                            <h3>{item.ki}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal">
                        
                          Close
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Transformaciones;
