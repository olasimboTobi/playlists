import styled from "styled-components";

export const StyledBody = styled.div`
  flex:0.8;
  min-height:100vh;
  color:white;
  background:rgb(0,0,0);
  .body{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:2em;
    .body--head{
      width:100%;
    }
    .body--udux{
      width:100%;
    }
    .row--container{
      width:100%;
      display:flex;
      flex-direction:column;
      gap:2em;
      .row + .row{
        margin-top: 2em;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 780px){
    display:block;
    width:100%;
    .body{
      width:95%;
      margin:0 auto;
      .body--head{
        display:none;
      }
      .body--udux{
        width:100%;
        // background-color:pink;
      }
      .row--container{
        width:100%;
        display:block;
        .row + .row{
          margin-top: 2em;
        }
      }
    }
}
`