import React, { useState} from 'react'
import ZoomModal from './ZoomModal';
import {Route} from 'react-router-dom'

import {
    BsHeart,
    BsSearch,
}from "react-icons/bs";

import {ContainerItem,
        Nombre,
        Circle,
        ImageItem,
        Info,
        Icon,
} from '../styledcomponents'
import ItemDetailContainer from './ItemDetailContainer';


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
          <ItemDetailContainer itemid={item.id} />
        </Icon>
      </Info>
    </ContainerItem>
  )
}

export default Item