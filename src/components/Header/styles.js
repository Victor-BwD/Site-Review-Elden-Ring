import styled from "styled-components";

export const Container = styled.div`
        position: relative;
        text-align: center;
        color: white;

    div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }

    h1{
        font-size: 5rem;
        padding-top: 10px;
        font-family: "Roboto";
        font-weight: 700;
        @media(max-width: 720px){
            font-size: 2rem;
        }
        
    }

    img{
        width: 100%;
        @media(max-width: 720px){
            height: 19rem;
        }

        filter: brightness(0.6);
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    p{
        display: inline-block;
        margin-left: 1rem;
        
    }
`