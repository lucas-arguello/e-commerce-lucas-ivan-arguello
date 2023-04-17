import { useState } from "react"
import { useEffect } from "react"
import { miFetch } from "./miFetch"




export const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 

        miFetch
            .then ((resultado) => setProductos(resultado))
            .catch ((err) => console.log(err))
            .finally (() => setIsLoading(false))


  }, [])

 //console.log(productos)

  return (
    <div>
        { isLoading ? 

                    <h2>Cargando...</h2> 
                    :
                    productos.map (({id, categoria, nombre, cantidad, descr, precio, img}) => 
                    
                                          <div key= {id} className= "card w-25">

                                              <img src= {img} alt="imagen-card" />
                                              <div className="card-body">
                                                  <h5> Nombre: {nombre}</h5>
                                                  <label><strong>Categoria:</strong> {categoria}</label>
                                                  <p><strong>Descripcion:</strong> {descr}</p>
                                                  <p><strong>Precio: </strong> ${precio}</p>
                                                  <p><strong>Cantidad en Stock:</strong> {cantidad}</p>
                                              </div>
                                              <div className="card-footer">
                                                  <button className="btn btn-outline-dark"> Agregar </button>
                                              </div>

                                          </div>
                                  )

        }
    </div>
  )
}



