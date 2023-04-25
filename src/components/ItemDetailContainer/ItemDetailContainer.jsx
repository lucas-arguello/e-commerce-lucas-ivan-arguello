import { ItemDetail } from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { miFetch } from "../../miFetch"



export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState (null)
  const [isLoading, setIsLoading] = useState(true)
  const { pid } = useParams()
  
  console.log(pid)

  useEffect(() =>{
    miFetch(pid)
      .then (resp => setProducto(resp))
      .catch (err => console.log(err))
      .finally (() => setIsLoading(false))
  }, [])

  return (
    <div >

          {isLoading ? <p>Cargando...</p> : <ItemDetail {...producto} /> }
          
                              

    </div>
  )
}


