export const products = [
    {id: 1, title:"pelela", category: "productos",description: "string", price: 100, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_949700-MLA45712511270_042021-O.webp" },
    {id: 2, title:"cama", category: "productos",description: "string",price: 100, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_847984-MLA43554334074_092020-F.webp" },
    {id: 3, title:"pelota",category: "productos",description: "string", price: 100, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_979078-MLA31053308175_062019-F.webp" }

]
//la imagen tiene q ser png o jpg(asi q modificar porq estas son webp)

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
  
    return promise
  };

  export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })
  
    return promise
  };

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};