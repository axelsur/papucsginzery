import Item from "./Item";
import {ContainerILC} from '../styledcomponents'


const ItemList = ({items}) => {
  
    return (
        <ContainerILC>
            {items.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </ContainerILC>   
    );
  
};

export default ItemList