import styled from 'styled-components'

export const ProfileStyle = styled.section`
    background: #f9f9f9;

    h1{
        text-align: center;
        margin: 0px 11px;
        font-size: 29px;
    }input{
        background: #f9f9f9;
        border: none;
        height: 35px;
        border-radius: 6px;
    }
`
export const Button = styled.button`
     margin: 13px -13px;
     background-color: orange;
     border: none;
     width: 100px;
     height: 30px;
     border-radius: 3px;
`;
export const ButtonRight = styled.button`
   background-color: orange;
    border: none;
    position: relative;
    right: -20px;
    height: 30px;
    width: 254px;
    border-radius: 3px;
`;
export const FormularySection = styled.div`
    background-color: white;
 
    border-radius: 32px;
    .personal{
        color: orange;
    }.yourname{
        width: 100%;
        /* margin-top: 100px */
    }
`
export const FormContainer = styled.div`
    display: flex;
  .form-group{
        width: 50%;
        input{
            width: 100%;
        }.spacing{
            width: 87%;
        
        }
    }.gender{
        width: 100%;
        height: 35px;
         border: none;
        
    background: #f9f9f9;;
    }.form-group-number{
        input{
            width: 40%;
        }
    }.complement{

    }
`
export const HrFirst = styled.hr`
    
    width: 70px;
    border: solid 2px orange;
    position: relative;
    top: -3px;
`
export const HrSecond = styled.hr`
    width: 100%;
    border-color: black;
    position: relative;
    top: 30px;
`;
export const Adress = styled.div`
    h2{
        font-size: 30px;
        margin: 40px 10px
    }p{
       
    }.text{
        position: relative;
        right: -165px;
        font-weight: bold;
        top: -46px;
    }
`;

