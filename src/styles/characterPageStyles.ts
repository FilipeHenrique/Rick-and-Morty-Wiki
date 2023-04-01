import styled from "styled-components";

export const CharacterDetailsContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .character-profile {
        display: flex;
        color: #edecee	;
        width: 60%;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: left;
            justify-content: left;
            width: 80%;
        }
    }

    & .fav-active  {
        cursor: pointer;
        color: yellow;
        font-size: 30px;
        margin-left: 20px;
    }

    & .fav-inactive  {
        cursor: pointer;
        color: #494949;
        font-size: 30px;
        margin-left: 20px;
    }

    & .character-details {
        display: flex;
        flex-direction: column;
    }

    & .character-details .gender-icon {
        margin-left: 5px;
        font-size: 16px;
    }

    & .character-details p {
        color: #bdbdbd;
        margin-bottom: 10px;
        margin-left: 50px;
        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 20px;
        }
    }

    & .name {
        color: #edecee	;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 20px;
        margin-left: 50px;
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
            margin-left: 0;
            font-size: 30px;
            margin-top: 20px;
        }
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

    & .label {
        color: #edecee	;
        font-weight: bold;
        font-size: 20px;
    }

    & details {
        display: block;
        color: #edecee	;
        width: 60%;
        margin-top: 50px;
        margin-bottom: 50px;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        background-color: #3d375e7f;
        & summary {
            padding: 10px;
            font-size: 16px;
            background-color: #8464c6;
        }

        @media (max-width: 768px) {
            width: 80%;
        }
    }

    & .episode-container {
        padding: 15px;
    }

    & .ep-title_container {
        display: flex ;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;

        & .ep-id {
            font-size: 16px;
            color: #bdbdbd;
        }

        & .ep-name {
            font-size: 20px;
        }
    }

    & .ep-details {
        display: flex;
        gap: 10px;
        color: #bdbdbd;
        font-size: 12px;
    }
    
    & .hr {
        border-top: 1px solid #15141b;
    }

`

