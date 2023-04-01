import styled from "styled-components"

export const SearchBar = styled.div`

    display: flex;
    border-radius: 4px;

    & .input{
        outline: none;
        color: #edecee;
        border-radius: 2px;
        padding: 10px;
        width: 350px;
        background-color: #3d375e;  
        :hover {
            cursor: auto;
        }
        ::placeholder{
            color: #edecee;
        }
        :focus {
            border: 2px solid #a277ff;
        }
    }

    & .icon-container {
        background-color: #3d375e7f;
        padding: 10px;
        height: 100%;
        text-align: center;
        & .icon {
            color: #edecee;
            font-size: 20px;
        }
    }



`