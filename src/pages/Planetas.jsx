import { useEffect, useState } from "react";

const API = "https://dragonball-api.com/api/planets?page=1&limit=100";

const Planetas = () => {//zona de la logica
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setDatos(data.items);
      console.log(data)
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
    <h1 className="text-center">planetas</h1>
  )
}

export default Planetas