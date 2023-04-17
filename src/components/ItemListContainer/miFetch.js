
import {productos} from "./InStock"


export const miFetch = new Promise ((res,rej)=>{

    setTimeout(
              () => { res(productos) }, 
              
              2000)
  })