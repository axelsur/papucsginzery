import React, { useState} from 'react'
import BuyModal from "./BuyModal";
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


const Item = ({item}) => {

  const [showBuy, setShowBuy] = useState(false);
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
          <BsCartPlus onClick={() => setShowBuy(true)} />
          <BuyModal show={showBuy} item={item} onHide={() => setShowBuy(false)} />
        </Icon>
      </Info>
    </ContainerItem>
  )
}

export default Item