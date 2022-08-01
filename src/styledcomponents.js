import styled from "styled-components";
import { mobile } from "./responsive";
import Button from 'react-bootstrap/Button';

// ------------- BuyModal  ------------- 
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const StockContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

export const Stock = styled.div`
  display: flex;
  align-items: center;
`;

export const StockTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const StockDetails = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;
// ------------- END BuyModal  ------------- 



// ------------- Footer  ------------- 
export const Container = styled.div`
  display: flex;
  background-color: #212529;
  margin-top: 10px;

  ${mobile({ flexDirection: "column" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1`
    color: white;
`;

export const DescFoot = styled.p`
  color: white;
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
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

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const Title = styled.h3`
  color: white;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
  width: 50%;
  margin-bottom: 10px;

`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "gray" })}
`;

export const ContactItem = styled.div`
  color:white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
    width: 50%;
`;
// ------------- END Footer  ------------- 



// ------------- Item  ------------- 
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Nombre = styled.div`
  font-family: Futura;
  font-size: 25px;
  position: absolute;
  margin-top: 486px;
  height: 75%;
  text-align:center;
  z-index: 2;
  visibility: hidden;
`;

export const ContainerItem = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
  &:hover ${Nombre}{
    visibility: visible; 
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

export const ImageItem = styled.img`
  height: 55%;
  border-radius: 50%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
// ------------- END Item  ------------- 



// ------------- ItemCount  ------------- 
export const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`;

export const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

export const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

export const StyledButton = styled(Button)`
    background-color: #f5fbfd;
    color: #141619;
	font-size: 1.2em;
	margin: 1em;
	padding: 0.25em 1em;
    border: 0;	
`;
// ------------- END ItemCount  ------------- 



// ------------- ItemListContainer  ------------- 
export const ContainerILC = styled.div`
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const TituloILC = styled.div`
    padding: 20px;
    font-family: Futura;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
`;
// ------------- END ItemListContainer  ------------- 