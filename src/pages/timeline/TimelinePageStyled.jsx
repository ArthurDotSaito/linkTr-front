import styled from "styled-components";

export const TimelinePageContainer = styled.main`
    display: flex;
    width: 100%;
    height: 100vw;
    flex-direction: column;
    background-color: #333333;
    align-items: center;
`

export const TimelineMainContent = styled.main`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    h1{
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 1.9rem;
        line-height: 54px;
        letter-spacing: 0.05em;
        color: white;
        padding-left: 10px;
    }
    @media only screen and (max-width:650px) {
        width: 100%;
    }
`