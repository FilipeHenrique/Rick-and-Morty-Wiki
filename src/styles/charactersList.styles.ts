import styled from "styled-components";

export const PageContainer = styled.div`

  background-color: #15141b;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .topbar-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  & .topbar-image {
    height: 60px;
  }

  & .title {
    color: #edecee	;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`

export const CharactersContainer = styled.div`
  padding: 50px 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  & .notfound {
    font-size: 20px;
    color: #edecee	;
  }
`;


