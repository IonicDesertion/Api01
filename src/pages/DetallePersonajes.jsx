import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
const API = "https://dragonball-api.com/api/characters/";
const DetallePersonajes = () => {
    const params = useParams()
    const id = params.id;
    const nombre = params.nombre;
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
    <div className='container'>
        <h3 className='text-center py-5'>Detalles del personaje : {nombre}</h3>

    </div>
  )
}

export default DetallePersonajes