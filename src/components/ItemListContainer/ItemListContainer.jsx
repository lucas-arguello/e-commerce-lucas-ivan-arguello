import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { miFetch } from "../../miFetch"
import {useParams} from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"




export const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoria } = useParams()

  //console.log(categoria)

  useEffect(() => {    

        if (!categoria) {
          miFetch()
          .then ((resultado) => setProductos(resultado))
          .catch ((err) => console.log(err))
          .finally (() => setIsLoading(false))

        } else {
          miFetch()
          .then ((resultado) => {
            setProductos(resultado.filter(productos =>productos.categoria === categoria))
          })
          .catch ((err) => console.log(err))
          .finally (() => setIsLoading(false))
        }
      }, [categoria]);
       

console.log(productos)

  return (
    <div className= "row">
        { isLoading ? 

                    <h2>Cargando...</h2> 
                    :
                
                    <ItemList productos = {productos}/>
                   

        } 
    </div>
  )
}




