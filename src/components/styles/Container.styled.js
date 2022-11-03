import styled from "styled-components";

export const Container = styled.div`
   width:100%;
   background-color:rgb(0,0,0);
   display:flex;
   overflow:auto;

   @media screen and (min-width: 280px) and (max-width: 780px){
      display:block;
   }
  
`