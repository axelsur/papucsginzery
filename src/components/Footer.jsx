import styled from "styled-components";
import { mobile } from "../responsive";

import { BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsGeoAlt, BsTelephone, BsEnvelope  } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  background-color: #212529;
  margin-top: 10px;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
    color: white;
`;

const Desc = styled.p`
  color: white;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
  width: 50%;
  margin-bottom: 10px;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "gray" })}
`;

const ContactItem = styled.div`
  color:white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PAPUCS.</Logo>
        <Desc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut bibendum eu urna vel tristique. Integer posuere nunc enim, 
        sed dictum leo malesuada eget. Phasellus ut purus vitae est 
        lobortis commodo. Suspendisse pretium ipsum et eros facilisis, 
        vitae convallis magna iaculis. 
        </Desc>
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
          <ListItem>Home</ListItem>
          <ListItem>Productos</ListItem>
          <ListItem>Hombre</ListItem>
          <ListItem>Mujer</ListItem>
          <ListItem>Niños</ListItem>
          <ListItem>Mi Cuenta</ListItem>
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