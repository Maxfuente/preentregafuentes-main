import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from "../../firebase/config";




const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId}  = useParams();
  
    useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId
            ? query(collection( db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch( error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer