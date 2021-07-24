import styled from 'styled-components'

export const StyledFooter = styled.footer`
    display: flex;
    margin-top: 100px;
    align-items:center;
  
    justify-content: center;
    .spacing{
        position: relative;
        top: 64px;
    }.image{
        top: 30px;
        position: relative;
    }
`
export const FooterItem = styled.h2`
    font-weight: bold;
    font-size: 25px;
    position: relative;
  
`
export const FooterList = styled.ul`
    list-style-type: none;
    white-space: nowrap;
    right: 38px;
    position: relative;

`
export const OrangeBorderedSocial = styled.hr`
    border: 3px solid orange;
    position: relative;
    top: -5px;
    right: 6px;
    width: 78px;
`
export const OrangeBorderedHelp = styled.hr`
    border: 3px solid orange;
    position: relative;
    top: -5px;
    right: 18px;
    width: 73px;
    
`
export const OrangeBorderedFreyre = styled.hr`
    border: 3px solid orange;
    position: relative;
    top: -5px;
    right: 30px;
    width: 73px;
   
`
export const Item = styled.li`
`

export const UnderFooter = styled.div`
    width: 100%;
    border-top: 3px solid black;
    border-color: #f9f9f9;
    margin-top: 20px;
    position: absolute;
    background: #f9f9f9;
    margin-top: 252px;
     p{
        text-align: center;
        margin-top: 5px;
    }
`
