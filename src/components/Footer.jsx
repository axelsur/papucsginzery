import { BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsGeoAlt, BsTelephone, BsEnvelope  } from "react-icons/bs";

import {Container,
        Left,
        Logo,
        DescFoot,
        SocialContainer,
        SocialIcon,
        Center,
        Title,
        List,
        Right,
        ContactItem,
        Payment
} from '../styledcomponents'
import {Link} from 'react-router-dom'
import "../style.css"

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PAPUCS.</Logo>
        <DescFoot>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut bibendum eu urna vel tristique. Integer posuere nunc enim, 
        sed dictum leo malesuada eget. Phasellus ut purus vitae est 
        lobortis commodo. Suspendisse pretium ipsum et eros facilisis, 
        vitae convallis magna iaculis. 
        </DescFoot>
        <SocialContainer>
          <SocialIcon color="3B5999">
          <BsFacebook 
              size={30} 
              color="white"
    />
          </SocialIcon>
          <SocialIcon color="E4405F">
          <BsInstagram 
              size={30} 
              color="white"
    />
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <BsTwitter 
              size={30} 
              color="white"
    />
          </SocialIcon>
          <SocialIcon color="E60023">
          <BsPinterest 
              size={30} 
              color="white"
    />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Rapidos</Title>
        <List>

        <Link className="footlink" to='/'>Home</Link>
        <Link className="footlink" to='/categoria/hombre'>Hombre</Link>
        <Link className="footlink" to='/categoria/niño'>Niño</Link>
        <Link className="footlink" to='/categoria/mujer'>Mujer</Link>
        <Link className="footlink" to='/categoria/unisex'>Unisex</Link>

        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
        <BsGeoAlt size={30} color="white" /> 999 Direccion , Chiudad, Provincia.
        </ContactItem>
        <ContactItem>
        <BsTelephone size={30} color="white" /> +1 111 11 11
        </ContactItem>
        <ContactItem>
        <BsEnvelope size={30} color="white" /> contact@contact.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;