import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    cursor: pointer;
    user-select: none;

    & .fav-active  {
        position: absolute;
        z-index: 2;

        right: 10px;
        top: 5px;
        color: yellow;
        font-size: 50px;

        filter: drop-shadow(0px 8px 12px #CABE7B);
    }

    & .fav-inactive  {
        position: absolute;
        z-index: 2;

        right: 10px;
        top: 5px;
        color: #29263c	;
        font-size: 50px;

        filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.14));
    }

    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }

`;

export const ChracterContainer = styled.div`
    background-color: #29263c;
    box-shadow: 0px 11px 37px -4px rgba(0,0,0,0.26);
    padding: 0px 0px 60px 0px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
`;

export const CharacterDetails = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    gap: 5px;
    width: 100%;
    position: absolute;
    flex-direction: column;
    & .details-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    & .name{
        font-size: 20px;
        font-weight: bold;
    }
    & .details {
        font-size: 14px;
        color: #bdbdbd;
    }
    & .alive {
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: #32a852;
    }

    & .dead {
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: #bf2843;
    }
`





