import styled from "styled-components";


export const StyledHeader = styled.div`
  width: 100%;
  color:D9D9D9;
  background-color:rgb(0,0,0);
  .container {
      width: 65%;
      display:flex;
      .arrows{
        width:40%;
        cursor:pointer;
        flex:0.4;
        // background-color:pink;
        font-size: 3rem;
        display: flex;
        align-items: center;
        gap:1em;
      }
      .search--header{
        width:50%;
        flex:0.5;
        cursor:pointer;
        transition: scale 200ms ease-in-out;
        display:flex;
        align-items: center;
        &:hover{
            font-size:scale(1.08)
            padding:1em 2em;
            border: 0.1em solid blue;
          }
       
      }
      
    
  }
  @media screen and (min-width: 280px) and (max-width: 780px){
    display:none;
  }
  
`