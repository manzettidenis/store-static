import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const ProductStyle = styled.section`
    margin-top: 120px;
    display: flex;
`
export const Images = styled.div`
    margin: 0px 0px;
`
export const X500 = styled.img`
    width: 400px;
`
export const X250 = styled.img`
    width: 134px;
`
export const ProductName = styled.div`
   
`
export const Title = styled.h1`
    font-weight: bold;
    font-size: 30px;
    color: black;
   
`
export const Par = styled.p`
    margin: 40px 21px;
    text-decoration: line-through;

`
export const List = styled.ul`
     list-style-type: none;
     display: flex;
`
export const Item = styled.li`
    span{
      
    }
`
export const Align = styled.span`
  position: relative;
  right: 20px;
`
export const AlignTwo = styled.span`
    position: relative;
    right: -130px;
`

export const ProductPrice = styled.div`
    color: orange;
    margin: 34px 21px;
    font-size: 50px;
    font-weight: bold;

`
export const PriceDesc = styled.p`
    margin: 0px 21px;


`
export const PriceDescTwo = styled.p`
    margin: 10px 21px;
`
export const Select = styled.div`
    display: flex;
    overflow: hidden;
    margin: 0px -3px;
    .dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: solid 2px;
  color: black;
  background-color: white;
  font-family: inherit;
    span{
        position: relative;
        top: -3px;
    }
}

.select a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

`
export const ItemDropDown = styled.div`
    margin: 1px 24px;

`

export const ItemDropDownSecond = styled.div`

`
export const ExpandMoreIcons = styled(ExpandMoreIcon)`
    margin: 0px 22px;
    position: relative;
    right: -18px;
    top: 3px;
    
`

export const One = styled.button`
    background-color: white;
    border: solid black 1px;
    height: 30px;
    width: 30px;
`
export const Button = styled.button`
    margin: 0px 20px;
    background-color: orange;
    border: none;
    height: 30px;
    width: 301px;
`
export const NumberCar = styled.div`
    margin: 10px 20px;
    
`

export const Delete = styled.div`
    display: flex;
    p{
        margin: 15px 25px;
    }
    button{
        background-color: white;
        width: 150px;
        height: 25px;
        margin: 13px 91px;
        position: relative;
        right: -30px;
        border: solid black 2px;
    }
    span{
        position: relative;
        right: -30px;
    }
`
export const Sliders = styled.div`
    display: flex;
`
