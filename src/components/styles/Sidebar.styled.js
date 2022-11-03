import styled from "styled-components";
import myImage from '../../assets/flask.png';

export const StyledSidebar = styled.div`
  min-height: 100vh;
  flex: 0.2;
  color: #D9D9D9;
  font-size:1.6rem;
  width: min(20%, 29.2em);
  padding-left: 1em;
  padding-right: 1em;
  background-color: rgb(0,0,0);
  background-image: url(${myImage});
  background-blend-mode: lighten;
  .sidebar--avatar{
    width:min(29.5em,100%);
    padding:1em 0;
    display:flex;
    align-items: center;
    margin-right:auto;
    gap:1em;
    margin-bottom:1em;
    .logo--avatar{
        object-fit: contain;
    }
   }
   .sidebaroption--top{
    margin-bottom:2em;
    
   }
   .sidebaroption--bottom{
    margin-bottom:2em;
   }
   .sidebaroption--search{
    margin-bottom:2em;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .search--playlist{
       width:60%;
       max-width:10em;
       flex:0.4
    }
    .search{
       flex:0.1
    }
   }
   @media screen and (min-width: 280px) and (max-width: 780px){
      display:block;
      min-height:0em;
      width: min(780px, 100%);
      background-color:rgb(0,0,0)
      background-image: none;
      background-blend-mode: multiply;
      .sidebar--avatar{
         width:min(950px, 80%)
         // height:10vh;
         margin:0 auto;
      }
      .sidebaroption--top,
      .sidebaroption--bottom,
      .sidebaroption--search,
      .search--playlist {
         display:none;
         .search{
            display:none;
         }
      }

      
   }
   
   
  
`