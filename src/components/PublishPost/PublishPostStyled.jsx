import styled from "styled-components";

export const PublishPostContainer = styled.main`
    display: flex;
    width: 80%;
`

export const Post = styled.section`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 12rem;
    margin-top: 2rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    p{
        color:#707070

    }
    div{
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
    }
    img{
        width: 50px;
        height: 50px;
        margin-bottom:100px;
        border-radius: 26.5px;
        padding: 8px;

    }
    div p{
            font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    color: #707070;
    }
`

export const InputUrl = styled.input`
    width: 95%;
    height: 2rem;
    background: #EFEFEF;
    border-radius: 5px;
    margin-top:10px;
    border:none;
    ::placeholder{
        padding-left:12px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }
`

export const InputDescription = styled.input`
    width: 95%;
    height: 2rem;
    left: 501px;
    top: 313px;
    background: #EFEFEF;
    border-radius: 5px;
    margin-top:5px;
    border:none;
    ::placeholder{
        padding-left:12px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
        padding-top:8px;
    }
 `

export const Publish = styled.button`
    width: 7rem;
    height: 2rem;
    background: #1877F2;
    border-radius: 5px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    align-self: flex-end;
    margin-top:0.5rem;
    margin-right: 1.5rem;
`

