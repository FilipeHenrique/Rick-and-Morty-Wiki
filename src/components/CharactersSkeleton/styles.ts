import styled, {keyframes} from "styled-components"

export const Skeleton = styled.div`
    background-color: #29263c;
    height: 364px;
    width: 300px;
    box-shadow: 0px 11px 37px -4px rgba(0,0,0,0.26);
    padding: 0px 0px 60px 0px;
    border-radius: 4px;
    position: relative;
    
    & .image-skeleton {
        background-color: #3d375e7f	;
        height: 300px;
        width: 300px;
    }

    & .details-skeleton {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 64px;
        gap: 10px;

        & .line-skeleton1 {
            width: 200px;
            height: 15px;
            background-color:  #3d375e7f;
        }

        & .line-skeleton2 {
            width: 150px;
            height: 10px;
            background-color:  #3d375e7f;
        }
    

    }
`