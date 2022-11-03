import styled from "styled-components";
import {TweenMax, Power3} from 'gsap';


export const StyledSidebarOption = styled.div`
    cursor: pointer;
    color:#D9D9D9;
    transiton:200ms color ease-in;
    &:hover{
       color: white;
    }
    
    .icon--title{
        width:100%;
        min-width:7em;
        display: flex;
        // border: 0.1rem solid red;
        align-items: center;
        gap:1em;
        .sidebarOption--icon{
            width: min(0.2em,6%)
            // padding-left:1em;
            flex:0.2;
            // flex-grow:1;
            // flex-shrink:1;
            // flex-basis: 20%;
        }
        .title{
            width: min(4em,90%)
            flex:0.7;
            // flex-grow:1;
            // flex-shrink:1;
            // flex-basis: 70%;
            margin-top:1em;
            .title--bold{
                font-weight:bold;
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 780px){
        display:none;
    }

    
`