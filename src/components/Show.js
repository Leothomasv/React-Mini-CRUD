import React, {useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'

const MySwal = withReactContent(Swal)

const Show = () => {
    //1-configuramos los hooks
    const [products, setProducts] = useState([])
    // 2- referenciamos a la DB firestore
    const productsCollection = collection(db, "products")
    //3- Funcion para mostros todos los datos
    const getProducts = async() =>{
        const data = await getDocs(productsCollection)
        setProducts(
            data.docs.map((doc)=> ({...doc.data(), id:doc.id}))
        )
    }
    //4- funcion para eliminar un doc
    const deleteProduct = async(id) =>{
        const productDoc = doc=(db, "products", id)
        await deleteDoc(productDoc)
        getProducts()
    }
    //5- funcion de confirmacion para sweet alert 2

    //6- usamos useEffect
    useEffect(()=>{
        getProducts()
        //eslint-disable-next-line
    }, [])
    //7-devolvemos vista de nuestro componente

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <div className='d-grip gap-2'>
                <Link to="/create" className='btn btn-secondary mt-2 mb-2'></Link>
            </div>
            <table className='table table-dark table-hover'>
            <thead>
                <tr>Description</tr>
                <tr>Stock</tr>
                <tr>Actions</tr>
            </thead>
            <tbody>
                {products.map(product =>(
                    <tr key={product.id}>
                        <td>{product.description}</td>
                        <td>{product.stock}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                            <button onClick={()=> deleteProduct(product.id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
        </div>
    </div>
    </>

  )
}

export default Show