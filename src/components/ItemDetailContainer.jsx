import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {


    const productos = [
        { id: 1, nombre: "Producto A", descripcion: "Descripcion de Producto A", stock: 5, categoria: "A" },
        { id: 2, nombre: "Producto B", descripcion: "Descripcion de Producto B", stock: 10, categoria: "A" },
        { id: 3, nombre: "Producto C", descripcion: "Descripcion de Producto C", stock: 20, categoria: "B" },
        { id: 4, nombre: "Producto D", descripcion: "Descripcion de Producto D", stock: 15, categoria: "B" },
        { id: 5, nombre: "Producto E", descripcion: "Descripcion de Producto E", stock: 25, categoria: "C" },
        { id: 6, nombre: "Producto F", descripcion: "Descripcion de Producto F", stock: 30, categoria: "C" }
    ]

    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new error("No hay datos"))
        }
    })

    getProductos
        .then((res) => {
        })
        .catch((error) => {
            console.log(error)
        })


    return (
        <>
            <ItemDetail
                productos={productos} />
        </>
    )
}


export default ItemDetailContainer