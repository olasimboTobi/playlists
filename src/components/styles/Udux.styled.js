import styled from "styled-components";
import uduxImage from "../../assets/Udux.png"


export const StyledUdux = styled.div`
    width: 98%;
    color: #D9D9D9;
    padding:2em 1.5em;
    background-color: rgb(0,0,0);
    background-image: url(${uduxImage});
    background-blend-mode: lighten;
    background-size: 100%; 
    .Udux--container{
        .logo2{
            text-align:right;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 780px){
        .Udux--container{
            .logo1{
                font-size:2rem;
            }
            .logo2{
                width:20rem;
                img{
                    max-width:20rem;
                }
            }
        }
    }
     
    
    
`