
import React from 'react'
import{Flex} from "@chakra-ui/react"
import ItemList from './ItemList'
import Pompeii from "../assets/platos/PLATO_POMPEII.jpg"
import Montjuic from "../assets/platos/PLATO_MONTJUIC.jpg"
import Libadi from "../assets/platos/PLATO_LIMBADI.jpg"
import TMitte from "../assets/tazas/TAZON_MITTE.jpg"
import Tlimbadi from "../assets/tazas/TAZON_LIMBADI.jpg"
import TMontjuic from "../assets/tazas/TAZON_MONTJUIC.jpg"
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const{category}=useParams()

    const productos =[
    { id: 1, nombre: "Plato Pompeii",  descripcion:"Plato hondo", precio: 1980, imagen: <img src={Pompeii} alt=""/>,  stock:1, category:"cat1" },
    { id: 2, nombre: "Plato Montjuic", descripcion:"Plato 22cm",  precio: 1990, imagen: <img src={Montjuic} alt=""/>, stock:1, category:"cat1" },
    { id: 3, nombre: "Plato Limbadi",  descripcion:"Plato 22cm",  precio: 1990, imagen: <img src={Libadi} alt=""/>,   stock:1, category:"cat1" },
    { id: 4, nombre: "Tazón Mitte",    descripcion:"Tazón",       precio: 2990, imagen: <img src={TMitte} alt=""/>,   stock:1, category:"cat2" },
    { id: 5, nombre: "Tazón Limbadi",  descripcion:"Tazón",       precio: 2990, imagen: <img src={Tlimbadi} alt=""/>, stock:1, category:"cat2" },
    { id: 6, nombre: "Tazón Montjuic", descripcion:"Tazón",       precio: 2990, imagen: <img src={TMontjuic} alt=""/>,stock:1, category:"cat2" },   
    ]

    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0){
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
                reject(new Error("sin datos"))
            }
        })

    getProductos
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

    const filteredProducts = productos.filter((producto)=> producto.category === category)

    return (

    <Flex wrap='center'>
        <ItemList productos={filteredProducts}/>

        
        
    </Flex>
        
    
    )
}

export default ItemListContainer