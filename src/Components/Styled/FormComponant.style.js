import styled from "styled-components";

export const FormComponantstyle= styled.section`
 display: flex;
 flex-direction:column;
 form{
  
     display: flex;
     flex-direction: column;
     gap: 5px;
     width: 50%;
 }
 input{
     background:#f9f9f9;
     padding: 10px;
     border: none;
     border-top-color: ${props => props.theme.colors.secondary};
     border-top-width: 2px;
     border-top-style: solid;
 }
 textarea{
     background:#f9f9f9;
     border: none;
     border-top-color: ${props => props.theme.colors.secondary};
     border-top-width: 2px;
     border-top-style: solid;

 }
 button{
     width: 60px;
     border-color:${props => props.theme.colors.secondary};
     
 }
`