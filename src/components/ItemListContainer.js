import { FaBeer } from 'react-icons/fa';


const ItemListContainer = ({ greeting }) => {

    return ( 
        
        <>
        <h2>Conoce nuestros productos</h2>
        <h3 classname="greeting">{ greeting}</h3>
        </>
        
     );
}
 
export default ItemListContainer;