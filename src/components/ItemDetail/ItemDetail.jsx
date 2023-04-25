

import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail = ({categoria, nombre, cantidad, descr, precio, img}) => {
  return (
    <div  className= "card w-25 ">

      <div className="card-body">
          <h5> Nombre: {nombre}</h5>
          <label><strong>Categoria:</strong> {categoria}</label>
          <p><strong>Descripcion:</strong> {descr}</p>
          
      </div>
          <img src= {img} alt="imagen-card" />
          <p><strong>Precio: </strong> ${precio}</p>
          <p><strong>Cantidad en Stock:</strong> {cantidad}</p>
      <div className="card-footer">
      </div>
      <ItemCount/>

    </div>
  )
}



