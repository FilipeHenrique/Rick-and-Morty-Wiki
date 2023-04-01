import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    & .image {
        height: 500px;
    }

    & .title {
        color: #edecee;
        font-weight: bold;
        font-size: 150px;
    }
    & .text {
        font-size: 30px;
        color: #edecee;
    }
`