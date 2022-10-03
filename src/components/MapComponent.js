import { useState } from "react";

const MapComponent = () => {
  const [products, setProducts] = useState([])

  setTimeout(() => {
    setProducts([
      {id: 1, name:'pretal', description:'string', stock:'number'},
      {id: 2, name:'cama', description:'string', stock:'number'},
      {id: 3, name:'paños', description:'string', stock:'number'}
    ])
  }, 5000)

  // const prom = new Promise ((resolve, reject)=>{
  //   setTimeout(()=>{
  //     resolve(products);
  //   },3000)
  // });
  
  // prom.then((result)=>{console.log(result)})

  return (
    <>
      <h1>Este es mi componente</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>
              {product.name}
            </h3>
          </li>
        ))}
      </ul>
    </>
  )
};

export default MapComponent;