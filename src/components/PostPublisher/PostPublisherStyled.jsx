import styled from "styled-components";

export const PostPublisherContainer = styled.main`
    width: 100%;
    height: 15rem;
    display: flex;
    background-color: white;
    border-radius: 25px;
`
export const ProfileImage = styled.figure`
    width: 4rem;
    height: 3rem;
    border-radius: 26px;
    background-color: red;
    margin: 10px 10px 10px 10px;
`

export const PostPublisherDetails = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
    h2{
        font-family: 'Lato';
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #707070;
        padding-left: 10px;
    }
`

export const PostForm = styled.form`
    height: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 5px;
`

export const PostUrl = styled.input`
    background-color: #EFEFEF;
    height: 3.5rem;
    border-radius: 5px;
    border: none;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #707070;
    padding-left: 10px;
    color: #949494;

    ::placeholder{
        font-family: 'Lato';
        font-weight: 300;
        font-size: 1rem;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #707070;
        padding-left: 10px;
        color: #949494;
    }
`

export const PostDescription = styled.input`
    background-color: #EFEFEF;
    height: 3.5rem;
    border-radius: 5px;
    border: none;    font-family: 'Lato';
    font-weight: 300;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #707070;
    padding-left: 10px;
    color: #949494;
    ::placeholder{
        font-family: 'Lato';
        font-weight: 300;
        font-size: 1rem;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #707070;
        padding-left: 10px;
        color: #949494;
    }
    
`

export const Button = styled.button`
    width: 20%;
    height: 2.2rem;
    font-family: 'Lato';
    font-weight: 700;
    background-color: #1877F2;
    font-size: 1rem;
    color: white;
    line-height: 16px;
    border-radius: 5px;
    cursor: pointer;
    align-self: flex-end;
`





