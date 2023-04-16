import { useEffect } from "react"

let miPromesa = new Promise ((res,rej)=>{

  res(productos)
})


export const ItemListContainer = ({greeting}) => {

  useEffect(() => { 

        miPromesa
            .then ((prod) => console.log(prod))
            .catch ((err) => console.log(err))
            .finally (() => console.log("Gracias por su visita"))


  })



  return (
    <div>
        <h2>{greeting}</h2>
    </div>
  )
}



