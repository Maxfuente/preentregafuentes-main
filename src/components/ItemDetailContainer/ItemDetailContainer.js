import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
  
    const {itemId} = useParams()
    useEffect(() => {
      getProductsById(itemId)
        .then(response => {
          setProducts(response);
        })
        .catch(error => {
          console.error(error);
        });
    }, [itemId]);
  
    return (
      <div className="ItemDetailContainer">
        {products && <ItemDetail {...products} />}
      </div>
    );
    
  }
  
  export default ItemDetailContainer;