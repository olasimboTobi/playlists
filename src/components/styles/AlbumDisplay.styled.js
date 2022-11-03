import styled from "styled-components";

export const StyledAlbumDisplay = styled.div`
  width:90%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap:1em;
  .first{
    flex: 1 2 auto;
  }
  .second{
    flex: 1 2 auto;
  }
  .third{
    flex: 1 2 auto;
  }
  .fourth{
    flex: 1 2 auto;
  }
  .fifth{
    flex: 1 2 auto;
  }
  .sixth{
    flex: 1 2 auto;
  }

  @media screen and (min-width: 280px) and (max-width: 780px){
    width: 98%;
    margin:0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 1rem;

  }
`