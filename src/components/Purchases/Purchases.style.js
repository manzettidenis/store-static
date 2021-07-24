import styled from 'styled-components'

export const PurchasesStyle = styled.section`
    background: #F9F9F9;

`
export const Title = styled.h1`
    text-align: center;
`
export const Hr = styled.hr`
    border: 1px solid orange;
    width: 70px;
    position: relative;
    top: -10px;
`

export const PurchasesContainer = styled.div`
  background: white;
  border-radius: 6px;
  display: flex;
`

export const SearchProduct = styled.div`
  display: flex;
  margin: 30px 0px;
  ul{
      float: right;
      list-style-type: none;
  }input{
      background-color: #F9F9F9;
      border: none;
      height: 40px;
      position: relative;
      right: -30px;
  }button{
    justify-content:flex-end;
      margin: 0px 45px;
      background: black;
      color: orange;
      border: none;
      /* width: 46%; */
      height: 40px;
      border-radius: 6px;
      width: 315px;
      }
`

export const ProductContainer = styled.div`
    display: flex;
    background-color: white;
    white-space: nowrap;

    ul{
        /* margin: 71px 0px; */
        margin-top: 100px;
        list-style-type: none;
    }img{
        width: 118px;
        margin: 85px 52px;
        border: 10px;
    }

`
export const ProductAmount = styled.div`

     li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 23px;
    }
    li:nth-child(2) {
    font-weight: bold;
    color: grey;
   
    }
`
export const ProductPrice = styled.div`
    position: relative;
    right: -80px;
     li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 23px;
    }
    
`
export const ProductCode = styled.div`
    
     li:nth-child(1) {
        
    }
`
export const RightList = styled.div`
  
    ul{
        list-style-type: none;
        margin: 15px 63px;
        font-weight: bold;
        
    }
     li:nth-child(1) {
    
    } li:nth-child(2) {
     margin: 10px 0px;
    }li:nth-child(2) {
     margin: 10px 0px;
    }li:nth-child(3) {
     display: flex;
     margin: 10px 0px;
    }li:nth-child(4) {
     color: green;
     margin: 10px 0px;
    }
`
export const ButtonBorder = styled.hr`
    width: 98%;
    /* background: white; */
`
export const ProductDeniedContainer = styled.div`
  background: white;
  border-radius: 6px;
  position: relative;
  top: -10px;
  border-bottom: 12px;
  img{
        width: 118px;
        margin: 85px 23px;
        border: 10px;
    }
`

export const ProductAmountBottom = styled.div`
    margin: 100px 0px;
     li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 23px;
    }
    li:nth-child(2) {
    font-weight: bold;
    color: grey;
    }
`

export const ProductCodeBottom = styled.div`
    margin: 100px 20px;
     li:nth-child(1) {
    
    }
    li:nth-child(2) {
    
   
    }
`
export const ProductPriceBottom = styled.div`
    position: relative;
    right: -70px;
     li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 23px;
    }
`
export const RightListBottom = styled.div`
    ul{
        list-style-type: none;
        margin: 60px 34px;
        font-weight: bold;
    }
     li:nth-child(1) {
    
    } li:nth-child(2) {
     margin: 10px 0px;
    }li:nth-child(2) {
     margin: 10px 0px;
    }li:nth-child(3) {
     display: flex;
     margin: 10px 0px;
    }li:nth-child(4) {
     color: red;
     margin: 10px 0px;
     
    }
    
`
