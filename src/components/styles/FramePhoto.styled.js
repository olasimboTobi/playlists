import styled from "styled-components";

export const StyledFramePhoto = styled.div`
  width: 13em;
  color:black;
  min-height: 30vh;
  background-color: white;
  border: 0.1em solid gray;
  &:hover{
    border: 0.1em solid blue;
  }
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  .black--box{
    flex:0.1;
    background-color: rgb(0,0,0)
  }
  .linear--box{
    flex:0.9;
    display:flex;
    flex-direction: column;
    .linear--box--top{
      flex:0.6;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }
    .linear--box--bottom{
      flex:0.4;
      padding-top:7em;
      .box--bottom{
        width:80%;
        margin:0 auto;
        font-size:0.9rem;
        .box--bottom1{
          color:#fff;
          font-size:1rem;
          font-weight:bold;
        }
        .box--bottom2{
          color: rgba(255, 255, 255, 0.6);
          
        }
      }
    }
  }
  .imgAlbum{
    width: 13.2rem;
    height:13.2rem;
    border: 0.8em solid black;
    position:absolute;
    left:1em;
    top:1em;

    img{
      
      max-width:11.2rem;
      max-height:11.2rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 780px){
    width:10em;
    text-align:center;
    .imgAlbum{
      width: 10.2rem;
      height:10.2rem;
      border: 0.8em solid black;
      position:absolute;
      left:1em;
      top:1em;
  
      img{
        max-width:8.2rem;
        max-height:8.2rem;
      }
    }
  }


`