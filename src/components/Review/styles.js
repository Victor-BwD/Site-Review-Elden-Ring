import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    width: 70%;
    border: 5px solid #FFFF00;
    padding: 10px;
    @media(max-width: 720px){
            width: 100%;
    }
    p {
        display: block;
        font-size: 1.2rem;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;


    }
`