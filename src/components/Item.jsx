import React, { useState} from 'react'
import ZoomModal from './ZoomModal';

import {
    BsHeart,
    BsSearch,
    BsCartPlus,
}from "react-icons/bs";

import {ContainerItem,
        Nombre,
        Circle,
        ImageItem,
        Info,
        Icon,
} from '../styledcomponents'
import {Link} from 'react-router-dom'


const Item = ({item}) => {

  
  const [showZoom, setShowZoom] = useState(false);

  
  return (
    <ContainerItem>
      <Nombre>{item.nombre}</Nombre>
      <Circle />
      <ImageItem src={item.img} />
      <Info>
        <Icon>
          <BsHeart />
        </Icon>
        <Icon>
          <BsSearch onClick={() => setShowZoom(true)} />
          <ZoomModal show={showZoom}
          item={item} 
          onHide={() => setShowZoom(false)} />
        </Icon>
        <Icon>

          <Link style={{ color: 'black' }} to={`/producto/${item.id}`}  > <BsCartPlus /> </Link>
        
        </Icon>
      </Info>
      
    </ContainerItem>
  )
}

export default Item