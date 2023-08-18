import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../firebase/config";



const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const [,setLoading] = useState(true)
  
    const {itemId} = useParams()
    
    useEffect(() => {
      setLoading(true)
    const docRef = doc(db,'products', itemId)

    getDoc(docRef)
    .then(response => {
      const data = response.data()
      const productsAdapted = { id: response.id, ...data}
      setProducts(productsAdapted)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(()=>{setLoading(false)})
     
    }, [itemId]);
  
    return (
      <div className="ItemDetailContainer">
        <ItemDetail {...products} />
      </div>
    );
    
  }
  
  export default ItemDetailContainer;