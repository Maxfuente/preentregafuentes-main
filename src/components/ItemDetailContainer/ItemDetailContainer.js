import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";




const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const [loading,setLoading] = useState(true)
  
    const categoryId = useParams().categoryId
    
    useEffect(() => {
      setLoading(true)
    const docRef = doc(db,'productos', categoryId)

    getDoc(docRef)
    .then(response => {
    setProducts(
      {...response.data(), categoryId:categoryId}
    )
    })
    .catch(error => {
      console.log(error)
    })
    .finally(()=>{setLoading(false)})
     
    }, [categoryId]);
  
    return (
      <div className="ItemDetailContainer">
         <ItemDetail {...products} />
      </div>
    );
    
  }
  
  export default ItemDetailContainer;