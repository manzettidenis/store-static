import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export const Navbar = styled.nav`
  position: absolute;
  position: fixed;
  display: flex;
  background-color: white;
  align-items:center;
  justify-content: center;
  height: 120px;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  border-top: 0;
  border-bottom: solid 1px;
  border-color: gray;
  img{
    margin-right: 50px;
  }
  .car{
    font-size: 10px;
    color: black;

  }
  h2{
    float: center;
    color: black;
    position: relative;
   left: -100px;
  }
  li{
    list-style-type: none; 
  }.list{
    font-size: 5px;
  }
`
export const Header = styled.header`

`
export const Menu = styled.div`
.topnav a {
  float: left;
  display: block;
  padding: 0px 0px;
  text-decoration: none;
  font-size: 17px;
}

.topnav .search-container {
  float: left;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 20px;
  font-size: 17px;
  border: none;
  background-color: #DAD6DB;
}

.topnav .search-container button {
  float: center;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  
}

@media screen and (max-width: 600px) {

  .topnav .search-container {
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
    margin: 20px 0px;
  }
  .topnav input[type=text] {
     
  }
}
`
export const SearchIcons = styled(SearchIcon)`
  height: 15px!important;
  border-color: #DAD6DB!important;
  background-color: #DAD6DB!important;
`
export const Car = styled.div`
  display: flex;
  position: relative;
  right: -90px;
`
export const Zero = styled.a`
 color: white!important;
 border-radius: 34px;
 font-size: 14px;
 position: relative;
 left: 4px;
 top: -1px; 
 span{
   font-weight: bold;
 }
`
export const CarZero = styled.div`
  border-radius: 42px;
  width: 23px;
  background: black;
  position: relative;
  width: 19px;
  height: 21px;
  top: 3px;
  right: 21px;
`
export const ShoppingCartIcons = styled(ShoppingCartIcon)`
  color: #FF9A01!important;
  width: auto!important;
  height: 50px!important;
`
export const SignUp = styled.a`
 color: black;
 position: relative;
 right: -30px;
`
export const SubMenu = styled.div`

  display: flex;
`
export const SubList = styled.ul`
 align-items:center;
  justify-content: center;
  position: relative;
  color: grey;
  top: 100px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  list-style-type: none;
  margin-top: 35px;

`
export const SubItem = styled.li`
 margin-left: 30px;
 font-size: 18px;
 :hover{
 color: orange;
 }
`
