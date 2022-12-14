import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  
  useEffect(() => {
    getProduct(id)
    .then((data) => {
      setProduct(data)
    })
    .catch (error => console.warn(error))
  }, [id])

  return (
    <Container>
      <h1>Detalle del Producto</h1>
      {product && <ItemDetail product={product}/>}
    </Container>    
  );
}
 
export default ItemDetailContainer;