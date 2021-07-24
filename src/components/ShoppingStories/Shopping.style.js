import styled from 'styled-components'

export const Shopping = styled.section`
    margin-top: 100px;
    background-color: #e3e2e1;
    height: 400px;
    h2{
        text-align: center;
        position: relative;
        top: 10px; 
        margin-top: 60px;
    }.orange{
        border: solid 2px orange;
        width: 100px;
    }.lists{
       border-radius: 12px;
       background-color: white;
       height: 200px;
       margin-top: 15px;
       li{
           list-style-type: none;
       }
    }

`
export const List = styled.ul`
    margin-top: 20px;
   
`
export const NumberOrder = styled.ul`
    margin-top: 20px;
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

export const CalendarPayment = styled.div`
     margin-top: 20px;
    li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 15px;
    }
    li:nth-child(2){
    font-weight: bold;
    color: grey;
    
    }
`
export const StatusPayment = styled.div`
     margin-top: 20px;
    li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 15px;
    }
    li:nth-child(2){
    font-weight: bold;
    color: blue;
   
    }
`
export const SentStatus = styled.div`
     margin-top: 20px;
    li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 15px;
    }
    li:nth-child(2){
    font-weight: bold;
    color: black;
      

    }
`
export const SecondNumber = styled.div`
    margin-top: 20px;
    position: relative;
    right: -38px;
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
export const SecondCalendar = styled.div`
    margin-top: 20px;
    position: relative;
  
    li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 15px;
    }
    li:nth-child(2) {
    font-weight: bold;
    color: grey;
    }
`
export const StatusAproved = styled.div`
    margin-top: 20px;
    position: relative;
    li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 15px;
    }
    li:nth-child(2) {
    font-weight: bold;
    color: green;
    }
`
export const StatusDelivered = styled.div`
    margin-top: 20px;
    position: relative;
    li:nth-child(1) {
    font-weight: bold;
    color: black;
    font-size: 15px;
    }
    li:nth-child(2) {
    font-weight: bold;
    color: black;
    }
`
export const Item = styled.li`
   list-style-type: none;
   font-weight: bold;

`
export const HR = styled.hr`
    width: 98%;
`
