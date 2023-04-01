import styled from "styled-components";

export const NavIconContainer = styled.div`
    height: 80px;
    display: flex;
    color: #edecee;

    & :hover{
        cursor: pointer;
    }

    @media (max-width: 768px) {
        margin-bottom: 50px;
    }
    
`

export const  RickFace = styled.img`
    height: 70px;
    position: absolute;
    margin-top: 15px;
    margin-left: 30px;
    cursor: pointer;

    @media (max-width: 768px) {
        position: absolute;
        margin: auto;
        margin-top: 10px;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 1;
        height: 100px;
    }
`



