import styled from "styled-components";

export const PaginatorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-bottom: 40px;

    & button {
        border-radius: 4px;
        cursor: pointer;
        width: 30px;
        height: 35px;
        background-color: #29263c;
        color: #edecee;
    }

    & .active {
        background-color: red;
        color: #edecee	;
        background-color: #8464c6;

    }

    & .skip {
        width: 25px;
        height: 30px;
    }

    @media (max-width: 768px) {
            flex-wrap: wrap;
            max-width: 90%;
            margin-bottom: 20px;
    }
`
