import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

 const products = [
   {id: 1, title:"pelela", category: "productos",description: "Pelela mascota", price: 100, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_949700-MLA45712511270_042021-O.webp" },
   {id: 2, title:"cama", category: "productos",description: "Cama mascota",price: 100, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_847984-MLA43554334074_092020-F.webp" },
   {id: 3, title:"pelota",category: "productos",description: "Pelota mascota", price: 100, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_979078-MLA31053308175_062019-F.webp" },
   {id: 4, title:"alimento",category: "alimentos",description: "Alimento mascota", price: 200, pictureUrl:"https://www.hoplatam.com/img/conocehop/twopacks.png" },
   {id: 5, title:"alimento1",category: "alimentos",description: "Alimento mascota", price: 400, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_913975-MLA44104669270_112020-F.webp" },
   {id: 6, title:"alimento2",category: "alimentos",description: "Alimento mascota", price: 700, pictureUrl:"https://www.alimentoraza.com/wp-content/uploads/2022/03/RAZA-GATOS-PESCADO_3D_Sin-Kg.jpg" }
    
 ]


export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}